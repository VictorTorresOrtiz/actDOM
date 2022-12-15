"use strict"

let ejecucionRelog;

//Establecer h m s 
function update() {
  let relog = document.getElementById('relog');
  let fecha = new Date();

  let hours = fecha.obtenerH();
  if (hours < 10) hours = '0' + hours;
  relog.children[0].innerHTML = hours;

  let minutes = fecha.obtenerM();
  if (minutes < 10) minutes = '0' + minutes;
  relog.children[1].innerHTML = minutes;

  let seconds = fecha.obtenerS();
  if (seconds < 10) seconds = '0' + seconds;
  relog.children[2].innerHTML = seconds;
}

function empezar() {
  // Restablecer intervalo del reloj y soobreescribir ejecucionRelog para no crear un bucle infinito
  if (!ejecucionRelog) {
    ejecucionRelog = setInterval(update, 1000);
  }
  update();
}

function parar() {
  clearInterval(ejecucionRelog);
  ejecucionRelog = null; // Borrar para decir que ha parado
}




