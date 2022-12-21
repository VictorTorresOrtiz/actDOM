"use strict"

let itemLista = document.querySelectorAll('.item');

    for(let item of itemLista) {
    item.insertAdjacentHTML("afterbegin", '<button class="eliminar">[Eliminar]</button>'); //Despu8es de la operación aparece el botón
    
    }