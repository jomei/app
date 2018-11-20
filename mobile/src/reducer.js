import { combineReducers } from 'redux'

import auth from 'mobile/src/components/auth/ducks'
import account from 'mobile/src/components/account/ducks'


export default combineReducers({
  auth: auth,
  account: account
})