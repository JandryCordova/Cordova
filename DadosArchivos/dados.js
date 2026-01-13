jugar=function(){
    let aleatorio=lanzarDado();
    cambiarTexto("lblNumero",aleatorio);
    if(aleatorio>3){
        cambiarTexto("lblRespuesta","  Es mayor a 3, GANASTES")
    }else{
        cambiarTexto("lblRespuesta","  Es menor a 3, PERDISTES")
    }
}

lanzarDado=function(){
    let aleatorio=Math.random();
    let valorDado=aleatorio*6;
    let numeroEntero=parseInt(valorDado);
    let totalDado=numeroEntero+1;
    return totalDado;
}