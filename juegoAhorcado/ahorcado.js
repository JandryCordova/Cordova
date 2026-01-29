let palabraSecreta = "";
let intentos = 0;
let coincidencias=0;
let errores = 0;

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
    if (letrasEncontradas == 0){ 
        alert("La letra no es parte de la palabra"); 
        errores = errores + 1; 
        console.log("Errores: ", errores); 
        mostrarAhorcado();
    } else { 
        coincidencias = coincidencias + letrasEncontradas; 
        console.log("Coincidencias: ", coincidencias); 
    }
    if (coincidencias==5){
        mostrarImagen("ahorcadoImagen","ganador.gif");
    }
    
}
ingresarLetra = function (){
    let letra = recuperarTexto("txtLetra");
    if (esMayuscula(letra)){
        validar(letra);
        if(coincidencias==5){
            alert("HA GANADO")
        }
        if(intentos==10){
            alert("HA PERDIDO")
        }
    }else{
        alert("Solo se aceptan letras mayusculas")
    }
    
    mostrarTextoEnCaja("txtLetra","");
    intentos++;
    console.log("Intentos: ",intentos);
    if (intentos==10){
        mostrarImagen("ahorcadoImagen","gameOver.gif");
    }
}

mostrarAhorcado = function (){
    if (errores==1){
        mostrarImagen("ahorcadoImagen","Ahorcado_01.png");
    }
    if (errores==2){
        mostrarImagen("ahorcadoImagen","Ahorcado_02.png");
    }
    if (errores==3){
        mostrarImagen("ahorcadoImagen","Ahorcado_03.png");
    }
    if (errores==4){
        mostrarImagen("ahorcadoImagen","Ahorcado_04.png");
    }
    if (errores==5){
        mostrarImagen("ahorcadoImagen","Ahorcado_05.png");
    }
    if (errores==6){
        mostrarImagen("ahorcadoImagen","Ahorcado_06.png");
    }
    if (errores==7){
        mostrarImagen("ahorcadoImagen","Ahorcado_07.png");
    }
    if (errores==8){
        mostrarImagen("ahorcadoImagen","Ahorcado_08.png");
    }
    if (errores==9){
        mostrarImagen("ahorcadoImagen","Ahorcado_09.png");
    }
    
}