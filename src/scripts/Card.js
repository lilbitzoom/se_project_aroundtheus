import Popup from './Popup.js';

class Card {
  constructor(data, cardSelector) {
    this._name = data.name;
    this._link = data.link;

    this._cardSelector = cardSelector;
  }

  _setEventListeners() {
    this._likeButton.addEventListener('click', this._handleLikeIcon);

    this._deleteButton.addEventListener('click', this._handleDeleteCard);

    this._cardImage.addEventListener('click', this._handlePreviewPicture);
  }

  _handleLikeIcon = () => {
    this._element
      .querySelector('.card__like-button')
      .classList.toggle('like-button__selected');
  };

  _handleDeleteCard = () => {
    this._element.remove();

    this._element = null;
  };

  _handlePreviewPicture = () => {
    this._modalImage.querySelector('.modal__image').src = this._link;
    this._modalImage.querySelector('.modal__image').alt = this._name;
    this._modalImage.querySelector('.modal__image-title').textContent =
      this._name;

    const popup = new Popup({ popupSelector: '#image_pop-up' });
    popup.open(this._modalImage);
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

export default Card;
