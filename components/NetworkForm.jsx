'use client';

import { useEffect, useRef, useState } from 'react';
import { useLanguage } from './Language';
import PhoneField, { fullPhone, phoneOk } from './PhoneField';

const individualRole = 'Individual professional';
const roles = [
  [individualRole, 'محترف مستقل', 'e.g. mortgage sales, collections, customer service', 'مثال: مبيعات التمويل العقاري، التحصيل، خدمة العملاء'],
  ['Referral agent', 'وكيل إحالة', 'e.g. company-setup agent, property broker, consultant', 'مثال: وكيل تأسيس شركات، وسيط عقاري، مستشار'],
  ['BPO company', 'شركة BPO', 'e.g. voice and chat support, collections, back office', 'مثال: دعم صوتي ودردشة، تحصيل، خدمات مساندة'],
  ['IT company', 'شركة تقنية معلومات', 'e.g. ERP, custom software, managed IT', 'مثال: ERP، برمجيات مخصصة، خدمات تقنية مُدارة'],
  ['Accounting & tax firm', 'شركة محاسبة وضرائب', 'e.g. bookkeeping, VAT, corporate tax, R&D tax', 'مثال: مسك الدفاتر، ضريبة القيمة المضافة، ضريبة الشركات، ضريبة البحث والتطوير'],
];
const locations = [
  ['UAE', 'الإمارات'], ['Philippines', 'الفلبين'], ['India', 'الهند'],
  ['Pakistan', 'باكستان'], ['Saudi Arabia', 'السعودية'], ['Egypt', 'مصر'],
  ['Jordan', 'الأردن'], ['Other GCC', 'دولة خليجية أخرى'], ['Other', 'أخرى'],
];
const availability = [
  ['Immediately', 'فورًا'], ['Within 1 month', 'خلال شهر'], ['1–3 months', 'خلال 1–3 أشهر'],
];
const fileTypes = '.pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document';

function registrationMessage(data) {
  const fields = [
    ['Network role', 'network_role'], ['Full name', 'name'], ['Email', 'email'],
    ['WhatsApp', 'whatsapp'], ['Company', 'company'], ['Based in', 'based'],
    ['Expertise or service focus', 'expertise'], ['Experience', 'exp'], ['Availability', 'avail'],
    ['Team size or capacity', 'capacity'], ['Languages', 'languages'], ['LinkedIn or website', 'linkedin'],
    ['Consent to keep details and documents and to be contacted', 'consent'], ['Site language', 'language'],
  ];
  const lines = ['Network registration'];
  for (const [label, field] of fields) {
    const value = data.get(field);
    if (value) lines.push(label + ': ' + value);
  }
  const filename = data.get('cv')?.name;
  if (filename) lines.push('Selected file: ' + filename);
  if (data.get('message')) lines.push('Note: ' + data.get('message'));
  return lines.join('\n');
}

function validate(form) {
  let firstInvalid;
  for (const field of form.querySelectorAll('input, select')) {
    if (field.disabled) continue;
    let valid = !field.required || (field.checkValidity() && field.value.trim() !== '');
    if (field.name === 'cv' && field.files.length) {
      const file = field.files[0];
      valid = file.size <= 5 * 1024 * 1024 && /\.(pdf|docx?)$/i.test(file.name);
    }
    if (field.name === 'wa_number') valid = phoneOk(form.elements.wa_code.value, field.value, true);
    field.classList.toggle('invalid', !valid);
    if (!valid && !firstInvalid) firstInvalid = field;
  }
  firstInvalid?.focus();
  return firstInvalid?.name;
}

