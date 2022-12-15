"use strict";
let ul = document.createElement('ul'); //Hacemos lista UL
document.body.append(ul);

while (true) {
  let data = prompt("Ingresa el texto para nombrar un item", "");

  if (!data) {
    break;
  }

  let li = document.createElement('li');
  li.textContent = data;
  ul.append(li);
}
