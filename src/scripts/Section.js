import Card from './Card.js';

export default class Section {
  constructor(items, renderer) {
    this._items = items;
    this._renderer = renderer;
  }

  renderer = (items, cardListEl) => {
    const card = new Card(items, '#card');

    cardListEl.prepend(card.getView());
  };
}
