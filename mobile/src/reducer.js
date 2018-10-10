import { combineReducers } from 'redux'
import auth from './components/auth/ducks'

export default combineReducers({
  auth: auth
})