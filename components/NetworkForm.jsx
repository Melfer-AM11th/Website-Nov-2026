'use client';

import { useEffect, useRef, useState } from 'react';
import { Translated, useLanguage } from './Language';
import PhoneField, { fullPhone, phoneOk } from './PhoneField';
import { sendNetworkRegistration } from '../lib/network-registration';

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
const attachmentLimit = 5 * 1024 * 1024;

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
      valid = file.size <= attachmentLimit && /\.(pdf|docx?)$/i.test(file.name);
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
  const dialogRef = useRef(null);
  const pending = useRef(false);
  const [role, setRole] = useState('');
  const [status, setStatus] = useState('');
  const [sending, setSending] = useState(false);
  const [fallback, setFallback] = useState(null);
  const [ready, setReady] = useState(false);
  const individual = !role || role === individualRole;
  const company = !individual && role !== 'Referral agent';
  const [, , focusEn, focusAr] = roles.find(([value]) => value === role) || roles[0];

  function openApplication(selectedRole) {
    if (selectedRole !== role) {
      setRole(selectedRole);
      setStatus('');
      formRef.current.querySelectorAll('.invalid').forEach(field => field.classList.remove('invalid'));
    }
    dialogRef.current.showModal();
  }

  useEffect(() => {
    setReady(true);
    function restoreForm() {
      // A native submission can be followed by Back from the result page.
      pending.current = false;
      setSending(false);
    }
    window.addEventListener('pageshow', restoreForm);
    return () => window.removeEventListener('pageshow', restoreForm);
  }, []);

  function edit(event) {
    event.target.classList.remove('invalid');
    setStatus('');
  }

  function submit(event) {
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
    data.set('subject', subject);
    data.set('form_type', 'network');
    data.set('type', individual ? 'Candidate' : 'Partner');
    data.set('lang', language);
    data.set('location', data.get('based'));
    data.set('function', role);
    data.set('team_size', data.get('capacity') || '');
    data.set('start', data.get('avail') || '');
    const message = registrationMessage(data);
    data.set('details', data.get('message') || '');
    data.set('message', message);
    const filename = data.get('cv')?.name;
    if (!filename) data.delete('cv');
    const body = filename ? message + '\n\n' + t('Please attach the selected file before sending: ', 'يرجى إرفاق الملف المختار قبل الإرسال: ') + filename : message;

    pending.current = true;
    setSending(true);
    setStatus('');
    try {
      sendNetworkRegistration(form, data);
      // FormSubmit owns the confirmation page; do not claim delivery here.
    } catch {
      setFallback({
        destination, filename,
        href: 'mailto:' + destination + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body),
      });
      setStatus('fallback');
      pending.current = false;
      setSending(false);
    }
  }

  const choose = <option value="">{t('Choose one', 'اختر')}</option>;
  const options = choices => choices.map(([value, ar]) => <option key={value} value={value}>{t(value, ar)}</option>);
  const optional = <span className="opt">{t('(optional)', '(اختياري)')}</span>;
  const fileSizeLabel = attachmentLimit >= 1024 * 1024
    ? t(`${attachmentLimit / (1024 * 1024)} MB`, `${attachmentLimit / (1024 * 1024)} ميغابايت`)
    : t(`${attachmentLimit / 1024} KB`, `${attachmentLimit / 1024} كيلوبايت`);
  const messages = {
    invalid: t('Fill in the highlighted fields to register.', 'يرجى تعبئة الحقول المظلّلة للتسجيل.'),
    file: t(`Attach a PDF or Word file, up to ${fileSizeLabel}.`, `أرفق ملف PDF أو Word بحجم لا يتجاوز ${fileSizeLabel}.`),
    phone: t('Check your mobile number: choose the country code, then enter the number without the leading 0.', 'تحقّق من رقم الجوال: اختر رمز الدولة ثم أدخل الرقم دون الصفر الأول.'),
  };
  const showFallback = status === 'fallback';
  const statusClass = showFallback ? 'warn' : status ? 'err' : '';

  return (
    <>
<section id="network">
  <div className="wrap">
    <Translated as="div" className="kicker" ar="شبكة AMElleventh">The AMElleventh network</Translated>
    <Translated as="h2" ar="انضم إلى شبكتنا">Join our network</Translated>
    <Translated as="p" className="lead" ar="نبني فرقًا وشراكات لعملاء الإمارات والخليج، ونعمل مع من يشاركنا معيار «الحادي عشر». سجّل اهتمامك، وسنتواصل معك حين يناسب ملفّك أحد برامجنا أو عملائنا.">We build teams and partnerships for UAE and GCC clients, and we work with people who share the eleventh standard. Register your interest and we'll contact you when your profile fits one of our programmes or clients.</Translated>
    <div className="net">
      <div className="net-card"><div className="tile"><svg className="i"><use href="#i-user"></use></svg></div><Translated as="h3" ar="محترف مستقل">Individual professional</Translated><Translated as="p" ar="تبحث عن فرصة في المبيعات أو التحصيل أو خدمة العملاء أو الخدمات المساندة؟ أرسل بياناتك وسيرتك الذاتية.">Looking for opportunities in sales, collections, customer service or back office? Send your details and CV.</Translated><Translated as="button" type="button" className="btn btn-outline btn-sm" data-apply="Individual professional" disabled={!ready} onClick={() => openApplication("Individual professional")} ar="سجّل كمحترف">Join as a professional</Translated></div>
      <div className="net-card"><div className="tile"><svg className="i"><use href="#i-refer"></use></svg></div><Translated as="h3" ar="وكيل إحالة">Referral agent</Translated><Translated as="p" ar="تعرف شركات تحتاج إلى فرق عمل؟ أحِلها إلينا واكسب عمولة وفق شروط مكتوبة.">Know businesses that need a team? Refer them to us and earn a commission on written terms.</Translated><Translated as="button" type="button" className="btn btn-outline btn-sm" data-apply="Referral agent" disabled={!ready} onClick={() => openApplication("Referral agent")} ar="انضم كوكيل إحالة">Join as a referrer</Translated></div>
      <div className="net-card"><div className="tile"><svg className="i"><use href="#i-headset"></use></svg></div><Translated as="h3" ar="شركة BPO">BPO company</Translated><Translated as="p" ar="شركة تنفيذ في الفلبين أو الهند أو دولة عربية وتريد عملاء في الإمارات والخليج دون التأسيس هناك.">A delivery company in the Philippines, India or an Arab country that wants UAE and GCC clients without setting up there.</Translated><Translated as="button" type="button" className="btn btn-outline btn-sm" data-apply="BPO company" disabled={!ready} onClick={() => openApplication("BPO company")} ar="انضم كشريك BPO">Join as a BPO partner</Translated></div>
      <div className="net-card"><div className="tile"><svg className="i"><use href="#i-code"></use></svg></div><Translated as="h3" ar="شركة تقنية معلومات">IT company</Translated><Translated as="p" ar="شركة برمجيات أو خدمات تقنية مُدارة تريد تنفيذ مشاريع عملائنا أو الإحالة المتبادلة.">A software or managed-IT firm that wants to deliver our clients' projects or exchange referrals.</Translated><Translated as="button" type="button" className="btn btn-outline btn-sm" data-apply="IT company" disabled={!ready} onClick={() => openApplication("IT company")} ar="انضم كشريك تقني">Join as an IT partner</Translated></div>
      <div className="net-card"><div className="tile"><svg className="i"><use href="#i-calc"></use></svg></div><Translated as="h3" ar="شركة محاسبة وضرائب">Accounting &amp; tax firm</Translated><Translated as="p" ar="مكتب محاسبة أو ضرائب يخدم عملاءنا في الامتثال والتقارير والبحث والتطوير.">An accounting or tax practice serving our clients on compliance, reporting and R&amp;D.</Translated><Translated as="button" type="button" className="btn btn-outline btn-sm" data-apply="Accounting &amp; tax firm" disabled={!ready} onClick={() => openApplication("Accounting & tax firm")} ar="انضم كشريك محاسبي">Join as a finance partner</Translated></div>
    </div>
    <div className="note-bar net-note"><svg className="i"><use href="#i-people"></use></svg><Translated as="p" ar="يراجع فريقنا كل تسجيل. يمكن للأفراد التواصل مع الموارد البشرية على hr@amelleventh.com، وللشركات ووكلاء الإحالة التواصل مع فريق الشراكات على engage@amelleventh.com. لا نفرض أي رسوم على المسجّلين.">Our team reviews every registration. Individuals can contact HR at hr@amelleventh.com; companies and referral agents can contact our partnerships team at engage@amelleventh.com. We never charge anyone to join.</Translated></div>
  </div>
</section>
<dialog ref={dialogRef} onClick={(event) => { if (event.target === event.currentTarget) event.currentTarget.close(); }} id="d-apply" aria-labelledby="h7d"><div className="dlg">
  <Translated as="button" className="dlg-x" onClick={() => dialogRef.current.close()} aria-label="Close" ariaAr="إغلاق">×</Translated>
  <Translated as="h3" id="h7d" ar="انضم إلى شبكة AMElleventh">Join the AMElleventh network</Translated>
  <Translated as="p" ar="سجّل اهتمامك. سنتواصل معك حين يناسب ملفّك أحد برامجنا.">Register your interest. We will contact you when your profile fits one of our programmes.</Translated>
  <form className="enq-form" id="candForm" method="post" encType="multipart/form-data" action={'https://formsubmit.co/' + (individual ? 'hr@amelleventh.com' : 'engage@amelleventh.com')} noValidate ref={formRef} onSubmit={submit} onChange={edit}>
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
        <span id="netFileLbl">{individual ? t(`CV (PDF or Word, up to ${fileSizeLabel})`, `السيرة الذاتية (PDF أو Word، حتى ${fileSizeLabel})`) : <>{t('Company profile or brochure', 'ملف الشركة أو التعريف بها')} <span className="opt">{t(`(optional, PDF or Word, up to ${fileSizeLabel})`, `(اختياري، PDF أو Word، حتى ${fileSizeLabel})`)}</span></>}</span>
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
          {t('We could not start your registration submission. Try again or email your registration to', 'تعذّر بدء إرسال تسجيلك. حاول مجددًا أو أرسل تسجيلك بالبريد إلى')} <a href={fallback.href}>{fallback.destination}</a>.
          {fallback.filename && <> {t('Attach your selected file before sending', 'أرفق الملف المختار قبل الإرسال')}: <bdi>{fallback.filename}</bdi>.</>}
        </> : messages[status]}
      </p>
    </form>

</div></dialog>
    </>
  );
}
