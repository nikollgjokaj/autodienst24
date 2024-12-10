import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import commonDE from './public/locales/de/common.json';
import commonEN from './public/locales/en/common.json';
import commonTR from './public/locales/tr/common.json';
import commonSQ from './public/locales/sq/common.json';
import commonSR from './public/locales/sr/common.json';
import commonHR from './public/locales/hr/common.json';
import commonBS from './public/locales/bs/common.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      de: { common: commonDE },
      en: { common: commonEN },
      tr: { common: commonTR },
      sq: { common: commonSQ },
      sr: { common: commonSR },
      hr: { common: commonHR },
      bs: { common: commonBS }
    },
    lng: 'de', // Standardsprache
    fallbackLng: 'de',
    interpolation: {
      escapeValue: false
    },
    supportedLngs: ['de', 'en', 'tr', 'sq', 'sr', 'hr', 'bs']
  });

export default i18n; 