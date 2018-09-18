import store from '../store/store'

class Fetch {
  static DEFAULT_HEADERS = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  };

  static post(path, body) {
    console.info("send post: "  + path);
    return fetch(path, {
      method: 'POST',
      headers: this._headers(),
      body: JSON.stringify(body),
    }).then((response) => {
      console.log(response);
      return response.json()
    })
  }

  static get(path, params = {}) {
    console.info("send get: "  + this._buildGetURL(path, params));
    return fetch(this._buildGetURL(path, params), {
      method: 'GET',
      headers: this._headers(),
    }).then((response) => {
      console.log(response);
      return response.json()
    })
  }

  static _buildGetURL(path, params) {
    return Object.keys(params).reduce((previous, key) => {
      return previous + `&${key}=${params[key]}`;
    }, path);
  }

  static _headers() {
    const token = store.getState().auth.user.token;

    if(token){
      return {...this.DEFAULT_HEADERS, 'Authorization':  `Bearer ${token}`}
    } else {
      return this.DEFAULT_HEADERS
    }
  }
}

export { Fetch }