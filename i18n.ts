import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      de: {
        common: require('./public/locales/de/common.json')
      },
      //en: {
      //  common: require('./public/locales/en/common.json')
      //}
    },
    //lng: 'de', // Standardsprache
   // fallbackLng: 'de',
   // interpolation: {
   //   escapeValue: false
   // }
  });

export default i18n; 