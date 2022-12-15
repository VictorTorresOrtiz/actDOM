"use strict"

let sortedRows = Array.from(tabla.tBodies[0].rows) // Obtengo todas las etiquetas <tr></tr> de tbody
.sort((rowA, rowB) => rowA.cells[0].innerHTML.localeCompare(rowB.cells[0].innerHTML)); // Las ordeno teniendo en cuenta el campo de nombre

tabla.tBodies[0].append(...sortedRows); //Utilizando .append introduzco todos los nodos por su orden correcto

