import { Actions } from 'react-native-router-flux';

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
  dispatch({
    type: LOGIN_USER_SUCCESS,
    payload: user,
  });
  Actions.main();
};

const loginUserFail = (dispatch, error) => {
  console.log(error);
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

export const switchLogin = () => {
  return {
    type: SWITCH_LOGIN,
  }
};

export const loginUser = (email, pwd) => {
  return (dispatch) => {
    dispatch({ type: LOGIN_USER }); // this is to show the loader
  };
};

export const signUpUser = (email, pwd, pwd_confirm) => {
  return (dispatch) => {
    dispatch({ type: LOGIN_USER }); // this is to show the loader
  };
};