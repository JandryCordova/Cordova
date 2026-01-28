jugar=function(seleccionado){
    let Elemento = generarElemento();
    generarRuta(Elemento);
    let ganador = determinarGanador(seleccionado,Elemento);
    if (ganador == 0){
        mostrarTexto("lblRespuesta","EMPATE");
    } 
    if (ganador == 1){
        mostrarTexto("lblRespuesta","GANASTES LA PARTIDAD");
    }
    if (ganador == 2){
        mostrarTexto("lblRespuesta","PERDISTES LA PARTIDA");
    }
}