

import "./style.css";
import "./js/Card.js";
import "./js/CardList.js";
import "./js/API.js";
import "./js/FormValidator.js";
import "./js/Popup.js";
import "./js/UserInfo.js";

export const listContainer = document.querySelector('.places-list');
export const popupEditButton = document.querySelector('.popup__edit-button'); 
import {Api} from './js/API.js';
import {Card} from './js/Card.js';
import {CardList} from './js/CardList.js';
import {FormValidator} from './js/FormValidator.js';
import {Popup} from './js/Popup.js';
import {UserInfo} from './js/UserInfo';
export {  editForm,  editButton, closeEditForm, formEdit,  nameValueForm, jobValueForm};



const newForm = document.forms.new;
const editForm = document.querySelector('.popup__form-edit');


const editButton = document.querySelector('.user-info__edit-button');
const closeEditForm = document.querySelector('#popup__close-edit');
const formEdit = document.forms.edit;


let nameValueForm = '';
let jobValueForm = '';  


 const api = new Api({
  headers: {
    authorization: '6af9b0d5-fde9-4d91-8997-d01e8790c6cd',
    'Content-Type': 'application/json'
  }
});

const card = new Card();
const cardList = new CardList(card, api);
export const validator = new FormValidator();
export const popup = new Popup();
export const userInfo = new UserInfo(
  document.querySelector(".user-info__name"),
  document.querySelector(".user-info__job"),
  document.querySelector('.user-info__photo'),
  formEdit.elements.nameUser,
  formEdit.elements.jobUser,
  nameValueForm,
  jobValueForm,
  api
);

//userCard
function inputUserCard(event) {
  const name = event.currentTarget.elements.name;
  const img = event.currentTarget.elements.link;

  if (name.value.length === 0 || img.value.length === 0) {
    document.querySelector('.popup__card-button').setAttribute('disabled', '');

  }
  else {
    document.querySelector('.popup__card-button').removeAttribute('disabled');
  }


}
function addCardUser(event) {

  event.preventDefault();
  const imageUrl = newForm.elements.link.value;
  const cardName = newForm.elements.name.value;
  if (imageUrl.length !== 0 && cardName.length !== 0) {

    cardList.addCard(imageUrl, cardName);

    popup.toggleNewPopup();
  }
  return [imageUrl, cardName];

}
newForm.addEventListener('input', inputUserCard);
newForm.addEventListener('submit', addCardUser);

cardList.getApi();
cardList.addButtons();
userInfo.infoApi();
userInfo.infoEditListener();


editForm.addEventListener('input', validator.setEventListeners);

formEdit.addEventListener("submit", function (event) {
  event.preventDefault();
  userInfo.setUserInfoEdit();
  userInfo.inputInfoApi();
  userInfo.setUserInfoEdit();


});

 


