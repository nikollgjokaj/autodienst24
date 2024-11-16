'use client';
import { I18nextProvider } from 'react-i18next';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import commonDE from '@/public/locales/de/common.json';
import commonEN from '@/public/locales/en/common.json';
import commonSQ from '@/public/locales/sq/common.json';
import commonTR from '@/public/locales/tr/common.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      de: { common: commonDE },
      en: { common: commonEN },
      sq: { common: commonSQ },
      tr: { common: commonTR }
    },
    lng: 'de',
    fallbackLng: 'de',
    interpolation: {
      escapeValue: false
    },
    supportedLngs: ['de', 'en', 'sq', 'tr']
  });

export function TranslationProvider({ children }: { children: React.ReactNode }) {
  return (
    <I18nextProvider i18n={i18n}>
      {children}
    </I18nextProvider>
  );
} 