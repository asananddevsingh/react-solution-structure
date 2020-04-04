import React from "react";
import { commonConstants } from "../../constants";
import LoaderIcon from "../../assets/icons/loader.gif";
import { withTranslation } from 'react-i18next';

const counter = (props) => {
    const { t } = props;

    return (
        <div>
            <h1>{props.currentCount}</h1>
            <div>
                <button onClick={props.onCounterIncrement}>
                    {t("counter:INCREMENT")}
                </button>
                <button onClick={props.onCounterDecrement}>
                    {t("counter:DECREMENT")}
                </button>
                <button onClick={props.onAsyncAdditionWithLoaderSuccess}>
                    {t("counter:ASYNC_ADDITION_5_WITH_LOADER")} {props.requesting && <img src={LoaderIcon} alt={commonConstants.LOADING} />}
                </button>
            </div>
            <div>
                <button onClick={props.onAsyncAddition}>
                    {t("counter:ASYNC_ADDITION_5_TAKE_EVERY")}
                </button>
                <button onClick={props.onAsyncSubstraction} >
                    {t("counter:ASYNC_SUBSTRACTION_5_TAKE_LATEST")}
                </button>
            </div>
        </div>

    )
}

export default withTranslation()(counter);
