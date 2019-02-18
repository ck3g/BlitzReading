import i18n from 'i18n-js';

import en from './locales/en.json';
import de from './locales/de.json';

i18n.defaultLocale = 'en';
i18n.locale = 'en';
i18n.fallbacks = true;
i18n.translations = { en, de };

export default i18n;
