export default class UserInfo {
  constructor({ name, description }) {
    this._profileName = document.querySelector(name);
    this._profileJob = document.querySelector(description);
  }

  getUserInfo = () => {
    return {
      name: this._profileName.textContent,
      description: this._profileJob.textContent,
    };
  };

  setUserInfo({ name, description }) {
    this._profileName.textContent = name;
    this._profileJob.textContent = description;
  }
}
