ejerciciosPrueba1=function(){
    let mensaje=recuperrarTexto("txtCadena");
    recorrerCadena(mensaje);
}

recorrerCadena=function(cadena){
    let caracter;
    for(posicion=0;posicion<cadena.length;posicion++){
        caracter=cadena.charAt(posicion);
        console.log("Caracter "+caracter+" Posicion "+posicion);
    }
    for(posicion=0;posicion<=cadena.length-1;posicion++){
        caracter=cadena.charAt(posicion);
        console.log("Caracter "+caracter+" Posicion "+posicion);
    }
}

ejerciciosPrueba2=function(){
    let mensaje=recuperrarTexto("txtCadena");
    let invertida=recorrerCadenaInvertida(mensaje);
    mostrarTexto("lblRespuesta",invertida);
}

recorrerCadenaInvertida=function(cadena){
    let respuesta=""
    for (let posicion=cadena.length-1; posicion>=0;posicion--){
        respuesta+=cadena.charAt(posicion);
        
    }
    return respuesta;
}

buscarLetra = function (cadena, letra){
    let letraCadena;
    let existeLetra = false ;
    for (a=0;a<=cadena.length;a++){
        letraCadena =cadena.charAt(a);
        if(letraCadena == letra){
            existeLetra = true;
        }
    }
    if(existeLetra = true){
        console.log("Existe Letra");
    }else{
        console.log("No Existe letra");
    }
}

contadorMayuscula = function (cadena){
    let letra;
    let contadorMayuscula=0;
    for(a=0;a<=cadena.length;a++){
        letra=cadena.charAt(a);
        if(esMayuscula(letra)){
            contadorMayuscula++;
        }
    }
    console.log(contadorMayuscula);
}