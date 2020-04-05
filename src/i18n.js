import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-xhr-backend";

i18n
    // load translation using xhr -> see /public/locales (i.e. https://github.com/i18next/react-i18next/tree/master/example/react/public/locales)
    // learn more: https://github.com/i18next/i18next-xhr-backend
    .use(Backend)
    // pass the i18n instance to react-i18next.
    .use(initReactI18next)
    // init i18next
    // for all options read: https://www.i18next.com/overview/configuration-options
    .init({
        // resources,
        backend: {
            // for all available options read the backend's repository readme file
            loadPath: "/locales/translation_{{lng}}.json",
        },
        fallbackLng: 'en-US',
        keySeparator: ":",
        debug: false,
        interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
        },
        react: {
            wait: true
        }
    });


export default i18n;