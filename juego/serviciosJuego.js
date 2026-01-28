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
        return 1;
    }
    if (eleccionJugador1 == "PIEDRA" && eleccionJugador2 == "TIJERA"){
        return 1;
    }
    if (eleccionJugador1 == "TIJERA" && eleccionJugador2 == "PAPEL"){
        return 1;
    }
    return 2;
}

generarRuta=function(nombre){
    
    let imagen = ""
    if (nombre == "PIEDRA"){
        imagen = "imagenes/piedra.jpg"

    }
    if (nombre == "PAPEL"){
        imagen ="imagenes/papel.jpg"
    }
    if (nombre == "TIJERA"){
        imagen ="imagenes/tijera.jpg"
    }
    mostrarImagen("imgSorpresa",imagen);

    let img = document.getElementById("imgSorpresa");
    img.src = imagen;
    img.style.width = "360px";
    img.style.height = "360px";

    return imagen;
}