export default function NetworkForm() {
  const { language, t } = useLanguage();
  const formRef = useRef(null);
  const pending = useRef(false);
  const request = useRef(null);
  const revision = useRef(0);
  const closeTimer = useRef(null);
  const [role, setRole] = useState('');
  const [status, setStatus] = useState('');
  const [sending, setSending] = useState(false);
  const [fallback, setFallback] = useState(null);
  const individual = !role || role === individualRole;
  const company = !individual && role !== 'Referral agent';
  const [, , focusEn, focusAr] = roles.find(([value]) => value === role) || roles[0];

  useEffect(() => {
    function openApplication(event) {
      const button = event.target.closest('[data-apply]');
      if (!button) return;
      window.clearTimeout(closeTimer.current);
      revision.current++;
      setRole(button.dataset.apply.replace(/&amp;/g, '&'));
      setStatus('');
      formRef.current.querySelectorAll('.invalid').forEach(field => field.classList.remove('invalid'));
      formRef.current.closest('dialog').showModal();
    }
    document.addEventListener('click', openApplication);
    return () => {
      document.removeEventListener('click', openApplication);
      window.clearTimeout(closeTimer.current);
      request.current?.abort();
    };
  }, []);

  useEffect(() => { setStatus(''); }, [language]);

  function edit(event) {
    revision.current++;
    window.clearTimeout(closeTimer.current);
    event.target.classList.remove('invalid');
  }

  async function submit(event) {
    event.preventDefault();
    if (pending.current) return;
    const form = event.currentTarget;
    const invalidField = validate(form);
    if (invalidField) {
      setStatus(invalidField === 'cv' ? 'file' : invalidField === 'wa_number' ? 'phone' : 'invalid');
      return;
    }
    if (form.elements._honey.value) return;

    const data = new FormData(form);
    const destination = individual ? 'hr@amelleventh.com' : 'engage@amelleventh.com';
    const subject = '[' + (individual ? 'Candidate' : 'Partner') + '] ' + role + ' | ' + data.get('name');
    data.set('whatsapp', fullPhone(data.get('wa_code'), data.get('wa_number')));
    data.set('language', language === 'ar' ? 'Arabic' : 'English');
    data.set('_subject', subject);
    data.set('_template', 'table');
    data.set('_captcha', 'false');
    const message = registrationMessage(data);
    const filename = data.get('cv')?.name;
    if (!filename) data.delete('cv');
    const body = filename ? message + '\n\n' + t('Please attach the selected file before sending: ', 'يرجى إرفاق الملف المختار قبل الإرسال: ') + filename : message;
    setFallback({
      destination, filename,
      href: 'mailto:' + destination + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body),
    });

    const submittedRevision = revision.current;
    const controller = new AbortController();
    request.current = controller;
    const timeout = window.setTimeout(() => controller.abort(), 20000);
    pending.current = true;
    setSending(true);
    setStatus('');
    try {
      const response = await fetch('https://formsubmit.co/ajax/' + destination, {
        method: 'POST', body: data, headers: { Accept: 'application/json' }, signal: controller.signal,
      });
      const result = await response.json();
      if (formRef.current !== form) return;
      if (/activat|confirm (?:your|the) email/i.test(result?.message || '')) {
        setStatus('activation');
        return;
      }
      if (!response.ok || String(result?.success) !== 'true') {
        setStatus('fallback');
        return;
      }
      if (submittedRevision === revision.current) {
        form.reset();
        setRole('');
        closeTimer.current = window.setTimeout(() => form.closest('dialog')?.close(), 4500);
      }
      setStatus('success');
    } catch {
      if (formRef.current === form) setStatus('fallback');
    } finally {
      window.clearTimeout(timeout);
      request.current = null;
      pending.current = false;
      if (formRef.current === form) setSending(false);
    }
  }

  const choose = <option value="">{t('Choose one', 'اختر')}</option>;
  const options = choices => choices.map(([value, ar]) => <option key={value} value={value}>{t(value, ar)}</option>);
  const optional = <span className="opt">{t('(optional)', '(اختياري)')}</span>;
  const messages = {
    invalid: t('Fill in the highlighted fields to register.', 'يرجى تعبئة الحقول المظلّلة للتسجيل.'),
    file: t('Attach a PDF or Word file, up to 5 MB.', 'أرفق ملف PDF أو Word بحجم لا يتجاوز 5 ميغابايت.'),
    phone: t('Check your mobile number: choose the country code, then enter the number without the leading 0.', 'تحقّق من رقم الجوال: اختر رمز الدولة ثم أدخل الرقم دون الصفر الأول.'),
    success: t('Your registration details have been sent. We will contact you when your profile fits one of our programmes.', 'أُرسلت بيانات تسجيلك. سنتواصل معك حين يناسب ملفّك أحد برامجنا.'),
  };
  const showFallback = status === 'fallback' || status === 'activation';
  const statusClass = status === 'success' ? 'ok' : showFallback ? 'warn' : status ? 'err' : '';

  return (
    <form className="enq-form" id="candForm" noValidate ref={formRef} onSubmit={submit} onChange={edit}>
      <input type="text" name="_honey" className="hp" tabIndex={-1} autoComplete="off" aria-hidden="true" />
      <label>
        <span>{t('I am joining as', 'أنضم بصفتي')}</span>
        <select id="netRole" name="network_role" value={role} onChange={event => setRole(event.target.value)} required>{choose}{options(roles)}</select>
      </label>
      <div className="row2">
        <label><span>{t('Full name', 'الاسم الكامل')}</span><input name="name" required autoComplete="name" /></label>
        <label><span>{t('Email account', 'حساب البريد الإلكتروني')}</span><input type="email" name="email" required autoComplete="email" dir="ltr" /></label>
      </div>
      <label id="netCompanyRow" className={individual ? 'opts-hide' : undefined}>
        <span>{t('Company name', 'اسم الشركة')}</span><input name="company" id="netCompany" required={company} disabled={individual} autoComplete="organization" />
      </label>
      <div className="row2">
        <label><span>{t('Mobile number (WhatsApp)', 'رقم الجوال (واتساب)')}</span><PhoneField codeId="candCode" numberId="candNum" required /></label>
        <label><span>{t('Where are you based?', 'أين مقرّك؟')}</span><select name="based" required>{choose}{options(locations)}</select></label>
      </div>
      <label><span>{t('Your expertise or service focus', 'مجال خبرتك أو خدماتك')}</span><input name="expertise" id="netFocus" required placeholder={t(focusEn, focusAr)} /></label>
      <div className="row2">
        <label>
          <span id="netExpLbl">{individual ? t('Years of experience', 'سنوات الخبرة') : t('Years of experience or in business', 'سنوات الخبرة أو عمر الشركة')}</span>
          <select name="exp" required>{choose}{['Under 1', '1–3', '3–5', '5–10', '10+'].map(value => <option key={value} value={value}>{value}</option>)}</select>
        </label>
        <label id="netAvailRow" className={individual ? undefined : 'opts-hide'}>
          <span>{t('When can you start?', 'متى يمكنك البدء؟')}</span><select name="avail" id="netAvail" disabled={!individual} required={role === individualRole}>{choose}{options(availability)}</select>
        </label>
        <label id="netSizeRow" className={company ? undefined : 'opts-hide'}>
          <span>{t('Team size or capacity', 'حجم فريقك أو قدرتك')}</span><input name="capacity" disabled={!company} placeholder={t('e.g. 40 seats', 'مثال: 40 مقعدًا')} />
        </label>
      </div>
      <div className="row2">
        <label><span>{t('Languages', 'اللغات')} {optional}</span><input name="languages" placeholder="English, Arabic, Tagalog…" /></label>
        <label><span>{t('LinkedIn or website', 'لينكدإن أو الموقع الإلكتروني')} {optional}</span><input type="url" name="linkedin" placeholder="https://" dir="ltr" /></label>
      </div>
      <label>
        <span id="netFileLbl">{individual ? t('CV (PDF or Word, up to 5 MB)', 'السيرة الذاتية (PDF أو Word، حتى 5 ميغابايت)') : <>{t('Company profile or brochure', 'ملف الشركة أو التعريف بها')} <span className="opt">{t('(optional, PDF or Word, up to 5 MB)', '(اختياري، PDF أو Word، حتى 5 ميغابايت)')}</span></>}</span>
        <input type="file" name="cv" id="candCv" accept={fileTypes} required={role === individualRole} />
      </label>
      <label><span>{t('A short note', 'نبذة قصيرة')} {optional}</span><textarea name="message" rows={3} /></label>
      <label className="chk">
        <input type="checkbox" name="consent" value="yes" required />
        <span>{t('I agree that AMElleventh may keep my details and documents for recruitment and partnership purposes and contact me about them.', 'أوافق على أن تحتفظ AMElleventh ببياناتي ومستنداتي لأغراض التوظيف والشراكة، وأن تتواصل معي بشأنها.')}</span>
      </label>
      <div className="send-row"><button className="btn btn-primary" type="submit" id="candSend" disabled={sending}>
        <svg className="i" style={{ width: 18, height: 18 }}><use href="#i-mail" /></svg>
        <span>{sending ? t('Sending…', 'جارٍ الإرسال…') : t('Register my interest', 'سجّل اهتمامي')}</span>
      </button></div>
      <p className="send-note">{t('AMElleventh never charges anyone to join, and only ever asks for documents from our official amelleventh.com email addresses.', 'لا تفرض AMElleventh أي رسوم على المسجّلين، ولا نطلب مستندات إلا من بريدنا الرسمي على amelleventh.com.')}</p>
      <p className={('form-status ' + statusClass).trim()} id="candStatus" role="status" aria-live="polite">
        {showFallback && fallback ? <>
          {status === 'activation'
            ? t('This inbox is awaiting activation. Email your registration directly to', 'صندوق البريد بانتظار التفعيل. أرسل تسجيلك مباشرةً إلى')
            : t("We couldn't confirm the registration was sent. Email your details to", 'تعذّر تأكيد إرسال التسجيل. أرسل بياناتك بالبريد إلى')} <a href={fallback.href}>{fallback.destination}</a>.
          {fallback.filename && <> {t('Attach your selected file before sending', 'أرفق الملف المختار قبل الإرسال')}: <bdi>{fallback.filename}</bdi>.</>}
        </> : messages[status]}
      </p>
    </form>
  );
}
