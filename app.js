let numeroSecreto = 0;
let intentos = 0;
let ListanumerosSorteados = [];
numeroMaximo = 10;


function intentoUsuario() {
    let numeroUsuario = parseInt(document.getElementById('intentoUsuario').value);
    //console.log(numeroUsuario);
    
    
    if (numeroSecreto === numeroUsuario){
        Elementos('p', `Acertaste el número en ${intentos} ${(intentos>1) ? 'veces' : 'vez'} `);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }
    
    else{
        if (numeroUsuario>numeroSecreto){
            Elementos('p', 'El numero es menor');
        }
        else{
            Elementos('p', 'El número es mayor');
        }
    }
    intentos++;
    Limpiar();
    return;
}

function Limpiar(){
    document.querySelector('#intentoUsuario').value = ''; //funcion para limpiar input. #es para poner el id del input
}

function Elementos(parametro1,parametro2){
    let elementoHtml = document.querySelector(parametro1);
    elementoHtml.innerHTML = parametro2;
    return;
}

function generarNumeroSecreto(){
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    //si el numero generado está incluido en la lista.
    console.log(numeroGenerado);
    console.log(ListanumerosSorteados);

    if(ListanumerosSorteados.length == numeroMaximo){
        alert("se sortearon todos los numeros");
    }
    else{
        if (ListanumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();
        }
        else{
            ListanumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        } 
   
    } 
}

function condicionesIniciales() {
    Elementos('h1', 'Juego secreto'); //para que vuelvan a aparecer los textos iniciales
    Elementos('p', `Escoge un numero del 1 al ${numeroMaximo}`);//para que vuelvan a aparecer los textos iniciales
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego(){
    Limpiar(); //para limpiar caja/campo de input
    condicionesIniciales();
    document.querySelector('#reiniciar').setAttribute('disabled', true);
}

condicionesIniciales();




