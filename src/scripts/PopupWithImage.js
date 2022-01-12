import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(popupSelector, { photoSelector, captionSelector }) {
    super(popupSelector);

    this._previewPopupPhoto = this._popup.querySelector(photoSelector);
    this._previewPopupCaption = this._popup.querySelector(captionSelector);
  }

  open(title, photo) {
    this._previewPopupCaption.textContent = title;
    this._previewPopupPhoto.src = photo;
    this._previewPopupPhoto.alt = title;

    super.open();
  }
}
