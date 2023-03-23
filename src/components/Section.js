export default class Section {
  constructor({ items, renderer }, cardContainer) {
    this._items = items;
    this._renderer = renderer;
    this._cardContainer = cardContainer;
  }

  renderItems() {
    this._items.forEach((item) => this._renderer(item));
  }

  addItem(item) {
    this._cardContainer.prepend(item);
  }
}
