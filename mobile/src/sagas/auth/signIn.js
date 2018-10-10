import { put, call, takeLatest } from 'redux-saga/effects'
import { signIn } from '../../api/auth/signIn'
import { SIGN_IN_START, SIGN_IN_STARTED, SIGN_IN_SUCCESS, SIGN_IN_FAILED } from "../../ducks/auth/signIn";

function* signInGenerator(action) {
  try {
    yield put({type: SIGN_IN_STARTED });
    const responce = yield call(() => { signIn(action.payload.email, action.payload.password) });
    yield put({type: SIGN_IN_SUCCESS, payload: responce});
  } catch (e) {
    yield put({type: SIGN_IN_FAILED, payload: e})
  }
}

export default function* () {
  yield takeLatest(SIGN_IN_START, signInGenerator)
}