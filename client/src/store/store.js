import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from '../reducers/index';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
// const persistConfig = {
//   key: 'root',
//   storage: storage,
// };

const middlewares = [thunk];

if (process.env.NODE_ENV === `development`) {
  const { logger } = require(`redux-logger`);

  middlewares.push(logger);
}
//
// const persistedReducer = persistReducer(persistConfig, reducers);
// const store = createStore(
//   persistedReducer,
//   applyMiddleware(...middlewares)
// );
// const persistor = persistStore(store);
// export default { store, persistor }

export default createStore(reducers, applyMiddleware(...middlewares))