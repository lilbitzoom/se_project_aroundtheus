const profileContainer = document.querySelector('.profile__description');
const profileTitle = profileContainer.querySelector('.profile__title');
const profileName = profileTitle.querySelector('.profile__name');
const profileSubheader = profileContainer.querySelector('.profile__subheader');
const profileEditButton = profileTitle.querySelector('.profile__edit-button');
const modal = document.querySelector('.modal');

function addModalOpened(modal) {
  modal.classList.add('modal_opened');
  console.log(modal);
}

profileEditButton.addEventListener('click', function () {
  addModalOpened(modal);
});
