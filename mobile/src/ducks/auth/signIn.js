export const EMAIL_CHANGED = 'auth/signIn/email_changed';
export const PASSWORD_CHANGED = 'auth/signIn/password_changed';
export const SIGN_IN_START = 'auth/signIn/start';
export const SIGN_IN_STARTED = 'auth/signIn/started';
export const SIGN_IN_SUCCESS = 'auth/signIn/success';
export const SIGN_IN_FAILED = 'auth/signIn/failed';


const initialState = {};

export const emailChanged = (email) => {
  return {
    type: EMAIL_CHANGED,
    payload: email
  }
};

export const passwordChanged = (pwd) => {
  return {
    type: PASSWORD_CHANGED,
    payload: pwd
  }
};

export const signInUser = (email, pwd) => {
  return {
    type: SIGN_IN_START,
    payload: {email, pwd}
  }
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case SIGN_IN_STARTED:
      return {...state, loading: true};
    case SIGN_IN_SUCCESS:
      return {...state, loading: false};
    case SIGN_IN_FAILED:
      return {...state, loading: false, error: action.payload};
    case EMAIL_CHANGED:
      return {...state, email: action.payload};
    case PASSWORD_CHANGED:
      return {...state, password: action.payload};
    default:
      return state;
  }
}