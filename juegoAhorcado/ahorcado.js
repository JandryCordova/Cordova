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
        for ( let a=0;a<palabra.length;a++){
            let caracter = palabra.charAt(a)
            if (esMayuscula(caracter)){
                mayuscula++;
            }
        }
        if(mayuscula == 5){
            palabraSecreta = palabra;
            console.log(palabraSecreta);
        }else{
            alert ("Debe ingresar una palabra de 5 Letras Mayusculas");
        }
    }else{
            alert ("Solo se permite una palabra de 5 letras");
    }
}

mostrarLetra = function (letra, posicion){
    if (posicion == 0){ 
        document.getElementById("div0").textContent = letra; 
    } 
    if (posicion == 1){ 
        document.getElementById("div1").textContent = letra; 
    } 
    if (posicion == 2){ 
        document.getElementById("div2").textContent = letra; 
    } 
    if (posicion == 3){ 
        document.getElementById("div3").textContent = letra; 
    } 
    if (posicion == 4){ 
        document.getElementById("div4").textContent = letra; 
    }
}

validar = function (letra){
    let letrasEncontradas = 0;
    for (let a=0 ; a<palabraSecreta.length;a++){
        let Letra2 = palabraSecreta.charAt(a)
        if ( Letra2 == letra){
            mostrarLetra(letra,a);
            letrasEncontradas++;
        }
    }
    
}
ingresarLetra = function (){
    let letra = recuperarTexto("txtLetra");
    if (esMayuscula(letra)){
        validar(letra);
    }else{
        alert("Solo se aceptan letras mayusculas")
    }
    mostrarTextoEnCaja("txtLetra","");
}