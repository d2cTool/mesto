export default class Card {
  constructor({ name, link, likes, owner }, cardTemplateSelector, handleCardClick, handleLikeClick) {
    this._text = name;
    this._image = link;
    this._likeCount = likes.Length;
    this._owner = owner;
    this._cardTemplateSelector = cardTemplateSelector;
    this._handleCardClick = handleCardClick;
    this._handleLikeClick = handleLikeClick;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._cardTemplateSelector)
      .content.querySelector(".element")
      .cloneNode(true);

    return cardElement;
  }

  generateCard() {
    this._element = this._getTemplate();
    this._setEventListeners();

    const title = this._element.querySelector(".element__title");
    const photo = this._element.querySelector(".element__photo");
    const likeCount = this._element.querySelector(".element__like-count");

    title.textContent = this._text;
    photo.src = this._image;
    photo.alt = this._text;
    likeCount.textContent = this._likeCount;

    return this._element;
  }

  isLiked() {
		if (this._data.likes.some((like) => like._id === this._userData._id))
			return true
		else return false
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
      .addEventListener("click", (e) => this._preview());
  }

  _remove(item) {
    item.closest(".element").remove();
  }

  _like(item) {
    item.classList.toggle("element__like-button_active");
    this._handleLikeClick();
  }

  _preview() {
    this._handleCardClick(this._text, this._image)
  }
}
