"use strict"

//PRIMERA SOLUCIÓN UTILIZANDO DOM
let data = {
    "Fish": {
      "trout": {},
      "salmon": {}
    },

    "Tree": {
      "Huge": {
        "sequoia": {},
        "oak": {}
      },
      "Flowering": {
        "apple tree": {},
        "magnolia": {}
      }
    }
  };

  //Creamos funcion createTree
  function createTree(container, obj) {
    container.append(createTreeDom(obj));
  }

//Funcion createTree en DOM (Si no hay hijos = undefined. UL no se crear)
  function domTree(obj) {
    if (!Object.keys(obj).length) return;

    let ul = document.createElement('ul');

    for (let key in obj) {
      let li = document.createElement('li');
      li.innerHTML = key;

      let childrenUl = domTree(obj[key]);
      if (childrenUl) {
        li.append(childrenUl);
      }

      ul.append(li);
    }

    return ul;
  }

  let container = document.getElementById('container');
  createTree(container, data);

  //SEGUNDA OPCIÓN MEDIANTE INNER HTML
 //hacer