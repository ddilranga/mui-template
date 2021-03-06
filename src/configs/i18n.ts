import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: !import.meta.env.PROD,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
    resources: {},
  });

export default i18n;
