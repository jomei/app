import axios from "axios";

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
}

export { Api }