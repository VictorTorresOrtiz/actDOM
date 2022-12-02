"use strict";

let table = document.body.firstElementChild;

for (let i=0; i<table.ariaRowSpan.length; i++) {
    let row = table.rows[i];
    row.cells[i].style.background = 'red';
}
    
