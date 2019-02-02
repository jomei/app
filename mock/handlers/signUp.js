import {JimRaynor} from "./constants";

class SignUp {
  static handle(params) {
    if(params.login === JimRaynor.email) {
      this.handleSuccess()
    } else {
      this.handleFail()
    }
  }

  static handleSuccess() {
    return JimRaynor.token
  }

  static handleFail() {
    return 401
  }
}

export default SignUp