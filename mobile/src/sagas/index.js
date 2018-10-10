import { fork } from 'redux-saga/effects';
import signIn  from './auth/signIn';

export default function* root_saga() {
  yield [
    fork(signIn)
  ];
}