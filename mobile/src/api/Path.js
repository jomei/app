class Path {
  static API_PREFIX = '/api';
  static VERSION1_PREFIX = '/v1';

  static basePath() {
    return 'http://cb2a7870.ngrok.io' + this.API_PREFIX + this.VERSION1_PREFIX;
  };

  static signUp() {
    return this.basePath() + "/sign_up"
  };

  static signIn() {
    return this.basePath() + "/sign_in"
  }


  static boxes() {
    return this.basePath() + "/boxes"
  }

  static participants() {
    return this.basePath() + "/participants"
  }

  static box(box_id) {
    return this.basePath() + "/boxes/" + box_id;
  }

  static home() {
    return this.basePath() + "/home"
  }
}

export default Path