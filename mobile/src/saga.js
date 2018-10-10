import { all } from 'redux-saga/effects';
import signIn  from './components/auth/signIn/saga';
//https://github.com/redux-saga/redux-saga/blob/master/docs/advanced/RootSaga.md for more about root saga
export default function* root() {
  yield all([
    signIn(),
  ])
}