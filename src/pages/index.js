import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import * as utils from "../utils/constants.js";
import Section from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithConfirmation from "../components/PopupWithConfirmation.js";
import UserInfo from "../components/UserInfo.js";
import { api } from "../components/Api.js";

import "./index.css";

const previewPopup = new PopupWithImage(utils.previewPopupSelector, {
  photoSelector: utils.photoSelector,
  captionSelector: utils.captionSelector,
});
previewPopup.setEventListeners();

const confirmationPopup = new PopupWithConfirmation(
  utils.confirmationPopupSelector,
  (data) => api.deleteCard(data.id).then(() => {
    cardsList.removeItem(data.element);
    confirmationPopup.close();
  })
);
confirmationPopup.setEventListeners();

const cardPopup = new PopupWithForm(utils.cardPopupSelector, (data) =>
  api.postCard(data.name, data.link).then((data) => {
    cardsList.addItem(data);
    cardPopup.close();
  })
);
cardPopup.setEventListeners();
const cardPopupValidator = new FormValidator({
  ...utils.config,
  formSelector: utils.cardPopupSelector,
});
cardPopupValidator.enableValidation();

const profilePopup = new PopupWithForm(utils.profilePopupSelector, (values) => {
  profilePopup.renderLoading(true);
  api
    .patchUserInfo(values.name, values.description)
    .then((data) => userInfo.setUserInfo(data))
    .finally(() => {
      profilePopup.renderLoading(false);
      profilePopup.close();
    });
});
profilePopup.setEventListeners();
const profilePopupValidator = new FormValidator({
  ...utils.config,
  formSelector: utils.profilePopupSelector,
});
profilePopupValidator.enableValidation();

const avatarPopup = new PopupWithForm(utils.avatarPopupSelector, (data) => {
  avatarPopup.renderLoading(true);
  api
    .patchUserAvatar(data.link)
    .then(() => {
      const info = userInfo.getUserInfo();
      userInfo.setUserInfo({ ...info, avatar: data.link });
    })
    .finally(() => {
      avatarPopup.renderLoading(false);
      avatarPopup.close();
    });
});
avatarPopup.setEventListeners();
const avatarPopupValidator = new FormValidator({
  ...utils.config,
  formSelector: utils.avatarPopupSelector,
});
avatarPopupValidator.enableValidation();

const userInfo = new UserInfo(
  utils.profileTitleSelector,
  utils.profileSubtitleSelector,
  utils.profileAvatarIconSelector
);

const cardsList = new Section(
  (data) => createCardElement(data),
  utils.cardsSelector
);

utils.editButton.addEventListener("click", () => {
  profilePopupValidator.resetValidation();
  const info = userInfo.getUserInfo();
  utils.profileName.value = info.name;
  utils.profileJob.value = info.about;
  profilePopup.open();
});

utils.addButton.addEventListener("click", () => {
  cardPopupValidator.resetValidation();
  cardPopup.open("", "");
});

utils.avatarButton.addEventListener("click", () => {
  avatarPopupValidator.resetValidation();
  avatarPopup.open();
});

function createCardElement(data) {
  const info = userInfo.getUserInfo();
  const card = new Card(data, info, utils.cardTemplateSelector,
    (title, photo) => {
      previewPopup.open(title, photo);
    },
    (id, isLiked) => {
      if (isLiked)
        api.addLike(id);
      else
        api.removeLike(id);
    },
    (element, id) => {
      confirmationPopup.open({ element, id });
    }
  );
  return card.generateCard();
}

api.getUserInfo()
  .then((data) =>
    userInfo.setUserInfo(data))
  .then(() =>
    api.getInitialCards().then((data) => cardsList.renderItems(data)));

