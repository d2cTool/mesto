export default class Section {
  constructor({ items, renderer }, containerSelector) {
    this._items = items;
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

  renderItems() {
    this.clear();
    this._items.forEach((item) => this.addItem(item));
  }
}
