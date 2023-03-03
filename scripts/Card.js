const closeModalByEscape = (evt) => {
  const escapeKey = 27;
  if (evt.keyCode === escapeKey) {
    const openedModal = document.querySelector('.modal_opened');
    closeModal(openedModal);
  }
};

const closeModal = (modal) => {
  modal.classList.remove('modal_opened');
  closeModalKeyDown();
};

const closeModalKeyDown = () => {
  document.removeEventListener('keydown', closeModalByEscape);
};

class Card {
  constructor(data, cardSelector) {
    this._name = data.name;
    this._link = data.link;

    this._cardSelector = cardSelector;
  }
  _setEventListeners() {
    this._element
      .querySelector('.card__like-button')
      .addEventListener('click', () => this._handleLikeIcon);

    this._element
      .querySelector('.card__delete-button')
      .addEventListener('click', () => this._handleDeleteCard);

    this._element
      .querySelector('.card__image')
      .addEventListener('click', () => this._handlePreviewPicture);
  }

  _handleLikeIcon() {
    this._element
      .querySelector('.card__like-button')
      .classList.toggle('like-button__selected');
  }

  _handleDeleteCard() {
    this._element
      .querySelector('.card__delete-button')
      .closest('.card')
      .remove();
  }

  _handlePreviewPicture() {
    modalImageEL.src = this._link;
    modalImageEL.alt = this._name;
    modalTitleEL.textContent = this._name;

    openModal(modalImage);
  }

  _getTemplate() {
    return document
      .querySelector(this._cardSelector)
      .content.querySelector('.card')
      .cloneNode(true);
  }

  getView() {
    this._element = this._getTemplate();

    this._element.querySelector('.card__image').src = this._link;
    this._element.querySelector('.card__title').textContent = this._name;

    this._setEventListeners();

    return this.element;
  }
}

export default Card;
