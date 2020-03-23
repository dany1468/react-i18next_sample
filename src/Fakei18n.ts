import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
    resources: {},
    ns: ['app'],
    lng: 'ja',
    react: {
        useSuspense: false
    },
    debug: false // 調査したい時は true
});

export default i18n;
