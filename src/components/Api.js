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

  updateProfileInfo(name, about) {
    return fetch(`${this._baseUrl}users/me`, {
      method: 'PATCH',
      headers: this._token,
      body: JSON.stringify({
        name,
        about,
      }),
    }).then((res) => this._checkResponse(res));
  }

  updateProfilePicture(url) {
    return fetch(`${this._baseUrl}users/me`, {
      method: 'PATCH',
      headers: this._token,
      body: JSON.stringify({
        url,
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
    }).then((res) => {
      this._checkResponse(res);
    });
  }

  deleteCard() {
    return fetch(`${this._baseUrl}cards`, {
      method: 'DELETE',
      headers: this._token,
    });
  }

  getUserbyId(id) {
    return fetch(`${this.baseUrl}${id}`, {
      method: 'GET',
    });
  }

  addLikeCount(like) {
    return fetch(`${this._baseUrl}cards/likes/cardId`, {
      method: 'POST',
      headers: this._token,
      body: JSON.stringify({
        like,
      }),
    }).then((res) => {
      this._checkResponse(res);
    });
  }

  deleteLikeCount() {
    return fetch(`${this._baseUrl}cards/likes/cardId`, {
      method: 'DELETE',
      headers: this._token,
      body: JSON.stringify({
        like,
      }),
    }).then((res) => {
      this._checkResponse(res);
    });
  }
}
