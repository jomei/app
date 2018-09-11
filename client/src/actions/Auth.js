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
  console.log("user")
  console.log(user)
  dispatch({
    type: LOGIN_USER_SUCCESS,
    payload: user,
  });
  Actions.home();
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


export const signUpUser = (email, pwd, pwd_confirm) => {
  return (dispatch) => {
    dispatch({ type: LOGIN_USER });
    fetch('http://539c090b.ngrok.io/api/v1/sign_up', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify({
        user: {email: email,
          password: pwd,
          password_confirmation: pwd_confirm}
      }),
    })
      .then(user => loginUserSuccess(dispatch, user))
      .catch((error) => loginUserFail(dispatch, error));
  };
};

export const loginUser = (email, pwd) => {
  return (dispatch) => {
    fetch('http://539c090b.ngrok.io/api/v1/sign_in', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify({
        email: email,
        password: pwd
      }),
    })
      .then(user => loginUserSuccess(dispatch, user))
      .catch((error) => loginUserFail(dispatch, error));
  };
};