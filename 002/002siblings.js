"use strict";

//1 Es nulo por que es IMPOSIBLE coger el ultimo hermado si no hay "NADA"
let elem = document.getElementById("item");
alert(elem.lastChild.nextSibling);


// 2 Ami me sale correcto pero buscando por internet he encontrado que es un error de JS
alert(elem.children[0].previousSibling);
