import i18n from 'i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: 'pl',
    supportedLngs: ['en', 'pl', 'ua'],
    backend: {
      loadPath: '/Aj-Serwis/locales/{{lng}}/translation.json',
    },
  });

export default i18n;
