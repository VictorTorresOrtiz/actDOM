"use strict"

let div = document.querySelector("div");
let textarea = null;

//creamos funcion cuando pulse el div
div.onclick = function () {
  //Creamos un text area despues lo remplazamos utilizando replaceWith
  textarea = document.createElement("textarea");
  textarea.placeholder = div.textContent;
  div.replaceWith(textarea);

  //Detectamos pulsar enter
  textarea.addEventListener("keydown", function (event) {
    if (event.key == "Enter") {
      send();
    }
  });

  //Cuando pierde el foco
  textarea.addEventListener("blur", function () {
    send();
  });
};

//Enviamos lo escrito pasando por el div y reemplazando e text area
function send() {
  div.innerHTML = textarea.value;
  textarea.replaceWith(div);
}