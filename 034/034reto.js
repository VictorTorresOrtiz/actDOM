//Para los estilos de margenes etc
let x = 0;
let p = -10;
let i = 1;


let dom = document.getElementsByClassName('item');
let confr = (dom.length - 3)*(-350);
let confl = 0;
//MOver a derecha
document.getElementById("l").addEventListener("click", function(){
       x += 350;
       if (x > confl){x = confr - 350}else{
    document.getElementById("move").style.marginLeft = x + "px";}
});
//Mover para Izquierda
document.getElementById("r").addEventListener("click", function(){
    x += -350;
    p += -10;
    if (x < confr){x = 350}else{
    document.getElementById("move").style.marginLeft = x + "px";}
});