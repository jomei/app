import { combineReducers } from 'redux';
import AuthReducer from './Auth';
import Config from './Config';
import BoxList from './box/BoxList';
import CreateBox from './box/CreateBox';

export default combineReducers({
  auth: AuthReducer,
  config: Config,
  boxList: BoxList,
  createBox: CreateBox
});