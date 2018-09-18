import store from '../store/store'

class Path {
  static API_PREFIX = '/api';
  static VERSION1_PREFIX = '/v1';

  static basePath() {
    return store.getState().config.url + this.API_PREFIX + this.VERSION1_PREFIX;
  };

  static signUp() {
    return this.basePath() + "/sign_up"
  };

  static signIn() {
    return this.basePath() + "/sign_in"
  }

  static getUser() {
    return this.basePath() + "/get_user"
  }

  static boxes() {
    return this.basePath() + "/boxes"
  }

  static participants() {
    return this.basePath() + "/participants"
  }
}

export { Path }