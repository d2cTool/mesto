import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, {text1Selector, text2Selector, handleFormSubmit}) {
    super(popupSelector);

    this._text1 = this._popup.querySelector(text1Selector);
    this._text2 = this._popup.querySelector(text2Selector);
    this._handleFormSubmit = handleFormSubmit;
    this._setSubmitListeners();
  }

  open(text1, text2) {
    this._text1 = text1;
    this._text2 = text2;

    super.open();
  }

  _setSubmitListeners() {
    this._popup.addEventListener("submit", (e) => {
      this._handleFormSubmit(this._getInputValues());
    this.close();
    });
  }

  _getInputValues() {
    this._inputList = this._popup.querySelectorAll(".popup__input");
    this._formValues = {};
    this._inputList.forEach((input) => {
      this._formValues[input.name] = input.value;
    });

    return this._formValues;
  }
}
