'use client';

import { useLanguage } from './Language';

const countries = [
  ['UAE', 'الإمارات', '+971'],
  ['Saudi Arabia', 'السعودية', '+966'],
  ['Qatar', 'قطر', '+974'],
  ['Kuwait', 'الكويت', '+965'],
  ['Bahrain', 'البحرين', '+973'],
  ['Oman', 'عُمان', '+968'],
  ['Philippines', 'الفلبين', '+63'],
  ['India', 'الهند', '+91'],
  ['Pakistan', 'باكستان', '+92'],
  ['Egypt', 'مصر', '+20'],
  ['Jordan', 'الأردن', '+962'],
  ['Lebanon', 'لبنان', '+961'],
  ['Iraq', 'العراق', '+964'],
  ['Bangladesh', 'بنغلاديش', '+880'],
  ['Sri Lanka', 'سريلانكا', '+94'],
  ['Nepal', 'نيبال', '+977'],
  ['UK', 'المملكة المتحدة', '+44'],
  ['USA / Canada', 'أمريكا / كندا', '+1'],
  ['Australia', 'أستراليا', '+61'],
  ['Singapore', 'سنغافورة', '+65'],
  ['Malaysia', 'ماليزيا', '+60'],
  ['Kenya', 'كينيا', '+254'],
  ['Nigeria', 'نيجيريا', '+234'],
  ['Germany', 'ألمانيا', '+49'],
  ['France', 'فرنسا', '+33'],
];

export function countryCode(country) {
  return countries.find(([name]) => name === country)?.[2];
}

export function fullPhone(code, number) {
  const raw = number.trim();
  const digits = raw.replace(/\D/g, '');
  if (!digits) return '';
  if (raw.startsWith('+')) return '+' + digits;
  if (raw.startsWith('00')) return '+' + digits.slice(2);
  return code + digits.replace(/^0+/, '');
}

export function phoneOk(code, number, required = false) {
  if (!number.trim()) return !required;
  return /^\+\d{8,15}$/.test(fullPhone(code, number));
}

export default function PhoneField({ codeId, numberId, required = false, onCodeChange }) {
  const { t } = useLanguage();
  return (
    <div className="phone">
      <select data-cc="" name="wa_code" id={codeId} defaultValue="+971" dir="ltr"
        aria-label={t('Country code', 'رمز الدولة')} onChange={onCodeChange}>
        {countries.map(([english, arabic, code]) => (
          <option key={code} value={code}>{t(english, arabic)} ({code})</option>
        ))}
      </select>
      <input type="tel" name="wa_number" id={numberId} inputMode="tel" autoComplete="tel-national"
        required={required} placeholder="50 123 4567" aria-label={t('Mobile number', 'رقم الجوال')} dir="ltr" />
    </div>
  );
}
