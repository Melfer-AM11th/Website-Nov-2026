'use client';

import { useRef, useState } from 'react';
import { useLanguage } from './Language';
import PhoneField, { countryCode, fullPhone, phoneOk } from './PhoneField';

const subject = 'New pilot enquiry from amelleventh.com';

function enquiryLinks(form, language) {
  const value = (name) => form.elements.namedItem(name).value.trim();
  const whatsapp = fullPhone(value('wa_code'), value('wa_number'));
  const type = value('function') === 'Partnership' ? 'Partner' : 'Client';
  const message = [
    subject, '',
    'Type: ' + type,
    'Name: ' + value('name'),
    'Company: ' + value('company'),
    'Email account: ' + value('email'),
    whatsapp ? 'WhatsApp: ' + whatsapp : null,
    'Business location: ' + value('location'),
    'Needs: ' + value('function'),
    value('team_size') ? 'Team size: ' + value('team_size') : null,
    value('delivery_pref') ? 'Preferred delivery hub: ' + value('delivery_pref') : null,
    value('start') ? 'Target start: ' + value('start') : null,
    value('message') ? '' : null,
    value('message') ? 'Message: ' + value('message') : null,
    language === 'ar' ? '(Enquiry sent from the Arabic version of the site)' : null,
  ].filter((line) => line !== null).join('\n');

  return {
    phone: whatsapp,
    type,
    email: 'mailto:engage@amelleventh.com?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(message),
    whatsapp: 'https://wa.me/971527188093?text=' + encodeURIComponent(message),
  };
}

