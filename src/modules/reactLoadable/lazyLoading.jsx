import * as React from "react";
import { withTranslation } from "react-i18next";

class LazyLoading extends React.PureComponent {

    state = {
        hasError: false,
        error: null,
    };

    componentDidCatch(error) {
        this.setState({ hasError: true, error });
    }

    render() {
        const { moduleView, t } = this.props;
        const { hasError, error } = this.state;

        if (hasError) {
            console.error("CUSTOM ERROR: ", error);
            return <div>{t("common:ERROR_LOADING_MODULE")}</div>;
        }

        if (moduleView) {
            return React.createElement(moduleView, this.props);
        } else {
            return <div>{t("common:LOADING_MODULE")}</div>;
        }
    }
}

export default withTranslation()(LazyLoading);
