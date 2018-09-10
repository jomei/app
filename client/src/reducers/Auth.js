import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  PASSWORD_CONFIRMATION_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGIN_USER,
  SWITCH_LOGIN
} from '../actions/kinds';

const INITIAL_STATE = {
  email: '',
  password: '',
  password_confirmation: '',
  user: null,
  error: '',
  loading: false,
  showLogin: true
};

export default (state = INITIAL_STATE, action) => {
  console.log(action);
  switch (action.type) {
    case EMAIL_CHANGED:
      return {...state, email: action.payload};
    case PASSWORD_CHANGED:
      return {...state, password: action.payload};
    case PASSWORD_CONFIRMATION_CHANGED:
      return {...state, password_confirmation: action.payload};
    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        user: action.payload,
        error: '',
        loading: false,
        email: '',
        password: '',
      };
    case LOGIN_USER_FAIL:
      return {
        ...state,
        error: 'Authentication Failed!',
        loading: false,
      };
    case LOGIN_USER:
      return {...state, error: '', loading: true};
    case SWITCH_LOGIN:
      return {...state, showLogin: !state.showLogin};
    default:
      return state;
  }
}