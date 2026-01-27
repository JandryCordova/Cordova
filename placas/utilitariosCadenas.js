esMayuscula=function(caracter){
    let letra=caracter.charCodeAt(0);
    if(letra>=65 && letra<=90){
        return true;
    }else{
        return false;
    }
}

esDigito=function(caracter){
    let numero=caracter.charCodeAt(0);
    if (numero>=48 && numero<=57){
        return true;
    }else{
        return false;
    }
}

esGuion=function(caracter){
    let guion=caracter.charCodeAt(0);
    if (guion==45){
        return true;
    }else{
        return false;
    }

}