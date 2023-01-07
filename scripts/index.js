const initialCards = [
  {
    name: 'San Francisco',
    link: 'https://images.unsplash.com/photo-1670808542784-d8a43a98f35a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=768&q=80',
  },
  {
    name: 'Jurassic Coast',
    link: 'https://images.unsplash.com/photo-1670793030150-75600982af60?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=670&q=80',
  },
  {
    name: 'Stavanger',
    link: 'https://images.unsplash.com/photo-1670500557067-3e2b3dde6625?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
  },
  {
    name: 'New York',
    link: 'https://images.unsplash.com/photo-1670477293988-e76875167eec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
  },
  {
    name: 'Cottonwood Canyon',
    link: 'https://images.unsplash.com/photo-1670509917257-ea50fa82f5fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1065&q=80',
  },
  {
    name: 'Base Harbor',
    link: 'https://images.unsplash.com/photo-1670349928042-519fee6e11de?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=770&q=80',
  },
];
//Variable Declarations

const cardListEl = document.querySelector('.cards__list');
const initialCardsLength = initialCards.length;
const cardTemplate = document.querySelector('#card').content;

//Fucntion to present cards based off of initialCards array
function getCardElement(cardData) {
  const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
  const cardImageEL = cardElement.querySelector('.card__image');
  const cardTitleEl = cardElement.querySelector('.card__title');
  cardImageEL.src = cardData.link;
  cardImageEL.alt = cardData.name;
  cardTitleEl.textContent = cardData.name;
  return cardElement;
}

initialCards.forEach((cardData) => {
  cardElement = getCardElement(cardData);
  cardListEl.prepend(cardElement);
});
