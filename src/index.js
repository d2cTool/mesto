import Card from "./scripts/Card.js";
import FormValidator from "./scripts/FormValidator.js";
import * as utils from "./scripts/utils.js";
import Section from "./scripts/Section.js";
import PopupWithImage from "./scripts/PopupWithImage.js";
import PopupWithForm from "./scripts/PopupWithForm.js";
import UserInfo from "./scripts/UserInfo.js";

import "./pages/index.css";

const cardsSelector = ".elements";
const cardTemplateSelector = "#element";

const previewPopupSelector = ".popup_type_preview";
const cardPopupSelector = ".popup_type_card";
const profilePopupSelector = ".popup_type_profile";
const profileTitleSelector = ".profile__title";
const profileSubtitleSelector = ".profile__subtitle";
const photoSelector = ".popup__photo";
const captionSelector = ".popup__caption";

const editButton = document.querySelector(".profile__edit-button");
const addButton = document.querySelector(".profile__add-button");

window.addEventListener("load", (e) => {
  const validator = new FormValidator(utils.config);
});

const previewPopup = new PopupWithImage(previewPopupSelector, {
  photoSelector: photoSelector,
  captionSelector: captionSelector,
});

const cardPopup = new PopupWithForm(cardPopupSelector, {
  text1Selector: "#placeNameInput",
  text2Selector: "#linkInput",
  handleFormSubmit: (data) => createCardElement(data),
});

const profilePopup = new PopupWithForm(profilePopupSelector, {
  text1Selector: "#nameInput",
  text2Selector: "#jobInput",
  handleFormSubmit: (values) => {
    userInfo.setUserInfo(values.name, values.description);
  },
});

const validator = new FormValidator(utils.config);

const userInfo = new UserInfo(profileTitleSelector, profileSubtitleSelector);

const cardsList = new Section(
  {
    items: utils.initialCards,
    renderer: (data) => createCardElement(data),
  },
  cardsSelector
);

cardsList.renderItems();

const info = userInfo.getUserInfo();
editButton.addEventListener("click", (e) =>
  profilePopup.open(info.name, info.job)
);
addButton.addEventListener("click", (e) =>
  cardPopup.open("", "")
);

function createCardElement(data) {
  return new Card(data, cardTemplateSelector, (title, photo) => {
    previewPopup.open(title, photo);
  }).generateCard();
}
