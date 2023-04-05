const initialCards = [
  {
    name: "Yosemite Valley",
    link: "./images/yosemite.jpg",
  },
  {
    name: "Lake Louise",
    link: "./images/lake-louise.jpg",
  },
  {
    name: "Bald Mountains",
    link: "./images/bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "./images/latemar.jpg",
  },
  {
    name: "Vanoise National Park",
    link: "./images/vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "./images/lago-di-braies.png",
  },
];

/* Elements */
const profileEditButton = document.querySelector("#profile-edit-button");
const profileEditModal = document.querySelector("#profile-edit-modal");
const profileEditCloseButton = profileEditModal.querySelector(".modal__close");
const profileTitle = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");
const profileTitleInput = document.querySelector("#profile-title-input");
const profileDescriptionInput = document.querySelector(
  "#profile-description-input"
);
const profileEditForm = profileEditModal.querySelector(".modal__form");

const cardListEl = document.querySelector(".gallery__cards");

const cardTemplate =
  document.querySelector("#card-template").content.firstElementChild;

/* Functions */
function closePopup() {
  profileEditModal.classList.remove("modal_opened");
}

function getCardElement(data) {
  // clone the template element with all its content and store it in a cardElement variable
  const cardElement = cardTemplate.cloneNode(true);

  // access the card title and image and store them in variables
  const cardImageEl = cardElement.querySelector(".card__image");
  const cardTitleEl = cardElement.querySelector(".card__title");

  // set the path to the image to the link field of the object
  cardImageEl.src = data.link;

  // set the image alt text to the name field of the object
  cardImageEl.alt = data.name;

  // set the card title to the name field of the object, too
  cardTitleEl.textContent = data.name;

  // return the ready HTML element with the filled-in data
  return cardElement;
}

/* Function Handlers */

function handleProfileEditSubmit(e) {
  e.preventDefault();
  profileTitle.textContent = profileTitleInput.value;
  profileDescription.textContent = profileDescriptionInput.value;
  closePopup();
}

/* Event Listeners */

profileEditButton.addEventListener("click", () => {
  profileTitleInput.value = profileTitle.textContent;
  profileDescriptionInput.value = profileDescription.textContent;
  profileEditModal.classList.add("modal_opened");
});

profileEditCloseButton.addEventListener("click", closePopup);

profileEditForm.addEventListener("submit", handleProfileEditSubmit);

initialCards.forEach((data) => {
  const cardElement = getCardElement(data);
  cardListEl.append(cardElement);
});
