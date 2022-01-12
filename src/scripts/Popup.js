export default class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
  }

  open() {
    this._popup.classList.add("popup_opened");
    this.setEventListeners();
  }

  close() {
    this.resetEventListeners();
    this._popup.classList.remove("popup_opened");
  }

  setEventListeners() {
    this._popup.addEventListener("click", (e) => this._closePopup(e));
    document.addEventListener("keydown", (e) => this._closePopupByEscape(e));
  }

  resetEventListeners() {
    this._popup.removeEventListener("click", (e) => this._closePopup(e));
    document.removeEventListener("keydown", (e) => this._closePopupByEscape(e));
  }

  _closePopup(evt) {
    if (
      evt.target.classList.contains("popup_opened") ||
      evt.target.classList.contains("popup__close-button")
    ) {
      this.close();
    }
  }

  _closePopupByEscape(evt) {
    if (evt.key === "Escape") {
      this.close();
    }
  }
}
