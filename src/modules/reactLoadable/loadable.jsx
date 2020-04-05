import React from "react";
import ReactLoadable from "react-loadable";
import Loading from "./loading";
import LazyLoading from "./lazyLoading";

const Loadable = (loader) => {
    return ReactLoadable({
        loader,
        loading: Loading,
        render(loaded, props) {
            const module = loaded.default;
            return <LazyLoading
                {...props}
                moduleView={module.moduleView}
                moduleName={module.moduleName}
            />;
        },
    });
};

export default Loadable;