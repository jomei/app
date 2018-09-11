class Fetch {
  static DEFAULT_HEADERS = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  };

  static post(path, body) {
    return fetch(path, {
      method: 'POST',
      headers: this.DEFAULT_HEADERS,
      body: JSON.stringify(body),
    }).then((response) => { return new ResponseWrapper(response) } )
  }
}

class ResponseWrapper {
  constructor(response) {
    this.response = response;
    if(this.successful()) {
      response.json().then((data) => {console.log(data); this.body = data}) ;
    }
  }

  successful() {
    return this.response.ok;
  }

  getData() {
    return this.body;
  }
}

export { Fetch }