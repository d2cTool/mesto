import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import * as utils from "../utils/constants.js";
import Section from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";

import "./index.css";

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
  profilePopupValidator.resetValidation();
  const info = userInfo.getUserInfo();
  utils.profileName.value = info.name;
  utils.profileJob.value = info.job;
  profilePopup.open();
});

utils.addButton.addEventListener("click", () => {
  cardPopupValidator.resetValidation();
  cardPopup.open("", "")
});

function createCardElement(data) {
  const card = new Card(data, utils.cardTemplateSelector, (title, photo) => {
    previewPopup.open(title, photo);
  });
  return card.generateCard();
}
