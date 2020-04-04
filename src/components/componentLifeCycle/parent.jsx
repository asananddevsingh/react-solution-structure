import React from 'react'
import Child from "./child";

class Parent extends React.Component {
    constructor(props) {
        super(props);
        console.log("%c[Parent] => CONSTRUCTOR", "color:green; font-weight:bold;");
    }

    state = {
        value: 0
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        console.log("%c[Parent] => GET_DERIVED_STATE_FROM_PROPS", "color:green; font-weight:bold;");
        return null;
    }

    getSnapshotBeforeUpdate() {
        console.log("%c[Parent] => GET_SNAPSHOT_BEFORE_UPDATE", "color:green; font-weight:bold;");
        return null;
    }

    componentDidMount() {
        console.log("%c[Parent] => COMPONENT_DID_MOUNT", "color:green; font-weight:bold;");
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log("%c[Parent] => SHOULD_COMPONENT_UPDATE", "color:green; font-weight:bold;");
        return true;
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("%c[Parent] => COMPONENT_DID_UPDATE", "color:green; font-weight:bold;");
    }

    componentWillUnmount() {
        console.log("%c[Parent] => COMPONENT_WILL_UNMOUNT", "color:green; font-weight:bold;");
    }

    updateState = () => {
        this.setState(prevState => ({ value: prevState.value + 1 }));
    }

    render() {
        console.log("%c[Parent] => RENDER", "color:green; font-weight:bold;");
        return (
            <div style={{ border: "2px solid green", margin: "10px", padding: "10px" }}>
                <h1>Open console to see the results</h1>
                <h4>I'm Parent</h4>
                <div>Value from Parent State => {this.state.value}</div>
                <button onClick={this.updateState} >Update Parent State</button>
                <Child parentStateValue={this.state.value} />
            </div>
        )
    }
}

export default Parent