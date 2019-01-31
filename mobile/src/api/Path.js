import config from 'mobile/src/config'

class Path {
  static API_PREFIX = '/api';
  static VERSION1_PREFIX = '/v1';

  static basePath() {
    return config.endpoint + this.API_PREFIX + this.VERSION1_PREFIX;
  };

  static signUp() { return this.basePath() + "/sign_up" }

  static signIn() { return this.basePath() + "/sign_in" }

  static boxes() { return this.basePath() + "/boxes" }

  static box(id) { return Path.boxes() + "/" + id }

  static positions() { return this.basePath() + "/positions" }

  static position(id) { return Path.position() + "/" + id }

  static participants() { return this.basePath() + "/participants" }

  static home() { return this.basePath() + "/home" }
}

export default Path