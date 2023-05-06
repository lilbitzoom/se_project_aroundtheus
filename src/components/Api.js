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
    return fetch(`${this._baseUrl}users/me`, {
      method: 'GET',
      headers: this._token,
    }).then((res) => this._checkResponse(res));
  }

  getInitialCards() {
    return fetch(`${this._baseUrl}cards`, {
      method: 'GET',
      headers: this._token,
    }).then((res) => this._checkResponse(res));
  }

  getApiInfo() {
    return Promise.all([this.getUserInfo(), this.getInitialCards()]);
  }

  updateProfileInfo(data) {
    return fetch(`${this._baseUrl}users/me`, {
      method: 'PATCH',
      headers: this._token,
      body: JSON.stringify({
        name: 'Katelin Hogan',
        about: 'Aspiring Software Engineer',
      }),
    }).then((res) => this._checkResponse(res));
  }

  updateProfilePicture(url) {
    return fetch(`${this._baseUrl}users/me`, {
      method: 'PATCH',
      headers: this._token,
      body: JSON.stringify({
        avatar,
      }),
    }).then((res) => this._checkResponse(res));
  }

  addNewCard(name, link) {
    return fetch(`${this._baseUrl}cards`, {
      method: 'POST',
      headers: this._token,
      body: JSON.stringify({
        name,
        link,
      }),
    }).then((res) => this._checkResponse(res));
  }

  deleteCard() {
    return fetch(`${this._baseUrl}cards/cardId`, {
      method: 'DELETE',
      headers: this._token,
    });
  }

  getUserbyId(id) {
    return fetch(`${this.baseUrl}${id}`, {
      method: 'GET',
    });
  }
}
