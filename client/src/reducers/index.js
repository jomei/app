import { combineReducers } from 'redux';
import AuthReducer from './Auth';
import Config from './Config';

export default combineReducers({
  auth: AuthReducer,
  config: Config,
});
