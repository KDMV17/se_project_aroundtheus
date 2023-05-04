const initialCards = [
  {
    name: "Yosemite Valley",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/yosemite.jpg",
  },

  {
    name: "Lake Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lake-louise.jpg",
  },

  {
    name: "Bald Mountains",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/bald-mountains.jpg",
  },

  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/latemar.jpg",
  },

  {
    name: "Vanoise National Park",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/vanoise.jpg",
  },

  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lago.jpg",
  },
];

/* Elements */

//Edit button
const profileEditModal = document.querySelector("#profile-edit-modal");
const profileEditButton = document.querySelector("#profile-edit-button");
const profileEditCloseButton = profileEditModal.querySelector(".modal__close");

//Add button
const addNewCardButton = document.querySelector("#profile-add-button");
const profileAddModal = document.querySelector("#profile-add-modal");
const profileAddCloseButton = profileAddModal.querySelector(".modal__close");
const profileAddForm = profileAddModal.querySelector(".modal__form");

// Form Data
const profileTitle = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");
const profileTitleInput = document.querySelector("#edit-title-input");
const profileDescriptionInput = document.querySelector(
  "#edit-description-input"
);
const profileEditForm = profileEditModal.querySelector(".modal__form");

// Cards  Data
const cardListEl = document.querySelector(".gallery__cards");
const cardTemplate =
  document.querySelector("#card-template").content.firstElementChild;
const cardTitleInput = profileAddModal.querySelector(
  ".modal__input_type_title"
);
const cardUrlInput = profileAddModal.querySelector(".modal__input_type_url");

// // Preview Image

const modalImagePreview = document.querySelector("#modal-preview-image");
const modalImage = modalImagePreview.querySelector(".modal__image");
const modalCaption = modalImagePreview.querySelector(".modal__preview-caption");
const previewExitButton = modalImagePreview.querySelector(".modal__close");
let card = document.querySelector("#add-card-form");
card.reset();

/* Functions */

/////// CARD FUCTION ////////

function getCardElement(cardData) {
  const cardElement = cardTemplate.cloneNode(true);
  const cardImageEl = cardElement.querySelector(".card__image");
  const cardTitleEl = cardElement.querySelector(".card__title");

  cardImageEl.src = cardData.link;
  cardImageEl.alt = cardData.name;
  cardTitleEl.textContent = cardData.name;

  // Like heart
  const likeButton = cardElement.querySelector(".card__like-button");
  likeButton.addEventListener("click", () => {
    likeButton.classList.toggle("card__like-button_active");
  });

  // Trash can
  const cardDeleteButton = cardElement.querySelector(".card__delete-button");
  cardDeleteButton.addEventListener("click", () => {
    cardElement.remove();
  });

  cardImageEl.addEventListener("click", () => {
    openModal(modalImagePreview);
    modalImage.src = cardImageEl.src;
    modalImage.alt = cardImageEl.alt;
    modalCaption.textContent = cardTitleEl.textContent;
  });

  return cardElement;
}

///// Card Render

function renderCard(cardData, cardListEl) {
  const cardElement = getCardElement(cardData);
  cardListEl.prepend(cardElement);
}

///// Open and Close fuctions for modals

function openModal(modal) {
  modal.classList.add("modal_opened");
}

function closeModal(modal) {
  modal.classList.remove("modal_opened");
}

/* Function Handlers */

// Edit button
function handleProfileEditSubmit(e) {
  e.preventDefault();
  profileTitle.textContent = profileTitleInput.value;
  profileDescription.textContent = profileDescriptionInput.value;
  closeModal(profileEditModal);
}

function handleProfileAddSubmit(e) {
  e.preventDefault();
  const name = cardTitleInput.value;
  const link = cardUrlInput.value;
  renderCard({ name, link }, cardListEl);
  closeModal(profileAddModal);
}

initialCards.forEach((cardData) => renderCard(cardData, cardListEl));

/* Event Listeners */

// Edit button
profileEditButton.addEventListener("click", () => {
  profileTitleInput.value = profileTitle.textContent;
  profileDescriptionInput.value = profileDescription.textContent;
  openModal(profileEditModal);
});

profileEditCloseButton.addEventListener("click", () => {
  closeModal(profileEditModal);
});

profileEditForm.addEventListener("submit", handleProfileEditSubmit);

// Add button
addNewCardButton.addEventListener("click", () => {
  profileTitleInput.value = profileTitle.textContent;
  profileDescriptionInput.value = profileDescription.textContent;
  openModal(profileAddModal);
});

profileAddCloseButton.addEventListener("click", () =>
  closeModal(profileAddModal)
);
profileAddForm.addEventListener("submit", handleProfileAddSubmit);

previewExitButton.addEventListener("click", () => {
  closeModal(modalImagePreview);
});
