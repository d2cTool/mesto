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
export const avatarPopupSelector = ".popup_type_avatar";
export const profilePopupSelector = ".popup_type_profile";
export const profileTitleSelector = ".profile__title";
export const profileSubtitleSelector = ".profile__subtitle";
export const profileAvatarSelector = ".profile__avatar";
export const profileAvatarIconSelector = ".profile__avatar-icon";
export const photoSelector = ".popup__photo";
export const captionSelector = ".popup__caption";

export const profilePopup = document.querySelector(".popup_type_profile");
export const profileName = profilePopup.querySelector("#nameInput");
export const profileJob = profilePopup.querySelector("#jobInput");

export const editButton = document.querySelector(".profile__edit-button");
export const addButton = document.querySelector(".profile__add-button");
export const avatarButton = document.querySelector(".profile__avatar-icon");

export const confirmationPopupSelector = ".popup_type_confirmation";
