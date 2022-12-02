"use strict";

//Tabla con id="age-table
let table = document.getElementById('age-table')

// Todos los elementos `label` dentro de esa tabla
table.getElementsByTagName('label')

//El primer td en la tabla con Age
table.rows[0].cells[0]

// Formulario con name="search"
//utilizando el formulario especifico
document.querySelector('form[name="search"]')

//Primer input en el formulario.
form.getElementsByTagName('input')[0]

//Último input en el formulario.
// encontrar todos los input
let inputs = form.querySelectorAll('input') 
// Obtenemos el último
inputs[inputs.length-1] 