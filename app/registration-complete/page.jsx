'use client';

import { LanguageToggle, useLanguage } from '../../components/Language';

export default function RegistrationComplete() {
  const { language, t } = useLanguage();

  return (
    <main style={{ minHeight: '100svh', display: 'grid', placeItems: 'center', padding: '2rem 1rem', background: 'var(--soft)' }}>
      <title>{t('Registration submitted | AMElleventh', 'تم إرسال التسجيل | AMElleventh')}</title>
      <section className="enq-form" aria-labelledby="registration-heading" style={{ width: '100%', maxWidth: 580 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
          <p className="kicker" style={{ margin: 0 }}>AMElleventh</p>
          <LanguageToggle />
        </div>
        <h1 id="registration-heading" style={{ fontSize: '2rem', lineHeight: 1.2 }}>{t('Thank you for registering', 'شكرًا لتسجيلك')}</h1>
        <p style={{ marginTop: '1rem' }}>{t('Your registration has been submitted. Our team will review your details and contact you when your profile fits one of our programmes.', 'تم إرسال تسجيلك. سيراجع فريقنا بياناتك وسيتواصل معك عندما يناسب ملفّك أحد برامجنا.')}</p>
        <a className="btn btn-primary" href={`/?lang=${language}#network`} style={{ marginTop: '1.5rem' }}>{t('Back to the website', 'العودة إلى الموقع')}</a>
      </section>
    </main>
  );
}
