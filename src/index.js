import Card from "./scripts/Card.js";
import FormValidator from "./scripts/FormValidator.js";
import * as utils from "./scripts/utils/constants.js";
import Section from "./scripts/Section.js";
import PopupWithImage from "./scripts/PopupWithImage.js";
import PopupWithForm from "./scripts/PopupWithForm.js";
import UserInfo from "./scripts/UserInfo.js";

import "./pages/index.css";

const previewPopup = new PopupWithImage(utils.previewPopupSelector, {
  photoSelector: utils.photoSelector,
  captionSelector: utils.captionSelector,
});
previewPopup.setEventListeners();

const cardPopup = new PopupWithForm(utils.cardPopupSelector, (data) => cardsList.addItem(data));
cardPopup.setEventListeners();
const cardPopupValidator = new FormValidator({ ...utils.config, formSelector: utils.cardPopupSelector });
cardPopupValidator.enableValidation();

const profilePopup = new PopupWithForm(utils.profilePopupSelector, (values) => userInfo.setUserInfo(values.name, values.description));
profilePopup.setEventListeners();
const profilePopupValidator = new FormValidator({ ...utils.config, formSelector: utils.profilePopupSelector });
profilePopupValidator.enableValidation();

const userInfo = new UserInfo(utils.profileTitleSelector, utils.profileSubtitleSelector);

const cardsList = new Section(
  {
    items: utils.initialCards,
    renderer: (data) => createCardElement(data),
  },
  utils.cardsSelector
);
cardsList.renderItems();

utils.editButton.addEventListener("click", () => {
  const info = userInfo.getUserInfo();
  profilePopup.open(info.name, info.job);
});

utils.addButton.addEventListener("click", () => cardPopup.open("", ""));

function createCardElement(data) {
  const card = new Card(data, utils.cardTemplateSelector, (title, photo) => {
    previewPopup.open(title, photo);
  });
  return card.generateCard();
}
