import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer, createMigrate } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import createSagaMiddleware from 'redux-saga'
import logger from 'redux-logger';

import rootReducer from './reducer';
import rootSaga from './saga'

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];

if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger);
}

// const migrations = {
//   0: (state) => {
//     return {
//
//     }
//   },
//   1: (state) => { return {}},
//   2: (state) => { return {}},
// };

const persistConfig = {
  key: 'root',
  storage,
  version: 0,
  whitelist: ['account'],
  // migrate: createMigrate(migrations, { debug: false })
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = createStore(persistedReducer, applyMiddleware(...middlewares));
const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

export { store, persistor }