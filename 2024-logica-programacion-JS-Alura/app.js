//Variables
let numeroSecreto = Math.floor(Math.random()*10)+1;
let numeroUsuario = 0;
let intentos = 1;
//let palabraVeces = "vez";
let maximosIntentos = 5;

//console.log(numeroSecreto);


while(numeroUsuario != numeroSecreto){

    let numeroUsuario = parseInt(prompt("Me indicas un número entre 1 y 10 por favor: "));

    console.log(typeof(numeroUsuario));

    if (numeroUsuario ==  numeroSecreto){
        //Acertamos, fue verdadera la condicion
        alert(`Acertaste, el numero es: ${numeroUsuario}, lo hiciste en ${intentos} ${intentos == 1 ? `vez` : `veces`}` );
    }else{
        if(numeroUsuario > numeroSecreto){
            alert("El numero secreto es menor");
        }else{
            alert("El numero secreto es mayor");
        }
        intentos++;
    
        //Incrementa el contador cuando no acierta
        //intentos = intentos + 1;
        //intentos += 1;

        //palabraVeces = "veces";

        if(intentos > maximosIntentos){
            alert(`Llegaste al maximo de ${maximosIntentos} intentos`);
            break;
        }
        //La condicion no se cumplió
        //alert("No acertaste el numero");
    }
}