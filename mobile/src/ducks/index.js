import { combineReducers } from 'redux'
import signIn from './auth/signIn'

export default combineReducers({
  signIn: signIn
})