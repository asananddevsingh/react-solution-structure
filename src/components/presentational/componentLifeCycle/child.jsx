import React from "react"

class Child extends React.Component {
    constructor(props) {
        super(props);
        console.log("%c[Child] => CONSTRUCTOR", "color:blue; font-weight:bold;");
    }

    state = {
        value: 0
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        console.log("%c[Child] => GET_DERIVED_STATE_FROM_PROPS", "color:blue; font-weight:bold;");
        return null;
    }

    getSnapshotBeforeUpdate() {
        console.log("%c[Child] => GET_SNAPSHOT_BEFORE_UPDATE", "color:blue; font-weight:bold;");
        return null;
    }

    componentDidMount() {
        console.log("%c[Child] => COMPONENT_DID_MOUNT", "color:blue; font-weight:bold;");
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log("%c[Child] => SHOULD_COMPONENT_UPDATE", "color:blue; font-weight:bold;");
        return true;
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("%c[Child] => COMPONENT_DID_UPDATE", "color:blue; font-weight:bold;");
    }

    componentWillUnmount() {
        console.log("%c[Child] => COMPONENT_WILL_UNMOUNT", "color:blue; font-weight:bold;");
    }

    updateState = () => {
        this.setState({ value: this.state.value + 1 });
    }


    render() {
        console.log("%c[Child] => RENDER", "color:blue; font-weight:bold;");
        return (
            <div style={{ border: "2px solid blue", padding: "10px", margin: "10px" }}>
                <h4>I'm Child</h4>
                <div>Value from Parent State => {this.props.parentStateValue}</div>
                <div>Value from Child State => {this.state.value}</div>
                <button onClick={this.updateState} >Update Child State</button>
            </div>
        )
    }
}

export default Child