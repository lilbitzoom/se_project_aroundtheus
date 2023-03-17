export default class UserInfo {
  constructor({ name, description }) {
    this._inputName = document.querySelector('#name');
    this._inputDescription = document.querySelector('#description');
    this._profileName = document.querySelector('.profile__name');
    this._profileJob = document.querySelector('.profile__subheader');
  }

  getUserInfo = () => {
    this._inputName.value = this._profileName.textContent;
    this._inputDescription.value = this._profileJob.textContent;
  };

  setUserInfo() {
    this._profileName.textContent = this._inputName.value;
    this._profileJob.textContent = this._inputDescription.value;
  }
}
