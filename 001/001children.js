"use strict"

//¿El nodo <div> del DOM?*/
//como solo hay un div podemos entrar por la etiqueta devolvendo un array de un solo elemento
let div = document.getElementsByTagName("div");
alert(div[0].textContent);

//¿El nodo <ul> del DOM?
let ul = document.getElementsByTagName("ul");
alert(ul[0].textContent);

//El segundo <li> (con Peter Parker)?
//Li el último hijo del ul
let li = ul[0].lastElementChild;
alert(li.textContent);