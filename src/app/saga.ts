import { call, takeEvery, put } from "redux-saga/effects";
import { changeModalState } from "./store";
import { sagaActions } from "./sagaActions";


export function* loginUserSaga() {
    yield put({ type: "TODO_FETCH_FAILED" });
}

export function* sendEmailSaga() {
    yield put(changeModalState('emailSentModal'))
}

export default function* rootSaga() {
    yield takeEvery(sagaActions.LOGIN_USER_SAGA, loginUserSaga);
    yield takeEvery(sagaActions.SEND_EMAIL_SAGA, sendEmailSaga);
}