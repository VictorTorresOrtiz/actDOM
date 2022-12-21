"use strict"
let body = document.body;
body.innerHTML = "<!--" + body.tagName + "-->";
alert( body.firstChild.data ); // ¿qué hay aquí? = <!--body--> por que body.inner = body.tagName y esté esta comentado