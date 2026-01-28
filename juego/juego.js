let puntosUsuario = 0;
let puntosComputadora = 0;



jugar=function(seleccionado){
    let Elemento = generarElemento();
    generarRuta(Elemento);
    let ganador = determinarGanador(seleccionado,Elemento);
    if (ganador == 0){
        mostrarTexto("lblRespuesta","EMPATE");
    } 
    if (ganador == 1){
        mostrarTexto("lblRespuesta","GANASTE LA PARTIDA");
        puntosUsuario = puntosUsuario +1;
        mostrarTexto("lblRespuestaJuga",puntosUsuario);
    }
    if (ganador == 2){
        mostrarTexto("lblRespuesta","PERDISTE LA PARTIDA");
        puntosComputadora = puntosComputadora + 1;
        mostrarTexto("lblRespuestaCompu",puntosComputadora);
    }
    if (puntosUsuario == 5){
        mostrarTexto("lblRespuesta","HAS GANADO EL JUEGO");
        bloquearBotones();
    }else if(puntosComputadora == 5){
        mostrarTexto("lblRespuesta","EL COMPUTADOR TE HA VENCIDO");
        bloquearBotones();
    }
}

limpiar=function(){
    mostrarTexto("lblRespuesta","");
    mostrarTexto("lblRespuestaCompu","0");
    mostrarTexto("lblRespuestaJuga","0");
    puntosUsuario = 0;
    puntosComputadora = 0;
}

bloquearBotones=function(){
    document.getElementById("btnNuevaPartida").disabled = false;
    
}
