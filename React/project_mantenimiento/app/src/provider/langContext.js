import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enTranslation from "./../utils/lang/en.json";
import esTranslation from "./../utils/lang/es.json";

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: enTranslation },
    es: { translation: esTranslation },
  },
  lng: "es",
  fallbackLng: "es",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;