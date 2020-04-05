import React from "react";
import { withTranslation } from 'react-i18next';

const noPageFound = (props) => {
    return <div>
        <h1>{props.t("common:NO_PAGE_FOUND")}</h1>
    </div>
}

export default withTranslation()(noPageFound);