import { all } from "redux-saga/effects";
import {
    onAsyncAdditionSaga,
    onAsyncSubstractionSaga,
    onAsyncAdditionWithLoaderSuccess,
} from "./counterSagas";

function* rootSaga() {
    yield all([
        onAsyncAdditionSaga(),
        onAsyncSubstractionSaga(),
        onAsyncAdditionWithLoaderSuccess(),
    ]);
}

export default rootSaga;