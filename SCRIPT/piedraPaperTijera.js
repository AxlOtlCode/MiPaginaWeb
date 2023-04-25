/*entrada de opciones*/
const PiedraOpcion = document.getElementById("piedra");
const PapelOpcion = document.getElementById("papel");
const TijeraOpcion = document.getElementById("tijera");

/*entrada del resultado*/ 
const ResultadoJuego = document.getElementById("resultado")

//inicia el juego

PiedraOpcion.addEventListener("click", () =>{
    iniciarjuego('piedra');
});

PapelOpcion.addEventListener("click", () =>{
    iniciarjuego('papel');
});

TijeraOpcion.addEventListener("click", () =>{
    iniciarjuego('tijera');
});

function iniciarjuego(opcion){
    //PC
    const movPC = movimientoPc();
    //USUARIO
    const movUsuario = opcion;
    //COMPROVACIÓN
    const comp = comparacion(movPC, movUsuario);
    //RESULTADO
    if (comp == 1) {
        ResultadoJuego.innerHTML = "Usuario elige "+ movUsuario + " <br><br> Pc elige "+ movPC+ "<br><br><br>  <span class='ganador'> ¡Tu pierdes! </span><br><br><br> "   
    }
    if (comp == 2) {
        ResultadoJuego.innerHTML = "Usuario elige "+ movUsuario + " <br><br> Pc elige "+ movPC+ "<br><br><br>  <span class='ganador'> ¡Tu ganas! </span><br><br><br> "   
    }
    if (comp == 3) {
        ResultadoJuego.innerHTML = "Usuario elige "+ movUsuario + " <br><br> Pc elige "+ movPC+ "<br><br><br>  <span class='ganador'> ¡Empate! </span><br><br><br> "   
    }
}

function movimientoPc(){
    const opciones = ['piedra','papel','tijera'];
    const random = Math.floor(Math.random()*3);
    const mov = opciones [random];
    return (mov);
}

function comparacion(pc, usuario){
    switch (pc+usuario) {
        case 'piedratijera':
        case 'papelpiedra':
        case 'tijerapapel':
            return 1;//gana
        case 'tijerapiedra':
        case 'piedrapapel':
        case 'papeltijera':
            return 2;//pierde
        case 'piedrapiedra':
        case 'papelpapel':
        case 'tijeratijera':
            return 3;//empate
        
    }
}