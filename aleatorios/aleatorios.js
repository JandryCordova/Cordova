let aleatorios = [];
numerosAleatorios = function(){
    let aleatorio = Math.random(0,100);
    let numero = (aleatorio * 100)+1;
    let numeroRecu = parseInt(numero);
    if (numeroRecu>=0 && numeroRecu<=100){
        return numeroRecu;
    }
    
}

generarAleatorios = function(){
    let numeroRecu = recuperrarInt("txtNumero");
    aleatorios=[];
    if (numeroRecu>=5 && numeroRecu<=20){
        for ( let a=0 ; a<numeroRecu;a++){
            console.log("Indice",a);
            let ValorObt = numerosAleatorios();
            aleatorios.push(ValorObt);
            console.log( aleatorios);
        }
        mostrarResultados(aleatorios);
    }else{
        console.log("Este numero no esta dentro del rango del 5 al 20")
    }
}

mostrarResultados = function(arregloNumeros){
    let cmpTabla = document.getElementById("ResultadoTabla");
    let contenidoTabla="<table>";
    for (a=0 ; a<arregloNumeros.length; a++){
        contenidoTabla+="<tr><td>";
        contenidoTabla+=arregloNumeros[a];
        contenidoTabla+="</tr></td>";
    }
    contenidoTabla+="</table";
    cmpTabla.innerHTML = contenidoTabla;

}