import {put, call, takeLatest} from 'redux-saga/effects'
import {Actions} from "react-native-router-flux";

import {Api} from 'mobile/src/api'

import {SIGN_IN_START, SIGN_IN_STARTED, SIGN_IN_SUCCESS, SIGN_IN_FAILED} from "./ducks";

function* generator(action) {
  try {
    yield put({type: SIGN_IN_STARTED});

    const response = yield call(() => {
      return Api.signIn(action.payload.email, action.payload.password)
    });

    yield put({type: SIGN_IN_SUCCESS, payload: response.data});

    yield call(() => {
      Actions.home()
    })
  } catch (e) {
    yield put({type: SIGN_IN_FAILED, payload: e})
  }
}

export default function* () {
  yield takeLatest(SIGN_IN_START, generator)
}