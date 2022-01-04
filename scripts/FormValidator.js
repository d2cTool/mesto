export default class FormValidator {
  constructor(data, cardSelector, previewSelector) {
    this._text = data.text;
    this._image = data.image;
    this._cardSelector = cardSelector;
    this._previewSelector = previewSelector;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._cardSelector)
      .content
      .querySelector('.element')
      .cloneNode(true);

    return cardElement;
  }
}
