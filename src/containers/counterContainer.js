import { connect } from "react-redux";
import { Counter } from "../components";
import { counterActions } from "../store/actions";

const mapStateToProps = (state) => {
    return {
        currentCount: state && state.counter && state.counter.currentCount,
        requesting: state && state.common && state.common.requesting,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onCounterIncrement: () => dispatch(counterActions.onCounterIncrement()),
        onCounterDecrement: () => dispatch(counterActions.onCounterDecrement()),
        onAsyncAdditionWithLoaderSuccess: () => dispatch(counterActions.onAsyncAdditionWithLoaderSuccess()),
        onAsyncAddition: () => dispatch(counterActions.onAsyncAddition()),
        onAsyncSubstraction: () => dispatch(counterActions.onAsyncSubstraction()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);