export const initialCards = [
  {
    name: "Архыз",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
  },
  {
    name: "Челябинская область",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
  },
  {
    name: "Иваново",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
  },
  {
    name: "Камчатка",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
  },
  {
    name: "Холмогорский район",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
  },
  {
    name: "Байкал",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
  },
];

export const config = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_error",
  errorClass: "popup__form-text-error",
};

export const cardsSelector = ".elements";
export const cardTemplateSelector = "#element";

export const previewPopupSelector = ".popup_type_preview";
export const cardPopupSelector = ".popup_type_card";
export const profilePopupSelector = ".popup_type_profile";
export const profileTitleSelector = ".profile__title";
export const profileSubtitleSelector = ".profile__subtitle";
export const photoSelector = ".popup__photo";
export const captionSelector = ".popup__caption";

export const profilePopup = document.querySelector(".popup_type_profile");
export const profileName = profilePopup.querySelector("#nameInput");
export const profileJob = profilePopup.querySelector("#jobInput");

export const editButton = document.querySelector(".profile__edit-button");
export const addButton = document.querySelector(".profile__add-button");
