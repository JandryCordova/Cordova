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
        respuesta = console.log("PIEDRA");
    }else if(resultado == 2){
        respuesta = console.log("PAPEL");
    }else if(resultado == 3){
        respuesta = console.log("TIJERA");
    }
    return respuesta;
}