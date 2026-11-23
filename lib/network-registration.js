const individualRole = 'Individual professional';
const partnerRoles = new Set(['Referral agent', 'BPO company', 'IT company', 'Accounting & tax firm']);

export function prepareNetworkRegistration(data) {
  const role = data.get('network_role');
  if (role !== individualRole && !partnerRoles.has(role)) throw new Error('Choose a valid network role');
  const destination = role === individualRole ? 'hr@amelleventh.com' : 'engage@amelleventh.com';
  const payload = new FormData();
  for (const [name, value] of data) {
    if (name === 'cv') {
      if (value?.name) payload.append('attachment', value);
    } else {
      payload.append(name, value);
    }
  }
  payload.set('_subject', data.get('subject') || 'New network registration');
  payload.set('_template', 'table');
  // The hidden _honey field stays in place; avoid an extra provider CAPTCHA page.
  payload.set('_captcha', 'false');
  return { destination, payload };
}

export function getRegistrationReturnUrl(pageUrl, language) {
  const url = new URL('/registration-complete', pageUrl);
  if (!['http:', 'https:'].includes(url.protocol)) throw new Error('Registration requires a web URL');
  url.searchParams.set('lang', language === 'ar' ? 'ar' : 'en');
  return url.href;
}

export function sendNetworkRegistration(form, data) {
  const { destination, payload } = prepareNetworkRegistration(data);
  payload.set('_next', getRegistrationReturnUrl(form.ownerDocument.location.href, data.get('lang')));
  form.action = 'https://formsubmit.co/' + destination;
  form.method = 'post';
  form.enctype = 'multipart/form-data';

  // Native multipart submission is FormSubmit's documented attachment route.
  // Keep the selected file in the original input and transform only the wire data.
  const attachRegistration = event => {
    for (const name of new Set(event.formData.keys())) event.formData.delete(name);
    for (const [name, value] of payload) event.formData.append(name, value);
  };
  form.addEventListener('formdata', attachRegistration, { once: true });
  try {
    HTMLFormElement.prototype.submit.call(form);
  } finally {
    form.removeEventListener('formdata', attachRegistration);
  }
}
