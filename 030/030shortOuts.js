"use strict"

runOnKeys(() => alert("¡Hola!"), "KeyQ", "KeyW");

//Letras guardadas en array 
let userKey = [];
function runOnKeys(funcion, ...codes) {
  document.addEventListener("keydown", function (event) {
    userKey.push(event.code);

    //Si no esta las dos letras salimos
    for (let i = 0; i < codes.length; i++) {
      if (!userKey.includes(codes[i])) {
        return false;
      }
    }
    // si estan vaciamos array
    funcion();
    userKey.splice(0, userKey.length);
  });

  //Utilizando la funcion detectKey detectamos latecla que el usuario a soltado para asi sacarla del array
  document.addEventListener("detectKey", function () {
    userKey.shift();
  });
}