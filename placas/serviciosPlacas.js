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

obtenerProvincia=function(Placa){
    let provincia=Placa.charCodeAt(0);
    if (provincia == 65 ){
        return "Azuay";
    }
    if (provincia == 66 ){
        return "Bolivar";
    }
    if (provincia == 85 ){
        return "Cañar";
    }
    if (provincia == 67 ){
        return "Carchi";
    }
    if (provincia == 88 ){
        return "Cotopaxi";
    }
    if (provincia == 72 ){
        return "Chimborazo";
    }
    if (provincia == 79 ){
        return "El Oro";
    }
    if (provincia == 69 ){
        return "Esmeraldas";
    }
    if (provincia == 87 ){
        return "Galapagos";
    }
    if (provincia == 71 ){
        return "Guayas";
    }
    if (provincia == 73 ){
        return "Imbabura";
    }
    if (provincia == 76 ){
        return "Loja";
    }
    if (provincia == 82 ){
        return "Los Rios";
    }
    if (provincia == 77 ){
        return "Manabi";
    }
    if (provincia == 86 ){
        return "Morona Santiago";
    }
    if (provincia == 78 ){
        return "Napo";
    }
    if (provincia == 83 ){
        return "Pastaza";
    }
    if (provincia == 80 ){
        return "Pichincha";
    }
    if (provincia == 75 ){
        return "Sucumbios";
    }
    if (provincia == 81 ){
        return "Orellana";
    }
    if (provincia == 84 ){
        return "Tungurahua";
    }
    if (provincia == 90 ){
        return "Zamora Chinchipe";
    }
    if (provincia == 89 ){
        return "Santa Elena";
    }
    return null;
}