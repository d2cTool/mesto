import Popup from "./Popup.js";

export default class PopupWithConfirmation extends Popup {
  constructor(popupSelector, handleFormSubmit) {
    super(popupSelector);
    this._handleFormSubmit = handleFormSubmit;
  }

  open(data) {
    super.open();
    this._data = data;
  }

  setEventListeners() {
    super.setEventListeners();
    this._popup.addEventListener("submit", (e) =>
      this._handleFormSubmit(this._data)
    );
  }
}
