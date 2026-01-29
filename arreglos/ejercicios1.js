let notas=[];

agregarElementos = function(){
    notas.push(5);
    notas.push(10);
    console.log(notas.length);
}

recorrerArreglo = function (){
    let notaR ;
    for (indice=0 ; indice<notas.length;indice++){
        notaR = notas[indice];
        console.log(notaR)
    }
}

probarAgregar = function(){
    let notaRecuperada = recuperrarInt("txtNota");
    agregarNota(notaRecuperada);
}

agregarNota = function(nota){
    notas.push(nota);
}

calcularPromedio=function(){
    let sumaNotas = 0;
    let promedio;
    for (a=0;a<notas.length;a++){
        let notaRecu = notas[a];
        sumaNotas = sumaNotas + notaRecu;
    }
    promedio = sumaNotas / notas.length;
    return promedio.toFixed(2)
}

ejecutarPromedio = function (){
    let Resultado =calcularPromedio();
    mostrarTexto("lblPromedio",Resultado);
}