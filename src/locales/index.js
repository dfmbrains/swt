import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import {initReactI18next} from 'react-i18next';
import {i18DetectionConfigs} from "../helpers/configs";
import {defaultAppLanguage} from "../helpers/constants";
import translationRu from './translationRu.json';
import translationEn from './translationEn.json';

const resources = {
   "en": {
      translation: translationEn
   },
   "ru": {
      translation: translationRu
   }
};

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
       supportedLngs: ["en", "ru"],
       fallbackLng: defaultAppLanguage,
       detection: i18DetectionConfigs,
       resources
    });

export default i18n