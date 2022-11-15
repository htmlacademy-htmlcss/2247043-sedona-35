document.querySelector(`.search-link`).addEventListener(`click`, function(evt){
  evt.preventDefault();
  document.querySelector(`.modal-container`).classList.remove(`modal-container-close`);
});

document.querySelector(`.modal-close`).addEventListener(`click`, function(evt){
  evt.preventDefault();
  document.querySelector(`.modal-container`).classList.add(`modal-container-close`);
});
