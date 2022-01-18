export default class Card {
  constructor({ _id, name, link, likes, owner }, info, cardTemplateSelector, handleCardClick, handleLikeClick, handleDeleteClick) {
    this._id = _id;
    this._text = name;
    this._image = link;
    this._likes = likes;
    this._owner = owner;
    this._userInfo = info;
    this._cardTemplateSelector = cardTemplateSelector;
    this._handleCardClick = handleCardClick;
    this._handleLikeClick = handleLikeClick;
    this._handleDeleteClick = handleDeleteClick;

    this._isLiked = false;
    this._likesCount = 0;
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
    const likeButton = this._element.querySelector(".element__like-button");
    const likeCount = this._element.querySelector(".element__like-count");
    const deleteButton = this._element.querySelector(".element__delete-button");

    title.textContent = this._text;
    photo.src = this._image;
    photo.alt = this._text;
    this._likesCount = this._likes.length;
    likeCount.textContent = this._likes.length;

    if (this._likes.some((like) => like._id === this._userInfo._id)) {
      likeButton.classList.add("element__like-button_active");
      this._isLiked = true;
    } else {
      likeButton.classList.remove("element__like-button_active");
    }

    if (this._userInfo._id !== this._owner._id)
      deleteButton.remove()

    return this._element;
  }

  isLiked() {
    return this._isLiked;
  }

  delete(item) {
    item.closest(".element").remove();
  }

  like(item) {
    const likeCount = this._element.querySelector(".element__like-count");
    item.classList.toggle("element__like-button_active");
    this._isLiked = !this._isLiked;
    if (this._isLiked) {
      this._likesCount++;
      likeCount.textContent = this._likesCount;
    } else {
      this._likesCount--;
      likeCount.textContent = this._likesCount;
    }
  }

  _setEventListeners() {
    this._element
      .querySelector(".element__delete-button")
      .addEventListener("click", (e) => this._remove());

    this._element
      .querySelector(".element__like-button")
      .addEventListener("click", (e) => this._like(e.target));

    this._element
      .querySelector(".element__photo")
      .addEventListener("click", (e) => this._preview());
  }

  _remove() {
    this._handleDeleteClick(this._element, this._id);
  }

  _like(item) {
    this._handleLikeClick(this._id, this._isLiked, item);
  }

  _preview() {
    this._handleCardClick(this._text, this._image)
  }
}
