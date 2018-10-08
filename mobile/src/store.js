import { combineReducers, createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga'
import createLogger from 'redux-logger';
import * as reducers from './ducks/index';

const rootReducer = combineReducers(reducers);

const middlewares = [createSagaMiddleware];

if (process.env.NODE_ENV === 'development') {
  middlewares.push(createLogger());
}

export default createStore(rootReducer, applyMiddleware(...middlewares))