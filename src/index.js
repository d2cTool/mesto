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
const profilePopupSelector = ".popup_type_preview";

window.addEventListener("load", (e) => {
  addInitialElements();
  const validator = new FormValidator(utils.config);
});

const previewPopup = new PopupWithImage(previewPopupSelector);
const cardPopup = new PopupWithForm(cardPopupSelector);
const profilePopup = new PopupWithForm(profilePopupSelector);

const cardsList = new Section(
  {
    items: utils.initialCards,
    renderer: (item) => {
      const card = new Card(item, cardTemplateSelector, {},{});
      const cardElement = card.generateCard();
      cardsList.addItem(cardElement);
    },
  },
  cardsSelector
);

cardsList.renderItems();
