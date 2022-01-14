export default class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
    this._closePopupByEscape = this._closePopupByEscape.bind(this);
  }

  open() {
    this._popup.classList.add("popup_opened");
    document.addEventListener("keydown", this._closePopupByEscape);
  }

  close() {
    this._popup.classList.remove("popup_opened");
    document.removeEventListener("keydown", this._closePopupByEscape);
  }

  setEventListeners() {
    this._popup.addEventListener("click", (e) => this._closePopup(e));
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
