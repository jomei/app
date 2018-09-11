import { Actions } from 'react-native-router-flux';
import { Path, Fetch } from '../utils'

import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  PASSWORD_CONFIRMATION_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGIN_USER,
  SWITCH_LOGIN
} from './kinds';


const loginUserSuccess = (dispatch, user) => {
  if(user.successful()){
    dispatch({
      type: LOGIN_USER_SUCCESS,
      payload: user,
    });

    Actions.home();
  } else {
    dispatch({
      type: LOGIN_USER_FAIL,
      payload: user,
    });
  }
};

const loginUserFail = (dispatch, error) => {
  dispatch({
    type: LOGIN_USER_FAIL,
  });
};

export const emailChanged = (text) => {
  return {
    type: EMAIL_CHANGED,
    payload: text,
  };
};

export const passwordChanged = (pwd) => {
  return {
    type: PASSWORD_CHANGED,
    payload: pwd,
  };
};

export const passwordConfirmationChanged = (pwd) => {
  return {
    type: PASSWORD_CONFIRMATION_CHANGED,
    payload: pwd,
  };
};

export const signUpUser = (email, pwd, pwd_confirm) => {
  return (dispatch) => {
    dispatch({ type: LOGIN_USER }); // this shows the loader

    Fetch.post(Path.signUp(),{ user: {
        email: email,
        password: pwd,
        password_confirmation: pwd_confirm
      }
    })
      .then(user => loginUserSuccess(dispatch, user))
      .catch((error) => loginUserFail(dispatch, error));
  };
};

export const loginUser = (email, pwd) => {
  return (dispatch) => {

    Fetch.post(Path.signIn(), {
      email: email,
      password: pwd
    })
      .then(user => loginUserSuccess(dispatch, user))
      .catch((error) => loginUserFail(dispatch, error));
  };
};