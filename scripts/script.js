// selectors
const editButton = document.querySelector(".profile__edit-button");
const closeButton = document.querySelector(".popup__close-button");
const addButton = document.querySelector(".profile__add-button");

const profileTitle = document.querySelector(".profile__title");
const profileSubtitle = document.querySelector(".profile__subtitle");

const profilePopup = document.querySelector(".popup_type_profile");
const profilePopupForm = profilePopup.querySelector(".popup__form");
const profileName = profilePopupForm.querySelector("#nameInput");
const profileJob = profilePopupForm.querySelector("#jobInput");

const elementTemplate = document.querySelector("#element").content;
const elements = document.querySelector(".elements");

const previewPopup = document.querySelector(".popup_type_preview");
const previewPopupPhoto = previewPopup.querySelector(".popup__photo");
const previewPopupCaption = previewPopup.querySelector(".popup__caption");
const previewPopupCloseButton = previewPopup.querySelector(
  ".popup__close-button"
);

const cardPopup = document.querySelector(".popup_type_card");
const cardPopupForm = cardPopup.querySelector(".popup__form");
const cardPopupName = cardPopupForm.querySelector("#placeNameInput");
const cardPopupLink = cardPopupForm.querySelector("#linkInput");
const cardPopupCloseButton = cardPopup.querySelector(".popup__close-button");

const popupForms = document.querySelectorAll(".popup__form");

// listener functions
const showProfilePopup = () => {
  openPopup(profilePopup);
  profileName.value = profileTitle.textContent;
  profileJob.value = profileSubtitle.textContent;
};
const hideProfilePopup = () => closePopup(profilePopup);
const submitProfileForm = (evt) => {
  evt.preventDefault();

  profileTitle.textContent = profileName.value;
  profileSubtitle.textContent = profileJob.value;

  closePopup(profilePopup);
};

// added listeners
editButton.addEventListener("click", showProfilePopup);
closeButton.addEventListener("click", hideProfilePopup);
previewPopupCloseButton.addEventListener("click", () =>
  closePopup(previewPopup)
);

profilePopupForm.addEventListener("submit", submitProfileForm);

addButton.addEventListener("click", () => {
  openPopup(cardPopup);
  //cardPopupForm.reset();
});

cardPopupForm.addEventListener("submit", (evt) => {
  evt.preventDefault();
  addElement(createElement(cardPopupName.value, cardPopupLink.value));

  cardPopupName.value = "";
  cardPopupLink.value = "";

  const buttonElement = cardPopupForm.querySelector(".popup__button");
  buttonElement.classList.add(config.inactiveButtonClass);

  closePopup(cardPopup);
});

cardPopupCloseButton.addEventListener("click", () => closePopup(cardPopup));

function openPopup(popup) {
  popup.classList.add("popup_opened");
  document.addEventListener("click", closePopupByCoverClick);
  document.addEventListener("keydown", closePopupByEscape);
}

function closePopup(popup) {
  document.removeEventListener("click", closePopupByCoverClick);
  document.removeEventListener("keydown", closePopupByEscape);
  popup.classList.remove("popup_opened");
}

window.addEventListener("load", (e) => {
  enableValidation(config);
  addInitialElements();
});

function closePopupByEscape(evt) {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_opened');
    closePopup(openedPopup);
  }
}

function closePopupByCoverClick(evt) {
  const target = evt.target;
  const openedPopup = document.querySelector(".popup_opened");
  const photos = Array.from(document.querySelectorAll(".element__photo"));
  if (openedPopup) {
    if (
      !openedPopup.querySelector(".popup__container").contains(target) &&
      target != editButton &&
      target != addButton &&
      !photos.some((e) => target == e)
    )
    closePopup(openedPopup);
  }
};

function createElement(name, link) {
  const element = elementTemplate.querySelector(".element").cloneNode(true);

  element
    .querySelector(".element__delete-button")
    .addEventListener("click", (e) => removeElement(e.target));
  element
    .querySelector(".element__like-button")
    .addEventListener("click", (e) => likeElement(e.target));
  element
    .querySelector(".element__photo")
    .addEventListener("click", (e) => previewElement(e.target));

  const title = element.querySelector(".element__title");
  const photo = element.querySelector(".element__photo");

  title.textContent = name;
  photo.src = link;
  photo.alt = name;

  return element;
}

function addElement(element) {
  elements.prepend(element);
}

function previewElement(element) {
  openPopup(previewPopup);
  previewPopupCaption.textContent = element
    .closest(".element")
    .querySelector(".element__title").textContent;
  previewPopupPhoto.src = element.src;
  previewPopupPhoto.alt = previewPopupCaption.textContent;
}

function likeElement(element) {
  element.classList.toggle("element__like-button_active");
}

function removeElement(element) {
  const item = element.closest(".element");
  item.remove();
}

function addInitialElements() {
  initialCards.forEach((item) =>
    addElement(createElement(item.name, item.link))
  );
}
