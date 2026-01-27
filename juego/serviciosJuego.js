obtenerAleatorio=function(){
    let aleatorio=Math.random(3);
    let Numero = (aleatorio * 3) + 1;
    let entero = parseInt(Numero);
    console.log(entero)
    return entero;
}

generarElemento=function(){
    let resultado=obtenerAleatorio();
    let respuesta = "";
    if (resultado == 1){
        respuesta = "PIEDRA";
    }else if(resultado == 2){
        respuesta = "PAPEL";
    }else if(resultado == 3){
        respuesta = "TIJERA";
    }
    return respuesta;
}

determinarGanador=function(eleccionJugador1,eleccionJugador2){
    if ( eleccionJugador1 == eleccionJugador2){
        return 0;
    }
    if (eleccionJugador1 == "PAPEL" && eleccionJugador2 == "PIEDRA"){
        console.log(eleccionJugador1)
        return 1;
    }
    if (eleccionJugador1 == "PIEDRA" && eleccionJugador2 == "TIJERA"){
        return 1;
    }
    if (eleccionJugador1 == "TIJERA" && eleccionJugador2 == "PAPEL"){
        return 1;
    }
    console.log(eleccionJugador2)
    return 2;
}