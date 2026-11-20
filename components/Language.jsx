'use client';

import { createContext, useContext, useEffect, useState } from 'react';

const LanguageContext = createContext(null);
const metadata = {
  en: {
    title: 'AMElleventh | Philippine teams, governed from Dubai',
    description: 'Customer operations and back-office teams for UAE and GCC businesses, delivered in the Philippines and governed from Dubai. Pilots from 30 seats.',
  },
  ar: {
    title: 'AMElleventh | فرق عمل في الفلبين، بإدارة من دبي',
    description: 'فرق عمليات خدمة العملاء والخدمات المساندة لشركات الإمارات والخليج، تُنفَّذ في الفلبين وتُدار من دبي. تبدأ المشاريع التجريبية من 30 مقعدًا.',
  },
};

export function LanguageProvider({ children }) {
  const [language, updateLanguage] = useState('en');

  useEffect(() => {
    const requested = new URLSearchParams(window.location.search).get('lang');
    if (requested === 'ar' || requested === 'en') {
      updateLanguage(requested);
      return;
    }
    try {
      const saved = localStorage.getItem('am-lang');
      if (saved === 'ar' || saved === 'en') updateLanguage(saved);
    } catch {
      // The switch still works when browser storage is unavailable.
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
  }, [language]);

  function setLanguage(next) {
    if (next !== 'en' && next !== 'ar') return;
    updateLanguage(next);
    try {
      localStorage.setItem('am-lang', next);
    } catch {
      // Saving the preference is optional.
    }
  }

  const t = (english, arabic) => language === 'ar' ? arabic : english;

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}

export function LanguageMetadata() {
  const { language } = useLanguage();
  return (
    <>
      <title>{metadata[language].title}</title>
      <meta name="description" content={metadata[language].description} />
    </>
  );
}

// Each translation renders the same element, so forms and native controls retain state.
export function Translated({ as: Tag = 'span', ar, ariaAr, children, ...props }) {
  const { language } = useLanguage();
  const arabic = language === 'ar';
  return (
    <Tag {...props} aria-label={arabic && ariaAr ? ariaAr : props['aria-label']}>
      {arabic && ar !== undefined ? ar : children}
    </Tag>
  );
}

export function LanguageToggle() {
  const { language, setLanguage, t } = useLanguage();
  return (
    <button className="lang-btn" id="langBtn" type="button"
      lang={language === 'ar' ? 'en' : 'ar'}
      aria-label={t('التبديل إلى العربية', 'Switch to English')}
      onClick={() => setLanguage(language === 'ar' ? 'en' : 'ar')}>
      {t('العربية', 'English')}
    </button>
  );
}
