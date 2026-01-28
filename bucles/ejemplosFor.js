mostrarNumeros = function (){
    console.log("Antes de entrar al for");
    for (let i =  0; i<4; i++){
        console.log(i);
    }
    console.log("Despues de entrar al for");
}

mostrarNumeros2 = function (){
    console.log("Antes de entrar al for");
    for (let indice =  1; indice<=5; indice++){
        console.log(indice);
    }
    console.log("Despues de entrar al for");
}

mostrarPares = function (){
    for ( x=2 ; x<=10 ; x+=2){
        console.log(x);
    }
}

mostrarInverso = function (){
    for ( L=10 ; L>=0 ; L--){
        console.log(L);
    }
}

hackearNasaPelis = function (){
    for (porcentaje=0 ; porcentaje<=100 ; porcentaje+=10){
        console.log("hackeando nasa "+porcentaje+"%");
    }
    console.log("La nasa ha sido hackeada XD")
}

mostrarImpares = function(){
    console.log("Antes del For");
    for (a=1 ; a<=21 ; a+=2){
        console.log(a)
    }
    console.log("Despues del For");
}