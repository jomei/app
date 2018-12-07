import {put, call, takeLatest} from 'redux-saga/effects'

import {Api} from "mobile/src/api";

import {BOX_LOADING_START, BOX_LOADING_STARTED, BOX_LOADING_FAILED, BOX_LOADING_SUCCESS} from "./ducks";

function* generator(action) {
  try {
    yield put({type: BOX_LOADING_STARTED});

    const responce = yield call(() => { return Api.loadBox(action.payload) });

    yield put({type: BOX_LOADING_SUCCESS, payload: responce.data})
  } catch (e) {
    yield put({type: BOX_LOADING_FAILED, payload: e})
  }
}

export default function* () {
  yield takeLatest(BOX_LOADING_START, generator)
}