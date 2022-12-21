"use strict"

let genres = document.getElementById("genres");

//selectedIndex =  index de  opción seleccionada:
let seleccionada= genres.options[genres.selectedIndex];
alert("Value: " + selected.value + " Text: " + selected.text);

//Elemento option con valores y textos:
let classic = document.createElement("option");
classic.value = "classic";
classic.text = "Classic";

//Añadimos el classic al select
genres.appendChild(classic);
//Uktimo paso se selecciona y hacemos test
classic.seleccionada = true;
let seleccionada2 = genres.options[genres.selectedIndex];
alert("Value: " + seleccionada2.value + " Text: " + seleccionada2.text);