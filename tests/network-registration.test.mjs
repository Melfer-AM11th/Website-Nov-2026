import assert from 'node:assert/strict';
import { test } from 'node:test';
import { getRegistrationReturnUrl, prepareNetworkRegistration } from '../lib/network-registration.js';

function registration(role = 'Individual professional', file = new File([new Uint8Array([0, 255, 13, 10, 42])], 'CV résumé.pdf', { type: 'application/pdf' })) {
  const data = new FormData();
  data.set('network_role', role);
  data.set('name', 'Test Applicant');
  data.set('email', 'applicant@example.invalid');
  data.set('subject', '[Candidate] Individual professional | Test Applicant');
  data.set('message', 'Network registration\nFull name: Test Applicant\nNote: مرحبًا');
  data.set('consent', 'yes');
  if (file) data.set('cv', file);
  return data;
}

for (const [role, destination] of [
  ['Individual professional', 'hr@amelleventh.com'],
  ['Referral agent', 'engage@amelleventh.com'],
  ['BPO company', 'engage@amelleventh.com'],
  ['IT company', 'engage@amelleventh.com'],
  ['Accounting & tax firm', 'engage@amelleventh.com'],
]) {
  test(`${role} is routed to the intended registration inbox`, () => {
    const prepared = prepareNetworkRegistration(registration(role));
    assert.equal(prepared.destination, destination);
    assert.equal(prepared.payload.get('network_role'), role);
  });
}

test('an invalid or missing role cannot choose a destination', () => {
  for (const role of ['', 'Unknown role', 'attacker@example.invalid']) {
    assert.throws(() => prepareNetworkRegistration(registration(role)));
  }
  const data = registration();
  data.delete('network_role');
  assert.throws(() => prepareNetworkRegistration(data));
});

test('registration details and the selected file are prepared together without changing the input', async () => {
  const data = registration();
  const originalFile = data.get('cv');
  const originalMessage = data.get('message');

  const { payload } = prepareNetworkRegistration(data);

  assert.equal(payload.has('cv'), false);
  assert.equal(payload.getAll('attachment').length, 1);
  assert.equal(payload.get('attachment').name, originalFile.name);
  assert.equal(payload.get('attachment').type, 'application/pdf');
  assert.deepEqual(await payload.get('attachment').arrayBuffer(), await originalFile.arrayBuffer());
  for (const field of ['network_role', 'name', 'email', 'subject', 'message', 'consent']) {
    assert.equal(payload.get(field), data.get(field), `Registration field ${field} is preserved`);
  }
  assert.equal(data.get('cv'), originalFile);
  assert.equal(data.get('message'), originalMessage);
  assert.equal(data.has('attachment'), false);
  assert.equal(data.has('_subject'), false);
  assert.equal(data.has('_template'), false);
});

test('a 5 MiB selected document remains attached to the registration', () => {
  const data = registration('Individual professional', new File([new Uint8Array(5 * 1024 * 1024)], 'large.pdf', { type: 'application/pdf' }));

  const { payload } = prepareNetworkRegistration(data);

  assert.equal(payload.get('attachment').name, 'large.pdf');
  assert.equal(payload.get('attachment').size, 5 * 1024 * 1024);
  assert.equal(payload.get('message'), data.get('message'));
});

test('the native submission receives the subject and table format without a provider challenge, preserving the honeypot', () => {
  const data = registration();
  data.set('_honey', '');
  const { payload } = prepareNetworkRegistration(data);

  assert.equal(payload.get('_subject'), data.get('subject'));
  assert.equal(payload.get('_template'), 'table');
  assert.equal(payload.get('_captcha'), 'false');
  assert.equal(payload.get('_honey'), '');
});

test('an optional-document registration without a file keeps its details and omits the attachment', () => {
  const data = registration('Referral agent', null);

  const { payload } = prepareNetworkRegistration(data);

  assert.equal(payload.has('attachment'), false);
  assert.equal(payload.has('cv'), false);
  assert.equal(payload.get('message'), data.get('message'));
});

test('the empty browser file-input entry is omitted without changing the registration', () => {
  const data = registration('BPO company', new File([], '', { type: 'application/octet-stream' }));

  const { payload } = prepareNetworkRegistration(data);

  assert.equal(payload.has('attachment'), false);
  assert.equal(payload.has('cv'), false);
  assert.equal(payload.get('message'), data.get('message'));
  assert.equal(data.get('cv').name, '');
});

test('the local registration return URL preserves the local origin and port', () => {
  assert.equal(String(getRegistrationReturnUrl('http://localhost:3000/network?lang=ar#apply', 'en')), 'http://localhost:3000/registration-complete?lang=en');
});

test('the production registration return URL removes prior query parameters and hash', () => {
  const result = String(getRegistrationReturnUrl('https://amelleventh.com/network?name=Test%20Applicant&email=test%40example.invalid#private-note', 'ar'));

  assert.equal(result, 'https://amelleventh.com/registration-complete?lang=ar');
  const url = new URL(result);
  assert.equal(url.hash, '');
  assert.deepEqual([...url.searchParams.keys()], ['lang']);
});

test('the registration return locale accepts Arabic exactly and otherwise defaults to English', () => {
  assert.equal(new URL(getRegistrationReturnUrl('https://amelleventh.com/', 'ar')).searchParams.get('lang'), 'ar');
  for (const language of [undefined, null, '', 'en', 'AR', 'invalid']) {
    assert.equal(new URL(getRegistrationReturnUrl('https://amelleventh.com/', language)).searchParams.get('lang'), 'en');
  }
});

test('the registration return URL rejects invalid URLs and protocols other than HTTP or HTTPS', () => {
  for (const pageUrl of ['not a URL', 'ftp://amelleventh.com/', 'file:///tmp/index.html', 'javascript:alert(1)', 'data:text/html,test']) {
    assert.throws(() => getRegistrationReturnUrl(pageUrl, 'en'), `Rejected return origin: ${pageUrl}`);
  }
});
