"use strict"

function showNotification({top = 0, right = 0, className, html}) {

    //Creo el div para la notificación
    let notification = document.createElement('div');
    notification.className = "notification";
    if (className) {
      notification.classList.add(className); 
    }

    //Estilos
    notification.style.top = top + 'px';
    notification.style.right = right + 'px';

    notification.innerHTML = html;
    document.body.append(notification); //.append para odenar nodos
    setTimeout(() => notification.remove(), 1500); //borrar en 1.5 SeguNDOS
  }

  // Mostrar Notificacion
  let i = 1; 
  setInterval(() => {
    showNotification({
      top: 10,
      right: 10,
      html: 'KLK MANIN ' + i++, // incrementamos i para saber numero de notificaciones 
      className: "welcome"
    });
  }, 2000); 