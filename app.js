let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

function AsignarTextoElemento (elemento,texto){
    let elementoHTML = document.querySelector(elemento); // titulo una caja que tiene sus elementos 
    elementoHTML.innerHTML = texto;
    return;
}
function verificarIntento () {
   let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);
   
   
    if (numeroDeUsuario === numeroSecreto) {
        AsignarTextoElemento("p", `Acertaste el número en ${intentos} ${(intentos === 1) ? "vez" : "veces" }`);
        document.getElementById("reiniciar").removeAttribute("disabled")
    } else{
        // usuario no acerto 
        if (numeroDeUsuario > numeroSecreto) {
            AsignarTextoElemento("p", "El número secreto es menor");
        } else {
            AsignarTextoElemento("p", "El número secreto es mayor");
        }
        intentos++;
        limpiarCaja();
    }
    return; 
}

function limpiarCaja(){
    document.querySelector("#valorUsuario").value = " ";
}
function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    
    if(listaNumerosSorteados.length == numeroMaximo){
        AsignarTextoElemento("p","ya se sortearon todos los numeros posibles")
    }else{
        if (listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado
        }

    }
       
}

function condicionesIniciales(){
    AsignarTextoElemento("h1","Juego Del Número Secreto");
    AsignarTextoElemento("p",`Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego() {
    limpiarCaja();
    condicionesIniciales();
    document.querySelector(`#reiniciar`).setAttribute("disabled" , "true");
}

condicionesIniciales();