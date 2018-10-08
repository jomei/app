import { put, takeEvery } from 'redux-saga/effects'

import { SIGN_IN_START, SIGN_IN_STARTED, SIGN_IN_SUCCESS, SIGN_IN_FAILED } from "../../ducks";

function* signIn() {
  try {
    yield put({type: SIGN_IN_STARTED });

    // call here
    yield put({type: SIGN_IN_SUCCESS});
  } catch (e) {
    yield put({type: SIGN_IN_FAILED, payload: e})
  }
}

export default function* () {
  yield takeEvery(SIGN_IN_START, signIn)
}