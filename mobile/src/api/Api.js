import axios from "axios";

import {store} from 'mobile/src/store'

import Path from './Path'

class Api {
  static signIn(email, password) {
    return axios.post(Path.signIn(), {
      email: email,
      password: password
    })
  }

  static signUp(email, password, passwordConfirmation) {
    return axios.post(Path.signUp(), {
      auth: {
        email: email,
        password: password,
        password_confirmation: passwordConfirmation
      }
    })
  }

  static home() {
    return this._request('get', Path.home())
  }

  static _request(method, url, body) {
    let config = {
      method: method,
      url: url,
      data: body
    };
    const token = store.getState().account.token;

    if(token) {
      config.headers = {
        Authorization: `Bearer ${token}`
      }
    }
    console.log(config)
    return axios.request(config)
  }
}

export { Api }