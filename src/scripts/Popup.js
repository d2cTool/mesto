export default class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
    _addEventListeners();
  }

  open() {
    this._popup.classList.add("popup_opened");
  }

  close() {
    this._popup.classList.remove("popup_opened");
  }

  _addEventListeners() {
    this._popup.addEventListener("click", (evt) => {
      if (
        evt.target.classList.contains("popup_opened") ||
        evt.target.classList.contains("popup__close-button")
      ) {
        close();
      }
    });
  }
}
