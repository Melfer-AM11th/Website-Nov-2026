'use client';

import { useRef, useState } from 'react';
import { useLanguage } from './Language';

const subject = 'New pilot enquiry from amelleventh.com';

function enquiryLinks(form, language) {
  const value = (name) => form.elements.namedItem(name).value.trim();
  const message = [
    subject, '',
    'Name: ' + value('name'),
    'Company: ' + value('company'),
    'Work email: ' + value('email'),
    value('whatsapp') ? 'WhatsApp: ' + value('whatsapp') : null,
    'Business location: ' + value('location'),
    'Needs: ' + value('function'),
    'Team size: ' + value('team_size'),
    'Target start: ' + value('start'),
    value('message') ? '' : null,
    value('message') ? 'Message: ' + value('message') : null,
    language === 'ar' ? '(Enquiry sent from the Arabic version of the site)' : null,
  ].filter((line) => line !== null).join('\n');

  return {
    email: 'mailto:engage@amelleventh.com?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(message),
    whatsapp: 'https://wa.me/971527188093?text=' + encodeURIComponent(message),
  };
}

export default function EnquiryForm() {
  const { language, t } = useLanguage();
  const formRef = useRef(null);
  const sending = useRef(false);
  const [state, setState] = useState('idle');
  const [links, setLinks] = useState(null);

  function valid(form) {
    let invalid = null;
    form.querySelectorAll('[required]').forEach((field) => {
      const valid = field.checkValidity() && field.value.trim() !== '';
      field.classList.toggle('invalid', !valid);
      if (!valid && !invalid) invalid = field;
    });
    if (invalid) {
      setState('invalid');
      invalid.focus();
      return false;
    }
    return true;
  }

  function openWhatsApp() {
    if (sending.current) return;
    const form = formRef.current;
    if (!valid(form)) return;

    const prepared = enquiryLinks(form, language);
    setLinks(prepared);
    // With noopener, a successful open can return null. Always offer the link.
    window.open(prepared.whatsapp, '_blank', 'noopener');
    setState('whatsapp');
  }

  async function sendEnquiry(event) {
    event.preventDefault();
    if (sending.current) return;

    const form = event.currentTarget;
    if (!valid(form)) return;
    setLinks(enquiryLinks(form, language));

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
    if (!serviceId || !templateId || !publicKey) {
      setState('fallback');
      return;
    }

    sending.current = true;
    setState('sending');
    const controller = new AbortController();
    const timeout = window.setTimeout(() => controller.abort(), 20000);
    try {
      const data = new FormData(form);
      data.set('service_id', serviceId);
      data.set('template_id', templateId);
      data.set('user_id', publicKey);
      // The SDK reads localStorage on import, which can block the form in restricted browsers.
      const response = await fetch('https://api.emailjs.com/api/v1.0/email/send-form', {
        method: 'POST',
        body: data,
        signal: controller.signal,
      });
      if (!response.ok) throw new Error('EmailJS request failed');
      form.reset();
      setState('sent');
    } catch {
      setState('fallback');
    } finally {
      window.clearTimeout(timeout);
      sending.current = false;
    }
  }

  const options = (items) => items.map(([english, arabic]) => (
    <option key={english} value={english}>{t(english, arabic)}</option>
  ));
  const clearInvalid = (event) => event.target.classList.remove('invalid');
  const statusClass = state === 'invalid' ? ' err' : state === 'sent' ? ' ok' : ['fallback', 'whatsapp'].includes(state) ? ' warn' : '';

  return (
    <form ref={formRef} className="enq-form" id="enqForm" noValidate onSubmit={sendEnquiry}
      onInput={clearInvalid} onChange={clearInvalid}>
      <input type="hidden" name="language" id="enqLang" value={language === 'ar' ? 'Arabic' : 'English'} />
      <div className="row2">
        <label><span>{t('Your name', 'اسمك')}</span><input name="name" required autoComplete="name" /></label>
        <label><span>{t('Company', 'الشركة')}</span><input name="company" required autoComplete="organization" /></label>
      </div>
      <div className="row2">
        <label><span>{t('Work email', 'البريد الإلكتروني للعمل')}</span><input type="email" name="email" required autoComplete="email" dir="ltr" /></label>
        <label><span>{t('WhatsApp number', 'رقم واتساب')} <span className="opt">{t('(optional)', '(اختياري)')}</span></span><input type="tel" name="whatsapp" autoComplete="tel" dir="ltr" /></label>
      </div>
      <div className="row2">
        <label><span>{t('Where is your business?', 'أين يقع نشاطك؟')}</span><select name="location" required defaultValue="">
          <option value="">{t('Choose one', 'اختر')}</option>
          {options([['UAE', 'الإمارات'], ['Saudi Arabia', 'السعودية'], ['Qatar', 'قطر'], ['Kuwait', 'الكويت'], ['Bahrain', 'البحرين'], ['Oman', 'عُمان'], ['Other', 'أخرى']])}
        </select></label>
        <label><span>{t('What do you need?', 'ماذا تحتاج؟')}</span><select name="function" required defaultValue="">
          <option value="">{t('Choose one', 'اختر')}</option>
          {options([['Customer operations', 'عمليات خدمة العملاء'], ['Back office / finance', 'الخدمات المساندة / المالية'], ['HR, payroll or recruitment', 'الموارد البشرية أو الرواتب أو التوظيف'], ['A mix of functions', 'مزيج من الوظائف'], ['Consultancy, IT or R&D tax', 'استشارات أو حلول تقنية أو ضريبة البحث والتطوير'], ['Partnership', 'شراكة']])}
        </select></label>
      </div>
      <div className="row2">
        <label><span>{t('Approximate team size', 'حجم الفريق التقريبي')}</span><select name="team_size" required defaultValue="">
          <option value="">{t('Choose one', 'اختر')}</option>
          {options([['Fewer than 30', 'أقل من 30'], ['30–50', '30–50'], ['50–100', '50–100'], ['More than 100', 'أكثر من 100'], ['Not sure yet', 'لست متأكدًا بعد']])}
        </select></label>
        <label><span>{t('Target start', 'موعد البدء المستهدف')}</span><select name="start" required defaultValue="">
          <option value="">{t('Choose one', 'اختر')}</option>
          {options([['As soon as possible', 'في أقرب وقت ممكن'], ['In 1–3 months', 'خلال 1–3 أشهر'], ['In 3–6 months', 'خلال 3–6 أشهر'], ['Just exploring', 'أستكشف فقط']])}
        </select></label>
      </div>
      <label><span>{t('Anything else we should know?', 'هل من شيء آخر نود معرفته؟')} <span className="opt">{t('(optional)', '(اختياري)')}</span></span><textarea name="message" rows="3"></textarea></label>
      <div className="send-row">
        <button className="btn btn-primary" type="submit" id="enqEmail" disabled={state === 'sending'}>
          <svg className="i" style={{ width: '18px', height: '18px' }}><use href="#i-mail" /></svg>
          <span>{state === 'sending' ? t('Sending…', 'جارٍ الإرسال…') : t('Send by email', 'إرسال عبر البريد الإلكتروني')}</span>
        </button>
        <button className="btn btn-wa" type="button" id="enqWa" onClick={openWhatsApp} disabled={state === 'sending'}>
          <svg className="i" style={{ width: '18px', height: '18px' }}><use href="#i-chat" /></svg>
          <span>{t('Send on WhatsApp', 'إرسال عبر واتساب')}</span>
        </button>
      </div>
      <p className="send-note">{t('Both send the same details. WhatsApp opens with your message ready; tap send there to deliver it.', 'كلا الخيارين يرسل البيانات نفسها. يفتح واتساب برسالتك جاهزة، فاضغط إرسال لتصل إلينا.')}</p>
      <p className={`form-status${statusClass}`} id="enqStatus" role="status" aria-live="polite">
        {state === 'invalid' && t('Fill in the highlighted fields to send your enquiry.', 'يرجى تعبئة الحقول المظلّلة لإرسال استفسارك.')}
        {state === 'sent' && t("Enquiry sent. We'll reply within one working day.", 'تم إرسال استفسارك. سنردّ عليك خلال يوم عمل واحد.')}
        {state === 'whatsapp' && <>
          {t("Continue in WhatsApp with your enquiry. Tap send there and we'll reply within one working day. ", 'تابع في واتساب مع استفسارك. اضغط إرسال هناك وسنردّ عليك خلال يوم عمل واحد. ')}
          <a href={links.whatsapp} target="_blank" rel="noopener">{t('Open WhatsApp', 'افتح واتساب')}</a>.
        </>}
        {state === 'fallback' && <>
          {t("We couldn't send that automatically. ", 'تعذّر الإرسال تلقائيًا. ')}
          <a href={links.email}>{t('Open it in your email app', 'افتحه في تطبيق البريد')}</a>
          {t(', or ', '، أو ')}
          <a href={links.whatsapp} target="_blank" rel="noopener">{t('send it on WhatsApp', 'أرسله عبر واتساب')}</a>.
        </>}
      </p>
    </form>
  );
}
