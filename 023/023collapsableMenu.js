"use strict"

let menuElem = document.getElementById('menuDes');
let titleElem = menuElem.querySelector('.title');

titleElem.onclick = function() { //Onclick para abrir el menu
  menuElem.classList.toggle('open');
};