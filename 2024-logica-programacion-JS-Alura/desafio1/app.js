alert("Bienvenid@ a nuestro sitio web");

let nombre = prompt("Ingrese su nombre");
let edad = prompt("Ingrese su edad");
//let numeroDeVentas = 50;
//let saldoDisponible = 1000;

let mensajeDeError =("¡Error! Completa todos los campos");
alert (mensajeDeError);


if (edad >= 18){
    alert("Podes sacar tu licencia de conducir");
}else{
    alert("No estás apto para tu licencia de conducir");
}