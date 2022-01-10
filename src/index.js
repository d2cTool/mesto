import Card from "./scripts/Card.js";
import FormValidator from "./scripts/FormValidator.js";
import * as utils from "./scripts/utils.js";

import './pages/index.css';

const cards = document.querySelector(".elements");
const cardSelector = "#element";
const cardTemplate = document.querySelector("#element");
const previewPopup = document.querySelector(".popup_type_preview");
const popups = document.querySelectorAll(".popup");

const profileTitle = document.querySelector(".profile__title");
const profileSubtitle = document.querySelector(".profile__subtitle");
const profilePopup = document.querySelector(".popup_type_profile");
const profilePopupForm = profilePopup.querySelector(".popup__form");
const profileName = profilePopupForm.querySelector("#nameInput");
const profileJob = profilePopupForm.querySelector("#jobInput");
const editButton = document.querySelector(".profile__edit-button");

const cardPopup = document.querySelector(".popup_type_card");
const cardPopupForm = cardPopup.querySelector(".popup__form");
const cardPopupName = cardPopupForm.querySelector("#placeNameInput");
const cardPopupLink = cardPopupForm.querySelector("#linkInput");
const addButton = document.querySelector(".profile__add-button");

window.addEventListener("load", (e) => {
  addInitialElements();
  const validator = new FormValidator(utils.config);
});

function addInitialElements() {
  utils.initialCards.forEach((item) => {
    const card = new Card(item, cardSelector, previewPopup, openPopup);
    cards.prepend(card.generateCard());
  });
}

popups.forEach((popup) => {
  popup.addEventListener("click", (evt) => {
    if (
      evt.target.classList.contains("popup_opened") ||
      evt.target.classList.contains("popup__close-button")
    ) {
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

// profile
const showProfilePopup = () => {
  openPopup(profilePopup);
  profileName.value = profileTitle.textContent;
  profileJob.value = profileSubtitle.textContent;
};

editButton.addEventListener("click", showProfilePopup);

const submitProfileForm = (evt) => {
  evt.preventDefault();

  profileTitle.textContent = profileName.value;
  profileSubtitle.textContent = profileJob.value;

  closePopup(profilePopup);
};
profilePopupForm.addEventListener("submit", submitProfileForm);

// card
addButton.addEventListener("click", () => {
  openPopup(cardPopup);
});

cardPopupForm.addEventListener("submit", (evt) => {
  evt.preventDefault();
  const card = new Card(
    { name: cardPopupName.value, link: cardPopupLink.value },
    cardSelector,
    previewPopup,
    openPopup
  );
  cards.prepend(card.generateCard());

  cardPopupForm.reset();

  const buttonElement = cardPopupForm.querySelector(".popup__button");
  buttonElement.classList.add(utils.config.inactiveButtonClass);

  closePopup(cardPopup);
});
