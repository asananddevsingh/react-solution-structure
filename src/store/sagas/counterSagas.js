import { put, takeEvery, takeLatest, delay } from 'redux-saga/effects';
import { counterActionTypes, commonActionTypes } from "../actionTypes";

/**
 * Actions those are not having async interaction should be directly handled by "Reducer".
 */

// SAGA - 1.
export function* onAsyncAdditionWithLoaderSuccess() {
  yield takeEvery(counterActionTypes.ON_ASYNC_ADDITION_WITH_LOADER_SUCCESS_REQUEST, asyncAdditionWithLoaderSaga);
}

function* asyncAdditionWithLoaderSaga() {
  yield put({ type: commonActionTypes.ON_ASYNC_REQUEST });
  yield delay(1000);
  yield put({ type: counterActionTypes.ON_ASYNC_ADDITION_WITH_LOADER_SUCCESS_RESPONSE, payload: 5 });
  yield put({ type: commonActionTypes.ON_ASYNC_RESPONSE_SUCCESS });
}

// SAGA - 2.
export function* onAsyncAdditionSaga() {
  yield takeEvery(counterActionTypes.ON_ASYNC_ADDITION_REQUEST, asyncAdditionSaga);
}

function* asyncAdditionSaga() {
  yield delay(1000);
  yield put({ type: counterActionTypes.ON_ASYNC_ADDITION_RESPONSE, payload: 5 });
  yield put({ type: commonActionTypes.ON_ASYNC_RESPONSE_SUCCESS });
}

// SAGA - 3.
export function* onAsyncSubstractionSaga() {
  yield takeLatest(counterActionTypes.ON_ASYNC_SUBSTRACTION_REQUEST, asyncSubstractionSaga);
}

function* asyncSubstractionSaga() {
  yield delay(1000);
  yield put({ type: counterActionTypes.ON_ASYNC_SUBSTRACTION_RESPONSE, payload: 5 });
}

