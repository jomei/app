import {SIGN_UP_SUCCESS} from "mobile/src/components/auth/signUp/ducks";
import {SIGN_IN_SUCCESS} from "mobile/src/components/auth/signIn/ducks";

const initialState = {
  user: null,
  token: null
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case SIGN_UP_SUCCESS:
    case SIGN_IN_SUCCESS:
      return {...state, user: action.payload.user, token: action.payload.token};
    default:
      return state
  }
}