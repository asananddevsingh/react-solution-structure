import React from "react";
import { useTranslation } from 'react-i18next';
import "./languages.css";

const Languages = () => {

    // const [language, setLanguage] = useState("en-US");

    const { i18n } = useTranslation();
    const setAppLanguage = (language) => {
        i18n.changeLanguage(language);
    }

    const isActiveLanguage = (language) => {
        if (!i18n.language && language === "en-US") {
            return "Active";
        }

        return language === i18n.language && "Active";
    }

    return <div>
        <div className="LanguageContainer">
            <span>Language:</span>
            <span className={`Language ${isActiveLanguage("en-US")}`} onClick={setAppLanguage.bind(null, "en-US")} >English</span>
            <span className={`Language ${isActiveLanguage("de-DE")}`} onClick={setAppLanguage.bind(null, "de-DE")} >German</span>
            <span className={`Language ${isActiveLanguage("ab-CD")}`} onClick={setAppLanguage.bind(null, "ab-CD")} >Un-Supported(fallback to en-US)</span>
        </div>
    </div>
}

export default Languages;