import { counterActionTypes } from "../actionTypes";

const onCounterIncrement = () => {
    return {
        type: counterActionTypes.ON_INCREMENT
    }
}

const onCounterDecrement = () => {
    return {
        type: counterActionTypes.ON_DECREMENT
    }
}

const onAsyncAdditionWithLoaderSuccess = () => {
    return {
        type: counterActionTypes.ON_ASYNC_ADDITION_WITH_LOADER_SUCCESS_REQUEST,
    }
}

const onAsyncAddition = () => {
    return {
        type: counterActionTypes.ON_ASYNC_ADDITION_REQUEST
    }
}

const onAsyncSubstraction = () => {
    return {
        type: counterActionTypes.ON_ASYNC_SUBSTRACTION_REQUEST
    }
}

export default {
    onCounterIncrement,
    onCounterDecrement,
    onAsyncAdditionWithLoaderSuccess,
    onAsyncAddition,
    onAsyncSubstraction,
}