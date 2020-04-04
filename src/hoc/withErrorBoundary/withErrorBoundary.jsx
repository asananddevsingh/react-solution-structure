import React from "react";

class WithErrorBoundary extends React.Component {
    state = {
        errorCatched: false,
        error: null,
        errorInfo: null,
    };

    // Use static getDerivedStateFromError() to render a fallback UI after an error has been thrown.
    static getDerivedStateFromError = error => {
        // console.log("errorCatched", error);
        return { errorCatched: true };
    };

    // Use componentDidCatch() to log error information.
    componentDidCatch(error, errorInfo) {
        // console.log("Error: ", error);
        // console.log("Error Info: ", errorInfo);
    }

    render() {
        if (this.state.errorCatched) {
            return (
                <div>
                    <h2>Error Loading Module</h2>
                </div>
            );
        }
        return this.props.children;
    }
}

export default WithErrorBoundary;
