import i18n from 'i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: false,
    fallbackLng: 'en',
    supportedLngs: ['en', 'pl', 'ua'],
    backend: {
      loadPath: 'locales/{{lng}}/translation.json',
    },
    detection: {
      order: ['localStorage', 'navigator', 'querystring', 'htmlTag'],
      htmlTag: document.documentElement,
      lookupQuerystring: 'lang',
      lookupLocalStorage: 'i18nextLng',
      caches: ['localStorage'],
      convertDetectedLanguage: (lng: string) => lng.replace('-', '_'),
    },
  });

export default i18n;
