export default class Section {
  constructor({ items, renderer }, cardContainer) {
    this._items = items;
    this._renderer = renderer;
    this._cardContainer = cardContainer;
  }
  /*
  renderer = (items, cardListEl) => {
    const card = new Card(items, '#card');

    cardListEl.prepend(card.getView());
  };
*/
  renderItems() {
    this._items.forEach((item) => this._renderer(item));
  }

  addItem(item) {
    this._cardContainer.prepend(item);
  }
}
