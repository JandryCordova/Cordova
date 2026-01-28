let palabraSecreta = "";

esMayuscula = function(caracter){
    let Codigo =caracter.charCodeAt(0)
    if (Codigo >= 65 && Codigo<=90){
        return true;
    }
    return false;
}

guardarPalabra = function (){
    let mayuscula = 0;
    let palabra =recuperarTexto("txtSecreta");
    if (palabra.length == 5){
        for (a=0;a<palabra.length;a++){
            let caracter = palabra.charAt(a)
            if (esMayuscula(caracter)){
                mayuscula++;
            }
        }
        palabraSecreta = palabra;

    }else{
        console.log("Debe solo tener 5 caracteres")
    }
}