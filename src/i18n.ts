import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enTranslation from './locales/en.json';
import plTranslation from './locales/pl.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: enTranslation,
      },
      pl: {
        translation: plTranslation,
      },
    },

    detection: {
      order: ['localStorage', 'navigator'],
    },

    fallbackLng: 'en',

    interpolation: {
      escapeValue: false
    }
  });

  export default i18n;