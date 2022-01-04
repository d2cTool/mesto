import Card from './Card.js';
import FormValidator from './FormValidator.js';
import * as utils from './utils.js';

const cards = document.querySelector(".elements");
const cardTemplate = document.querySelector("#element");
const previewPopup = document.querySelector(".popup_type_preview");
const popups = document.querySelectorAll(".popup");

window.addEventListener("load", (e) => {
  addInitialElements();
});

function addInitialElements() {
  utils.initialCards.forEach((item) => {
    const card = new Card(item, cardTemplate, previewPopup, openPopup);
    cards.prepend(card.generateCard());
  });
}

popups.forEach((popup) => {
  popup.addEventListener("click", (evt) => {
    if (evt.target.classList.contains("popup_opened")) {
      closePopup(popup);
    }
    if (evt.target.classList.contains("popup__close-button")) {
      closePopup(popup);
    }
  });
});

function openPopup(popup) {
  popup.classList.add("popup_opened");
  document.addEventListener("keydown", closePopupByEscape);
}

function closePopup(popup) {
  document.removeEventListener("keydown", closePopupByEscape);
  popup.classList.remove("popup_opened");
}

function closePopupByEscape(evt) {
  if (evt.key === "Escape") {
    closePopup(document.querySelector(".popup_opened"));
  }
}
