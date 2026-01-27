validarEstructura=function(Placa){
    let error = "";
    let tamaño=Placa.length;
    if(tamaño != 7 & tamaño !=8){
        error += "La placa debe tener de 7 u 8 caracteres, ";
    }
    if(!esMayuscula(Placa.charAt(0))){
        error += "El primer caracter debe ser letra mayuscula, ";
    }
    if(!esMayuscula(Placa.charAt(1))){
        error += "El segundo caracter debe ser letra mayuscula, ";
    }
    if(!esMayuscula(Placa.charAt(2))){
        error += "El tercer caracter debe ser letra mayuscula, ";
    }
    if(!esGuion(Placa.charAt(3))){
        error += "El cuarto caracter debe ser un guion, ";
    }
    if (!esDigito(Placa.charAt(4))){
        error += "El quinto caracter debe ser un digito, ";
    }
    if (!esDigito(Placa.charAt(5))){
        error += "El sexto caracter debe ser un digito, ";
    }
    if (!esDigito(Placa.charAt(6))){
        error += "El septimo caracter debe ser un digito, ";
    }
    if( tamaño == 8 && !esDigito(Placa.charAt(7))){
        error += "El octavo caracter debe ser un digito. "
    }
    if ( error != ""){
        return error.trim();
    }
    return null;
}