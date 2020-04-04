import React from "react";
import { withTranslation } from "react-i18next";

const calculator = (props) => {
    return (
        <div>
            <h4>{props.t("common:COMING_SOON_TRANSLATION_KEY_MISSING")}</h4>
        </div>

    )
}

export default withTranslation()(calculator);
