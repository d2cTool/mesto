export default class Section {
  constructor(renderer, containerSelector) {
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
  }

  addItem(item) {
    const cardElement = this._renderer(item);
    this._container.prepend(cardElement);
  }

  clear() {
    this._container.innerHTML = "";
  }

  renderItems(items) {
    this.clear();
    items.forEach((item) => this.addItem(item));
  }
}
