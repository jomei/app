class Path {
  static API_PREFIX = '/api';
  static VERSION1_PREFIX = '/v1';

  static basePath() {
    return 'http://848ef629.ngrok.io' + this.API_PREFIX + this.VERSION1_PREFIX;
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

  static showBox(box_id) {
    return this.basePath() + "/boxes/" + box_id;
  }

  static home() {
    return this.basePath() + "/home"
  }
}

export default Path