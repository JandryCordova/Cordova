recuperrarTexto=function(idcomponente){
    let nombre=document.getElementById(idcomponente);
    let valorRecuperado=nombre.value;
    return valorRecuperado;

}

recuperrarInt=function(idcomponente){
    let valorCaja=recuperrarTexto(idcomponente);
    let Entero=parseInt(valorCaja);
    return Entero;
}

recuperrarFloat=function(idcomponente){
    let valorCaja=recuperrarTexto(idcomponente);
    let Decimal=parseFloat(valorCaja);
    return Decimal.toFixed(2);
}

mostrarTexto=function(idcomponente,mensaje){
    let componente=document.getElementById(idcomponente);
    componente.innerText=mensaje;
}

mostrarImagen=function(idcomponente,rutaImagen){
    let componente=document.getElementById(idcomponente);
    componente.src= rutaImagen;
}
mostrarTextoEnCaja=function(idcomponente,mensaje){
    let componente=document.getElementById(idcomponente);
    componente.value=mensaje;
}


