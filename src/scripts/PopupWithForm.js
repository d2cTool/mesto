export default class PopupWithForm extends Popup {
  constructor(popupSelector, ) {
    super(popupSelector);
  }

  _getInputValues() {
    this._inputList = this._element.querySelectorAll(".popup__input");
    this._formValues = {};
    this._inputList.forEach((input) => {
      this._formValues[input.name] = input.value;
    });

    return this._formValues;
  }

  _handleFormSubmit() {

  }

  setEventListeners() {
    this._popup.addEventListener('submit', () => {
      this._handleFormSubmit(this._getInputValues());

      this.close();
    });

    super.setEventListeners();
  }

}
