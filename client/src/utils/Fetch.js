class Fetch {
  static DEFAULT_HEADERS = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  };

  static post(path, body, token = null) {
    console.info("send post: "  + path)
    return fetch(path, {
      method: 'POST',
      headers: this._headers(token),
      body: JSON.stringify(body),
    }).then((response) => {
      console.log(response)
      return response.json() } )
  }

  static get(path, params, token = null) {
    return fetch(this._buildGetURL(path, params), {
      method: 'GET',
      headers: this._headers(token),
    })
  }

  static _buildGetURL(path, params) {
    Object.keys(params).reduce((previous, key) => {
      return previous + `&${key}=${params[key]}`;
    }, path);
  }

  static _headers(token) {
    if(token){
      return {...this.DEFAULT_HEADERS, 'Authorization':  `Bearer ${token}`}
    } else {
      return this.DEFAULT_HEADERS
    }
  }
}

export { Fetch }