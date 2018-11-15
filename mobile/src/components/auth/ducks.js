import { SIGN_IN_FAILED, SIGN_IN_STARTED, SIGN_IN_SUCCESS,
  SIGN_IN_EMAIL_CHANGED, SIGN_IN_PASSWORD_CHANGED,
  default as signInReducer} from "./signIn/ducks";

export const SWITCH_FORMS = 'auth/switchForms';


const initialState = {
  showSignIn: true,
  signIn: {},
  signUp: {}
};

export const switchForms = (current) => {
  return {
    type: SWITCH_FORMS,
    payload: !current
  }
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case SWITCH_FORMS:
      return {...state, showSignIn: action.payload};
    case SIGN_IN_STARTED:
    case SIGN_IN_SUCCESS:
    case SIGN_IN_FAILED:
    case SIGN_IN_EMAIL_CHANGED:
    case SIGN_IN_PASSWORD_CHANGED:
      return {...state, signIn: signInReducer(state.signIn, action)};
    default:
      return state;
  }
}
