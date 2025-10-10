import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Common translations (nav, etc.)
import enCommon from './locales/en/common.json';
import fiCommon from './locales/fi/common.json';

// Page-specific translations
import enHome from './locales/en/pages/home.json';
import fiHome from './locales/fi/pages/home.json';

import enAbout from './locales/en/pages/about.json';
import fiAbout from './locales/fi/pages/about.json';

import enIntroduction from './locales/en/pages/introduction.json';
import fiIntroduction from './locales/fi/pages/introduction.json';

import enSummary from './locales/en/pages/summary.json';
import fiSummary from './locales/fi/pages/summary.json';

import enNextSteps from './locales/en/pages/nextSteps.json';
import fiNextSteps from './locales/fi/pages/nextSteps.json';

import enInsights from './locales/en/pages/insights.json';
import fiInsights from './locales/fi/pages/insights.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          ...enCommon,
          ...enHome,
          ...enAbout,
          ...enIntroduction,
          ...enSummary,
          ...enNextSteps,
          ...enInsights
        }
      },
      fi: {
        translation: {
          ...fiCommon,
          ...fiHome,
          ...fiAbout,
          ...fiIntroduction,
          ...fiSummary,
          ...fiNextSteps,
          ...fiInsights
        }
      }
    },
    fallbackLng: 'en',
    debug: false,
    interpolation: {
      escapeValue: false // React already escapes values
    }
  });

export default i18n;
