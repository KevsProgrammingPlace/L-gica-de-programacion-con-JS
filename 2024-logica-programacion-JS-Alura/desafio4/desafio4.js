//EJERCICIO1//
/*Crea un programa que utilice console.log para mostrar un mensaje de bienvenida.
console.log("Bienvenido a la consola :)");*/

//====================================================================================//

//EJERCICIO2//
//Crea una variable llamada "nombre" y asígnale tu nombre. 
//Luego, utiliza console.log para mostrar el mensaje "¡Hola, [tu nombre]!" en la consola del navegador.

/*let nombre = "Kevin";
console.log(`¡Hola ${nombre}!`);*/

//====================================================================================//

//EJERCICIO3//
//Utiliza prompt y haz la siguiente pregunta: ¿Cuál es el lenguaje de programación que más te gusta?. 
//Luego, almacena la respuesta en una variable y muestra la respuesta en la consola del navegador.

/*let preguntaUsuario = prompt("¿Cuál es tu lenguaje de progrmación que más te gusta?");
console.log(preguntaUsuario);*/

//====================================================================================//

//EJERCICIO4//
//Crea una variable llamada "valor1" y otra llamada "valor2", asignándoles valores numéricos de tu elección.
// Luego, realiza la suma de estos dos valores y almacena el resultado en una tercera variable llamada "resultado". Utiliza
//console.log para mostrar el mensaje "La suma de [valor1] y [valor2] es igual a [resultado]." en la consola.

/*let valor1 = 3;
let valor2 = 2;
let resultado = valor1 + valor2;

console.log(`La suma de ${valor1} y ${valor2} es igual a ${resultado}`);*/

//====================================================================================//

//EJERCICIO5//
//Crea una variable llamada "valor1" y otra llamada "valor2", asignándoles valores numéricos de tu elección. Luego,
//realiza la resta de estos dos valores y almacena el resultado en una tercera variable llamada "resultado".
//Utiliza console.log para mostrar el mensaje "La diferencia entre [valor1] y [valor2] es igual a [resultado]." en la consola.

/*let valor1 = 10;
let valor2 = 5;
let resultado = valor1 - valor2;

console.log(`la diferencia entre ${valor1} y ${valor2} es: ${resultado}`);*/

//====================================================================================//
//EJERCICIO6//
//Pide al usuario que ingrese su edad con prompt. Con base en la edad ingresada,
//utiliza un if para verificar si la persona es mayor o menor de edad y muestra un mensaje apropiado en la consola.

/*let edadUsuario = parseInt(prompt("Ingrese su edad: "));

if (edadUsuario >= 18 ){
    console.log("¡MAYOR DE EDAD!")
}else{
    console.log("MENOR DE EDAD ¡ABSTENERSE!")
}*/

//====================================================================================//
//EJERCICIO7//
//Crea una variable "numero" y solicita un valor con prompt.
// Luego, verifica si es positivo, negativo o cero utilizando un if-else y muestra el mensaje correspondiente.

/*let numero = parseInt(prompt("Ingrese un número:" ));

if (numero >= 0){
    console.log("NUMERO POSITIVO");
}else{
    console.log("NUMERO NEGATIVO");
}*/
//====================================================================================//

//EJERCICIO8//
//Utiliza un bucle while para mostrar los números del 1 al 10 en la consola.

/*let cont = 0;
while(cont < 11){
    console.log("Ejecutando iteracion numero: " + cont);
    cont ++;
}*/
//====================================================================================//

//EJERCICIO9//
//Crea una variable "nota" y asígnale un valor numérico.
//Utiliza un if-else para determinar si la nota es mayor o igual a 7 y muestra "Aprobado" o "Reprobado" en la consola.

/*let nota = 4;

if(nota >=7){
    console.log("Aprobado");
}else if(nota == 6 ){
    console.log("Reprobado");
}else{
    console.log("Reprobado");
}*/
//====================================================================================//
//EJERCICIO10//

//Utiliza Math.random para generar cualquier número aleatorio y muestra ese número en la consola.

let numeroRandom = Math.floor(Math.random()*10)+1;

console.log(numeroRandom);