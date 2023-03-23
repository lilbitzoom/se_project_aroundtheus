export default class Card {
  constructor(data, cardSelector, handleCardClick) {
    this._name = data.name;
    this._link = data.link;

    this._cardSelector = cardSelector;

    this._handleCardClick = handleCardClick;
  }

  _setEventListeners() {
    this._likeButton.addEventListener('click', this._handleLikeIcon);

    this._deleteButton.addEventListener('click', this._handleDeleteCard);

    this._cardImage.addEventListener('click', () =>
      this._handleCardClick(this._name, this._link)
    );
  }

  _handleLikeIcon = () => {
    this._likeButton.classList.toggle('like-button__selected');
  };

  _handleDeleteCard = () => {
    this._element.remove();

    this._element = null;
  };

  _getTemplate() {
    return document
      .querySelector(this._cardSelector)
      .content.querySelector('.card')
      .cloneNode(true);
  }

  getView() {
    this._element = this._getTemplate();

    this._likeButton = this._element.querySelector('.card__like-button');
    this._deleteButton = this._element.querySelector('.card__delete-button');
    this._modalImage = document.querySelector('#image_pop-up');
    this._cardImage = this._element.querySelector('.card__image');

    this._cardImage.src = this._link;
    this._element.querySelector('.card__title').textContent = this._name;
    this._cardImage.alt = this._name;

    this._setEventListeners();
    return this._element;
  }
}
