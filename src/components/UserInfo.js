export default class UserInfo {
  constructor(
    profileTitleSelector,
    profileSubTitleSelector,
    profileAvatarSelector
  ) {
    this._name = document.querySelector(profileTitleSelector);
    this._job = document.querySelector(profileSubTitleSelector);
    this._avatar = document.querySelector(profileAvatarSelector);
  }

  getUserInfo() {
    return this._userData;
  }

  setUserInfo(data) {
    this._userData = data;
    this._name.textContent = data.name;
    this._job.textContent = data.about;
    this._avatar.src = data.avatar;
  }
}
