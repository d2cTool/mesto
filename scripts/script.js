// selectors
let editButtonSelector = document.querySelector('.profile__edit-button');
let closeButtonSelector = document.querySelector('.popup__close-button');

let profileTitleSelector = document.querySelector('.profile__title');
let profileSubtitleSelector = document.querySelector('.profile__subtitle');

let popupSelector = document.querySelector('.popup');
let popupFormSelector = document.querySelector('.popup__form');
let nameInputSelector = popupFormSelector.querySelector('#nameInput');
let jobInputSelector = popupFormSelector.querySelector('#jobInput');

// listener functions
let showPopupFunction = () =>
{
  popupSelector.classList.add('popup_opened');
  nameInputSelector.value = profileTitleSelector.textContent;
  jobInputSelector.value = profileSubtitleSelector.textContent;
}
let hidePopupFunction = () => popupSelector.classList.remove('popup_opened');
let submitPopupFormHandler = (evt) =>
{
  evt.preventDefault();

  profileTitleSelector.textContent = nameInputSelector.value;
  profileSubtitleSelector.textContent = jobInputSelector.value;

  popupSelector.classList.remove('popup_opened');
};

// added listeners
editButtonSelector.addEventListener('click', showPopupFunction);
closeButtonSelector.addEventListener('click', hidePopupFunction);
popupFormSelector.addEventListener('submit', submitPopupFormHandler);

