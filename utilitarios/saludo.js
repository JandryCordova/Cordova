saludar=function(){
    let nombre=recuperrarTexto("txtNombre");
    let Apellido=recuperrarTexto("txtApellido");
    let Edad=recuperrarInt("txtEdad");
    let Estatura=recuperrarFloat("txtEstatura");
    console.log(nombre);
    console.log(Apellido);
    console.log(Edad);
    console.log(Estatura);
    let mesajeBienvenidad="Bienvenido " +nombre+ " " +Apellido+ " Tienes " +Edad+ " años y mides " +Estatura+ " cm";
    mostrarTexto("lblResultado",mesajeBienvenidad);
    mostrarImagen("imgPrueba","./imagenes/Saludo1.gif");
    mostrarTextoEnCaja("txtNombre","");
    mostrarTextoEnCaja("txtApellido","");
    mostrarTextoEnCaja("txtEdad","");
    mostrarTextoEnCaja("txtEstatura","");
}

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


