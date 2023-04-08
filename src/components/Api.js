export default class Api {
  constructor({ baseUrl, headers }) {
    this._token = headers;
    this._baseUrl = baseUrl;
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Error: ${res.status}`);
  }

  getUserInfo() {
    return fetch(`${this._baseUrl}user/me`, {
      method: 'GET',
      headers: this._token,
    }).then((res) => this._checkResponse(res));
  }

  getInitialCards() {
    return fetch(`${this._baseUrl}cards/`, {
      method: 'GET',
      headers: this._token,
    }).then((res) => this._checkResponse(res));
  }

  getApiInfo() {
    return Promise.all([this.getUserInfo(), this.getInitialCards()]);
  }

  updateProfileInfo(name, description) {
    return fetch(`${this._baseUrl}user/me`, {
      method: 'PATCH',
      headers: this._token,
      body: JSON.stringify({
        name,
        description,
      }),
    }).then((res) => this._checkResponse(res));
  }

  addNewCard(name, link) {
    return fetch(`${this._baseUrl}card/`, {
      method: 'PATCH',
      headers: this._token,
      body: JSON.stringify({
        name,
        link,
      }),
    }).then((res) => this._checkResponse(res));
  }
}
