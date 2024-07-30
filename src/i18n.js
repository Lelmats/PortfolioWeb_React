import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'
import XHR from "i18next-http-backend" 

import commonEn from '/src/assets/i18next/About/en.json'
import commonEs from '/src/assets/i18next/About/es.json'

const resources = {
  en: { common: commonEn },
  es: { common: commonEs },
}

const options = {
  order: ['querystring', 'navigator'],
  lookupQuerystring: 'lng'
}

i18n
  .use(XHR) 
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    // lng: 'en' // <--- turn off for detection to work
    detection: options,
    resources,
    ns: ['common'],
    defaultNS: 'common',
    fallbackLng: 'en',
    supportedLangs: ['en', 'es'],
    interpolation: {
      escapeValue: false,
    },
    debug: false,
  })

