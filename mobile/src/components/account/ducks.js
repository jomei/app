import {SIGN_UP_SUCCESS} from "mobile/src/components/auth/signUp/ducks";
import {SIGN_IN_SUCCESS} from "mobile/src/components/auth/signIn/ducks";
import {HOME_LOADING_SUCCESS} from "mobile/src/components/home/ducks";

const initialState = {
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case SIGN_UP_SUCCESS:
    case SIGN_IN_SUCCESS:
      return {...state, user: action.payload.user, token: action.payload.token};
    case HOME_LOADING_SUCCESS:
      const user = {...state.user, ...action.payload.user};
      return {...state, user: user};
    default:
      return state
  }
}