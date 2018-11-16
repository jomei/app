import { put, call, takeLatest } from 'redux-saga/effects'

import { Api } from 'mobile/src/api'

import { SIGN_UP_START, SIGN_UP_STARTED, SIGN_UP_SUCCESS, SIGN_UP_FAILED } from "./ducks";

function* generator(action) {
  try {
    yield put({type: SIGN_UP_STARTED });
    const response = yield call(() => {
      return Api.signUp(action.payload.email, action.payload.password, action.payload.passwordConfirmation)
    });

    yield put({type: SIGN_UP_SUCCESS, payload: response});
  } catch (e) {
    yield put({type: SIGN_UP_FAILED, payload: e})
  }
}

export default function* () {
  yield takeLatest(SIGN_UP_START, generator)
}