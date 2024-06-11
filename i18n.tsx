import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import uzJson from "./src/i18/uz/translation.json";
import ruJson from "./src/i18/ru/translation.json";

i18n.use(initReactI18next).init({
  lng: localStorage.getItem("wottexLanguage") || "ru",
  fallbackLng: "ru",
  resources: {
    uz: {
      translation: uzJson,
    },
    ru: {
      translation: ruJson,
    },
  },
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
