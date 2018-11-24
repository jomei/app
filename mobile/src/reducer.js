import { combineReducers } from 'redux'

import auth from 'mobile/src/components/auth/ducks'
import account from 'mobile/src/components/account/ducks'
import home from 'mobile/src/components/home/ducks'
import participants from 'mobile/src/components/participants/ducks'


export default combineReducers({
  auth: auth,
  account: account,
  home: home,
  participants: participants
})