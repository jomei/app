import {put, call, takeLatest} from 'redux-saga/effects'

import {Api} from "mobile/src/api";

import {HOME_LOADING_START, HOME_LOADING_STARTED, HOME_LOADING_FAILED, HOME_LOADING_SUCCESS} from "./ducks";

function* generator() {
  try {
    yield put({type: HOME_LOADING_STARTED});

    const response =  yield call(() => { return Api.home() });

    yield put({type: HOME_LOADING_SUCCESS, payload: response.data})
  } catch (e) {
    yield put({type: HOME_LOADING_FAILED, payload: e})
  }

}

export default function* () {
 yield takeLatest(HOME_LOADING_START, generator)
}