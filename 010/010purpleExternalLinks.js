"use strict";

//Declarar los links y sacar etiqueta a
let links = document.querySelectorAll('a');

for (let link of links) {
  let href = link.getAttribute('href');
  if (!href) continue; // Si nada

  if (!href.includes('://')) continue; // Si no tiene HTTP o HTTPS

  if (href.startsWith('http://internal.com')) continue; // Comienza por internal HTTP

  link.style.color = 'purple';
}