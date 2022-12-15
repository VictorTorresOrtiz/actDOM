"use strict"


function crearCalendario(elem, year, month) {

    let mon = month - 1; // STACKOVERFLOW los meses en JS funcionan desde 0 hasta 11 
    let d = new Date(year, mon);

    let table = '<table></table><tr><th>MO</th><th>TU</th><th>WE</th><th>TH</th><th>FR</th><th>SA</th><th>SU</th></tr><tr>';

    // Desde lunes hasta primero de mes
    for (let i = 0; i < obtenerDia(d); i++) {
      table += '<td></td>';
    }

    // del 1 al 31, si es domingo nueva linea
    while (d.obtenerMes() == mon) {
      table += '<td>' + d.obtenerFecha() + '</td>';

      if (obtenerDia(d) % 7 == 6) { 
        table += '</tr><tr>';
      }

      d.establecerFecha(d.obtenerFecha() + 1);
    }

    // espacios después del último día del mes hasta completar la última línea
    if (obtenerDia(d) != 0) {
      for (let i = obtenerDia(d); i < 7; i++) {
        table += '<td></td>';
      }
    }

    table += '</tr></table>';
    elem.innerHTML = table;
    //Tabla cerrada
  }

  function obtenerDia(date) { // Obtener numero desde Lunes hasta Domingo es decir de 0 a 6
    let day = date.obtenerDia();
    if (day == 0) day = 7; // Si es domingo = 0
    return day - 1;
  }

  crearCalendario(calendar, 2012, 9); // Crear calendario