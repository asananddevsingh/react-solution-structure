import React from "react";
import { Trans } from "react-i18next";
import LoaderIcon from "../../assets/icons/loader.gif";

const Loading = (props, pastDelay) => {
    if (props && props.error) {
        return (
            <div>
                <Trans>{"common:ERROR_LOADING_MODULE"}</Trans>: {props.error}
            </div>
        );
    } else if (pastDelay) {
        return (
            <div>
                <img src={LoaderIcon} alt="" /><Trans>{"common:LOADING"}</Trans>
            </div>
        );
    } else {
        return null;
    }
};

export default Loading;