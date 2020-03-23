import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import XHR from 'i18next-xhr-backend';

i18n.use(initReactI18next)
    .use(XHR)
    .init({
        lng: 'ja',
        defaultNS: 'app',
        keySeparator: '.',
        backend: {
            loadPath: '/locales/{{lng}}/{{ns}}.json'
        }
    });

export default i18n;
