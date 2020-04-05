import React from "react";
import { withTranslation } from "react-i18next";

class BuggyButton extends React.Component {
    state = {
        releaseBugs: false
    };

    handleClick = () => {
        this.setState({
            releaseBugs: true
        });
    }

    render() {
        if (this.state.releaseBugs) {
            throw new Error("I crashed!, You will always see me on local. Close me  using (X) to see the error page.");
        }

        return (
            <div>
                <br />
                <button onClick={this.handleClick}>
                    {this.props.t("common:THROW_ERROR")}
                </button>
            </div>
        );
    }
}

export default withTranslation()(BuggyButton);