import { put, takeEvery, all } from "redux-saga/effects";

const setTimeoutPromise = (ms) => new Promise((res) => setTimeout(res, ms));
const delay = 1500;

export function* incrementAsync({ payload }) {
  yield setTimeoutPromise(delay);
  yield put({ type: "INCREMENT", payload });
}

export function* decrementAsync({ payload }) {
  yield setTimeoutPromise(delay);
  yield put({ type: "DECREMENT", payload });
}

export function* watchIncrementAsync() {
  yield takeEvery("INCREMENT_ASYNC", incrementAsync);
}

export function* watchDecrementAsync() {
  yield takeEvery("DECREMENT_ASYNC", decrementAsync);
}

export default function* rootSaga() {
  yield all([watchIncrementAsync(), watchDecrementAsync()]);
}
