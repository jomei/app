import {all, fork, put, call, takeLatest} from 'redux-saga/effects'

import {Api} from "mobile/src/api";

import {
  BOX_LOADING_START, BOX_LOADING_STARTED, BOX_LOADING_SUCCESS, BOX_LOADING_FAILED,
  POSITION_CREATE_START, POSITION_CREATE_STARTED, POSITION_CREATE_SUCCESS, POSITION_CREATE_FAILED,
  POSITION_SELECT_START, POSITION_SELECT_STARTED, POSITION_SELECT_SUCCESS, POSITION_SELECT_FAILED
} from "./ducks";

function* boxGenerator(action) {
  try {
    yield put({type: BOX_LOADING_STARTED});

    const response = yield call(() => { return Api.loadBox(action.payload) });

    yield put({type: BOX_LOADING_SUCCESS, payload: response.data})
  } catch (e) {
    yield put({type: BOX_LOADING_FAILED, payload: e})
  }
}

function* createPositionGenerator(action) {
  try {
    yield put({type: POSITION_CREATE_STARTED});

    const response = yield call(() => {
      return Api.createPosition(action.payload)
    });

    yield put({type: POSITION_CREATE_SUCCESS, payload: response.data})

  } catch (e) {
    yield put({type: POSITION_CREATE_FAILED, payload: e})
  }
}

function* selectPositionGenerator(action) {
  try {
    yield put({type: POSITION_SELECT_STARTED});

    yield call(() => { Api.selectPosition(action.payload) });

    yield put({type: POSITION_SELECT_SUCCESS})
  } catch (e) {
    yield put({type: POSITION_SELECT_FAILED})
  }
}

export default function* () {
  yield takeLatest(BOX_LOADING_START, boxGenerator);
  yield takeLatest(POSITION_CREATE_START, createPositionGenerator);
  yield takeLatest(POSITION_SELECT_START, selectPositionGenerator);
}