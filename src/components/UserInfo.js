export default class UserInfo {
  constructor({ name, description }) {
    this._profileName = document.querySelector(name);
    this._profileJob = document.querySelector(description);
  }

  getUserInfo = () => {
    console.log(description);
    return {
      name: this._profileName.textContent,
      description: this._profileJob.textContent,
    };
  };

  setUserInfo(name, description) {
    console.log(name);
    console.log(description);
    this._profileName.textContent = name;
    this._profileJob.textContent = description;
  }
}
