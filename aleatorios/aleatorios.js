
numerosAleatorios = function(){
    let numeroRecu = recuperrarInt("txtNumero");
    if (numeroRecu>=0 && numeroRecu<=100){
        return numeroRecu;
    }else{
        console.log("DEBE INGRESAR UN NUMERO ENTRE 0 A 100")
    }
}

generarAleatorios = function(){
    let aleatorios=[];
    let numeroRecu = numerosAleatorios();
    if (numeroRecu>=5 && numeroRecu<=20){
        for ( let a=0 ; a<numeroRecu;a++){
            console.log(a);
            let ValorObt = numerosAleatorios();
            aleatorios = ValorObt
            console.log( aleatorios);
        }
        mostrarResultados(aleatorios);
    }
}

mostrarResultados = function(arregloNumeros){
    let cmpTabla = document.getElementById("ResultadoTabla");
    let contenidoTabla="<table>";
    for (a=0 ; a<arregloNumeros; a++){
        contenidoTabla+="<tr><td>";
        contenidoTabla+=arregloNumeros;
        contenidoTabla+="</tr></td>";
    }
    contenidoTabla+="</table";
    cmpTabla.innerHTML = contenidoTabla;

}