export default function EnquiryForm() {
  const { language, t } = useLanguage();
  const formRef = useRef(null);
  const sending = useRef(false);
  const codeTouched = useRef(false);
  const [partnership, setPartnership] = useState(false);
  const [state, setState] = useState('idle');
  const [links, setLinks] = useState(null);

  function valid(form) {
    let invalid = null;
    form.querySelectorAll('[required]').forEach((field) => {
      const valid = field.checkValidity() && field.value.trim() !== '';
      field.classList.toggle('invalid', !valid);
      if (!valid && !invalid) invalid = field;
    });
    const fields = form.elements;
    const phoneValid = phoneOk(fields.wa_code.value, fields.wa_number.value);
    fields.wa_number.classList.toggle('invalid', !phoneValid);
    if (!phoneValid && !invalid) invalid = fields.wa_number;
    if (invalid) {
      setState(phoneValid ? 'invalid' : 'invalidPhone');
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
    if (!valid(form) || form.elements._honey.value) return;
    const prepared = enquiryLinks(form, language);
    setLinks(prepared);

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
      data.set('whatsapp', prepared.phone);
      data.set('type', prepared.type);
      data.set('form_type', 'pilot');
      data.set('lang', language);
      // Existing EmailJS templates display {{message}} for additional details.
      const details = data.get('message').trim();
      data.set('details', details);
      data.set('message', [
        details,
        'Enquiry type: ' + prepared.type,
        'Preferred delivery hub: ' + (data.get('delivery_pref') || 'No preference: advise me'),
      ].filter(Boolean).join('\n'));
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
      codeTouched.current = false;
      setPartnership(false);
      setState('sent');
    } catch {
      setState('fallback');
    } finally {
      window.clearTimeout(timeout);
      sending.current = false;
    }
  }

  const options = (items) => items.map(([english, arabic, value = english]) => (
    <option key={value} value={value}>{t(english, arabic)}</option>
  ));
  const clearInvalid = (event) => event.target.classList.remove('invalid');
  const statusClass = ['invalid', 'invalidPhone'].includes(state) ? ' err' : state === 'sent' ? ' ok' : ['fallback', 'whatsapp'].includes(state) ? ' warn' : '';

  return (
    <form ref={formRef} className="enq-form" id="enqForm" noValidate onSubmit={sendEnquiry}
      onInput={clearInvalid} onChange={clearInvalid}>
      <input type="text" name="_honey" className="hp" tabIndex={-1} autoComplete="off" aria-hidden="true" />
      <input type="hidden" name="language" id="enqLang" value={language === 'ar' ? 'Arabic' : 'English'} />
      <div className="row2">
        <label><span>{t('Your name', 'اسمك')}</span><input name="name" required autoComplete="name" /></label>
        <label><span>{t('Company', 'الشركة')}</span><input name="company" required autoComplete="organization" /></label>
      </div>
      <div className="row2">
        <label><span>{t('Email account', 'حساب البريد الإلكتروني')}</span><input type="email" name="email" required autoComplete="email" dir="ltr" /></label>
        <label htmlFor="waNum"><span>{t('WhatsApp number', 'رقم واتساب')} <span className="opt">{t('(recommended)', '(موصى به)')}</span></span>
          <PhoneField codeId="waCode" numberId="waNum" onCodeChange={() => { codeTouched.current = true; }} />
        </label>
      </div>
      <div className="row2">
        <label><span>{t('Where is your business?', 'أين يقع نشاطك؟')}</span><select name="location" id="enqLoc" required defaultValue=""
          onChange={(event) => {
            const code = countryCode(event.target.value);
            if (code && !codeTouched.current) event.target.form.elements.wa_code.value = code;
          }}>
          <option value="">{t('Choose one', 'اختر')}</option>
          {options([['UAE', 'الإمارات'], ['Saudi Arabia', 'السعودية'], ['Qatar', 'قطر'], ['Kuwait', 'الكويت'], ['Bahrain', 'البحرين'], ['Oman', 'عُمان'], ['Other', 'أخرى']])}
        </select></label>
        <label><span>{t('What do you need?', 'ماذا تحتاج؟')}</span><select name="function" id="enqFn" required defaultValue=""
          onChange={(event) => {
            const partner = event.target.value === 'Partnership';
            setPartnership(partner);
            if (partner) {
              const { team_size, start } = event.target.form.elements;
              team_size.classList.remove('invalid');
              start.classList.remove('invalid');
            }
          }}>
          <option value="">{t('Choose one', 'اختر')}</option>
          {options([['Customer operations', 'عمليات خدمة العملاء'], ['Sales & collections teams', 'فرق المبيعات والتحصيل'], ['Back office / finance', 'الخدمات المساندة / المالية'], ['HR, payroll or recruitment', 'الموارد البشرية أو الرواتب أو التوظيف'], ['A mix of functions', 'مزيج من الوظائف'], ['Consultancy, IT or R&D tax', 'استشارات أو حلول تقنية أو ضريبة البحث والتطوير'], ['Partnership (BPO or agency)', 'شراكة (BPO أو وكالة)', 'Partnership']])}
        </select></label>
      </div>
      <div className="row2">
        <label><span>{t('Approximate team size', 'حجم الفريق التقريبي')}</span><select name="team_size" id="enqSize" required={!partnership} defaultValue="">
          <option value="">{t('Choose one', 'اختر')}</option>
          {options([['Fewer than 30', 'أقل من 30'], ['30–50', '30–50'], ['50–100', '50–100'], ['More than 100', 'أكثر من 100'], ['Not sure yet', 'لست متأكدًا بعد']])}
        </select></label>
        <label><span>{t('Target start', 'موعد البدء المستهدف')}</span><select name="start" id="enqStart" required={!partnership} defaultValue="">
          <option value="">{t('Choose one', 'اختر')}</option>
          {options([['As soon as possible', 'في أقرب وقت ممكن'], ['In 1–3 months', 'خلال 1–3 أشهر'], ['In 3–6 months', 'خلال 3–6 أشهر'], ['Just exploring', 'أستكشف فقط']])}
        </select></label>
      </div>
      <label><span>{t('Preferred delivery location', 'مركز التنفيذ المفضّل')} <span className="opt">{t('(optional)', '(اختياري)')}</span></span>
        <select name="delivery_pref" id="enqHub" defaultValue="">
          <option value="">{t('No preference: advise me', 'لا تفضيل: انصحوني')}</option>
          {options([['Philippines', 'الفلبين'], ['India', 'الهند'], ['Arab region (Arabic-speaking team)', 'المنطقة العربية (فريق ناطق بالعربية)'], ['A mix of hubs', 'مزيج من المراكز']])}
        </select>
      </label>
      <label><span>{t('Anything else we should know?', 'هل من شيء آخر نود معرفته؟')} <span className="opt">{t('(optional)', '(اختياري)')}</span></span><textarea name="message" rows="3"></textarea></label>
      <div className="send-row">
        <button className="btn btn-primary" type="submit" id="enqEmail" disabled={state === 'sending'}>
          <svg className="i" style={{ width: '18px', height: '18px' }}><use href="#i-mail" /></svg>
          <span>{state === 'sending' ? t('Sending…', 'جارٍ الإرسال…') : t('Send my pilot request', 'أرسل طلب المشروع التجريبي')}</span>
        </button>
        <button className="btn btn-wa" type="button" id="enqWa" onClick={openWhatsApp} disabled={state === 'sending'}>
          <svg className="i" style={{ width: '18px', height: '18px' }}><use href="#i-chat" /></svg>
          <span>{t('Send on WhatsApp', 'أرسل عبر واتساب')}</span>
        </button>
      </div>
      <p className="send-note">{t("You'll get a confirmation email the moment your request reaches us. WhatsApp opens with your message ready; tap send there to deliver it.", 'نرسل لك تأكيدًا على بريدك فور وصول طلبك. أما واتساب فيفتح برسالتك جاهزة، فاضغط إرسال لتصل إلينا.')}</p>
      <p className={`form-status${statusClass}`} id="enqStatus" role="status" aria-live="polite">
        {state === 'invalid' && t('Fill in the highlighted fields to send your enquiry.', 'يرجى تعبئة الحقول المظلّلة لإرسال استفسارك.')}
        {state === 'invalidPhone' && t('Check your mobile number: choose the country code, then enter the number without the leading 0.', 'تحقّق من رقم الجوال: اختر رمز الدولة ثم أدخل الرقم دون الصفر الأول.')}
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
