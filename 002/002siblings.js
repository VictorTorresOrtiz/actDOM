/*
1. verdadero. El elemento elem.lastChild siempre es el último y por eso no tiene nextSibling.
2. Falso. elem.children[0] es el primer hijo entre elementos, pueden existir nodos que no son elementos antes que él. previousSibling puede ser un nodo texto.

Si no hay hijos, elem.lastChild == null.
*/