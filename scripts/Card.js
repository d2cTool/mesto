export default class Card {
  constructor({ name, link }, cardSelector, previewPopup, openPopup) {
    this._text = name;
    this._image = link;
    this._cardSelector = cardSelector;
    this._previewPopup = previewPopup;
    this._openPopup = openPopup;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._cardSelector)
      .content
      .querySelector(".element")
      .cloneNode(true);

    return cardElement;
  }

  generateCard() {
    this._element = this._getTemplate();
    this._setEventListeners();

    const title = this._element.querySelector(".element__title");
    const photo = this._element.querySelector(".element__photo");

    title.textContent = this._text;
    photo.src = this._image;
    photo.alt = this._text;

    return this._element;
  }

  _setEventListeners() {
    this._element
      .querySelector(".element__delete-button")
      .addEventListener("click", (e) => this._remove(e.target));

    this._element
      .querySelector(".element__like-button")
      .addEventListener("click", (e) => this._like(e.target));

    this._element
      .querySelector(".element__photo")
      .addEventListener("click", (e) => this._preview(e.target));
  }

  _remove(item) {
    item.closest(".element").remove();
  }

  _like(item) {
    item.classList.toggle("element__like-button_active");
  }

  _preview(item) {
    const previewPopupPhoto = this._previewPopup.querySelector(".popup__photo");
    const previewPopupCaption =
      this._previewPopup.querySelector(".popup__caption");

    previewPopupCaption.textContent = item
      .closest(".element")
      .querySelector(".element__title").textContent;
    previewPopupPhoto.src = item.src;
    previewPopupPhoto.alt = previewPopupCaption.textContent;

    this._openPopup(this._previewPopup);
  }
}
