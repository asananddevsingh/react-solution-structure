import React from "react";

class GrandChild extends React.PureComponent {
    constructor(props) {
        super(props);
        console.log("%c[GrandChild] => CONSTRUCTOR", "color:brown; font-weight:bold;");
    }

    state = {
        value: 0
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        console.log("%c[GrandChild] => GET_DERIVED_STATE_FROM_PROPS", "color:brown; font-weight:bold;");
        return null;
    }

    getSnapshotBeforeUpdate() {
        console.log("%c[GrandChild] => GET_SNAPSHOT_BEFORE_UPDATE", "color:brown; font-weight:bold;");
        return null;
    }

    componentDidMount() {
        console.log("%c[GrandChild] => COMPONENT_DID_MOUNT", "color:brown; font-weight:bold;");
    }

    // shouldComponentUpdate(nextProps, nextState) {
    //     console.log("%c[GrandChild] => SHOULD_COMPONENT_UPDATE", "color:brown; font-weight:bold;");
    //     return true;
    // }

    componentDidUpdate(prevProps, prevState) {
        console.log("%c[GrandChild] => COMPONENT_DID_UPDATE", "color:brown; font-weight:bold;");
    }

    componentWillUnmount() {
        console.log("%c[GrandChild] => COMPONENT_WILL_UNMOUNT", "color:brown; font-weight:bold;");
    }

    updateState = () => {
        this.setState({ value: this.state.value + 1 });
    }

    render() {
        console.log("%c[GrandChild] => RENDER", "color:brown; font-weight:bold;");
        return (
            <div style={{ border: "2px solid brown", padding: "10px", margin: "10px" }}>
                <h4>I'm Grand Child</h4>
                <div>Fixed value from parent => {this.props.parentStateValue}</div>
                <div>Value from Self State => {this.state.value}</div>
                <button onClick={this.updateState} >Update Self State</button>
            </div>
        )
    }
}

export default GrandChild