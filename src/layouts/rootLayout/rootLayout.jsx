import React from "react";
import { Link } from "react-router-dom";
import "./rootLayout.css"
import { Languages } from "../../components";
import { withTranslation } from 'react-i18next';

const rootLayout = (props) => {
    const { t, children } = props;

    return (
        <div className="RootLayout">
            <h1>{t("common:WELCOME")}</h1>
            <Languages />
            <Link to="/counter" className="Link">
                {t("common:COUNTER")}
            </Link>
            <Link to="/calculator" className="Link">
                {t("common:CALCULATOR")}
            </Link>
            <Link to="/buggy-button" className="Link">
                {t("common:ERROR_BOUNDARY")}
            </Link>
            <Link to="/404" className="Link">
                {t("common:NO_PAGE")}
            </Link>
            <Link to="/component-life-cycle" className="Link">
                {t("common:COMPONENT_LIFE_CYCLE")}
            </Link>
            {children}
        </div>
    )
}

export default withTranslation()(rootLayout);