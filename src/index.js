import Card from "./scripts/Card.js";
import FormValidator from "./scripts/FormValidator.js";
import * as utils from "./scripts/utils.js";
import Section from "./scripts/Section.js";
import PopupWithImage from "./scripts/PopupWithImage.js";

import './pages/index.css';

const cardsSelector = ".elements";
const cardSelector = "#element";

const previewPopupSelector = '.popup_type_preview';
const previewPopup = document.querySelector(".popup_type_preview");

window.addEventListener("load", (e) => {
  addInitialElements();
  const validator = new FormValidator(utils.config);
});

const previewPopup = new PopupWithImage(previewPopupSelector);

const cardsList = new Section({
  items: utils.initialCards, renderer: (item) => {
    const card = new Card(item, cardSelector, previewPopup, openPopup);
    const cardElement = card.generateCard();
    cardsList.addItem(cardElement);
  }
}, cardsSelector);

cardsList.renderItems();


