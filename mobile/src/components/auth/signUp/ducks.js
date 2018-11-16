export const SIGN_UP_START = 'auth/signUp/start';
export const SIGN_UP_STARTED = 'auth/signUp/started';
export const SIGN_UP_SUCCESS = 'auth/signUp/success';
export const SIGN_UP_FAILED = 'auth/signUp/failed';
export const SIGN_UP_EMAIL_CHANGED = 'auth/signUp/email_changed';
export const SIGN_UP_PASSWORD_CHANGED = 'auth/signUp/password_changed';
export const SIGN_UP_PASSWORD_CONFIRMATION_CHANGED = 'auth/signUp/password_confirmation_changed';

const initialState = {
  loading: false,
  error: null,
  email: null,
  password: null,
  passwordConfirmation: null
};


export const emailChanged = (email) => {
  return {
    type: SIGN_UP_EMAIL_CHANGED,
    payload: email
  }
};

export const passwordChanged = (pwd) => {
  return {
    type: SIGN_UP_PASSWORD_CHANGED,
    payload: pwd
  }
};

export const passwordConfirmationChanged = (pwd) => {
  return {
    type: SIGN_UP_PASSWORD_CONFIRMATION_CHANGED,
    payload: pwd
  }
};

export const signUpUser = (email, password, passwordConfirmation) => {
  return {
    type: SIGN_UP_START,
    payload: {email, password, passwordConfirmation}
  }
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case SIGN_UP_STARTED:
      return {...state, loading: true};
    case SIGN_UP_SUCCESS:
      return {...state, loading: false,};
    case SIGN_UP_FAILED:
      return {...state, loading: false, error: action.payload};
    case SIGN_UP_EMAIL_CHANGED:
      return {...state, email: action.payload};
    case SIGN_UP_PASSWORD_CHANGED:
      return {...state, password: action.payload};
    case SIGN_UP_PASSWORD_CONFIRMATION_CHANGED:
      return {...state, passwordConfirmation: action.payload};
    default:
      return state;
  }
}