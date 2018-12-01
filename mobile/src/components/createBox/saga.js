import {put, call, takeLatest} from 'redux-saga/effects'

import {Api} from "mobile/src/api";

import {BOX_CREATE_START, BOX_CREATE_STARTED, BOX_CREATE_SUCCESS, BOX_CREATE_FAILED} from "./ducks";


function* generator() {
  try {
    yield put({type: BOX_CREATE_STARTED});

    const response =  yield call(() => { return Api.home() });

    yield put({type: BOX_CREATE_SUCCESS, payload: response.data})
  } catch (e) {
    yield put({type: BOX_CREATE_FAILED, payload: e})
  }

}

export default function* () {
  yield takeLatest(BOX_CREATE_START, generator)
}