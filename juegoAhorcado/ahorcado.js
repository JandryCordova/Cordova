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
        palabraSecreta = palabra;
        console.log(palabraSecreta);

    }else{
            alert ("Debe ingresar una palabra de 5 Letras Mayusculas");
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
        if ( a == letra){
            mostrarLetra(letra,a);
            letrasEncontradas++;
        }
    }
}