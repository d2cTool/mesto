// selectors
const editButtonSelector = document.querySelector(".profile__edit-button");
const closeButtonSelector = document.querySelector(".popup__close-button");
const addButtonSelector = document.querySelector(".profile__add-button");

const profileTitleSelector = document.querySelector(".profile__title");
const profileSubtitleSelector = document.querySelector(".profile__subtitle");

const popupSelector = document.querySelector(".popup_type_profile");
const popupFormSelector = popupSelector.querySelector(".popup__form");
const nameInputSelector = popupFormSelector.querySelector("#nameInput");
const jobInputSelector = popupFormSelector.querySelector("#jobInput");

const elementTemplate = document.querySelector("#element").content;
const elementsSelector = document.querySelector(".elements");

const previewPopupSelector = document.querySelector(".popup_type_preview");
const previewPopupPhotoSelector =
  previewPopupSelector.querySelector(".popup__photo");
const previewPopupCaptionSelector =
  previewPopupSelector.querySelector(".popup__caption");
const previewPopupCloseButtonSelector = previewPopupSelector.querySelector(
  ".popup__close-button"
);

const cardPopupSelector = document.querySelector(".popup_type_card");
const cardPopupFormSelector = cardPopupSelector.querySelector(".popup__form");
const cardPopupFormNameInputSelector =
  cardPopupFormSelector.querySelector("#placeNameInput");
const cardPopupFormLinkInputSelector =
  cardPopupFormSelector.querySelector("#linkInput");
const cardPopupCloseButtonSelector = cardPopupSelector.querySelector(
  ".popup__close-button"
);

//const deleteButtonSelector = document.querySelector(".element__delete-button");

// listener functions
const showPopupFunction = () => {
  popupSelector.classList.add("popup_opened");
  nameInputSelector.value = profileTitleSelector.textContent;
  jobInputSelector.value = profileSubtitleSelector.textContent;
};
const hidePopupFunction = () => popupSelector.classList.remove("popup_opened");
const submitPopupFormHandler = (evt) => {
  evt.preventDefault();

  profileTitleSelector.textContent = nameInputSelector.value;
  profileSubtitleSelector.textContent = jobInputSelector.value;

  popupSelector.classList.remove("popup_opened");
};

// added listeners
editButtonSelector.addEventListener("click", showPopupFunction);
closeButtonSelector.addEventListener("click", hidePopupFunction);
previewPopupCloseButtonSelector.addEventListener("click", () =>
  previewPopupSelector.classList.remove("popup_opened")
);

popupFormSelector.addEventListener("submit", submitPopupFormHandler);

addButtonSelector.addEventListener("click", () =>
  cardPopupSelector.classList.add("popup_opened")
);

cardPopupFormSelector.addEventListener("submit", (evt) => {
  evt.preventDefault();
  addElement(
    createElement(
      cardPopupFormNameInputSelector.value,
      cardPopupFormLinkInputSelector.value
    )
  );
});

cardPopupCloseButtonSelector.addEventListener("click", () =>
  cardPopupSelector.classList.remove("popup_opened")
);

window.addEventListener("load", (e) => addInitialElements());

function createElement(name, link) {
  const element = elementTemplate.querySelector(".element").cloneNode(true);

  const titleSelector = element.querySelector(".element__title");
  const photoSelector = element.querySelector(".element__photo");

  titleSelector.textContent = name;
  photoSelector.src = link;

  return element;
}

function addElement(element) {
  elementsSelector.prepend(element);
  element
    .querySelector(".element__delete-button")
    .addEventListener("click", (e) => removeElement(e.target));
  element
    .querySelector(".element__like-button")
    .addEventListener("click", (e) => likeElement(e.target));
  element
    .querySelector(".element__photo")
    .addEventListener("click", (e) => previewElement(e.target));
}

function previewElement(element) {
  previewPopupSelector.classList.add("popup_opened");
  previewPopupCaptionSelector.textContent = element
    .closest(".element")
    .querySelector(".element__title").textContent;
  previewPopupPhotoSelector.src = element.src;
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
