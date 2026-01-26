calcularPromedio = function (nota1, nota2, nota3) {
  let promedio;
  promedio = (nota1 + nota2 + nota3) / 3;
  return promedio;
};

//calcular = function () {
//    let nota1;
//    let nota2;
//    let nota3;
//    let resultado;
//    let resultadoFormato;
//    nota1 = recuperarFloat("txtNota1");
//    if(isNaN(nota1)){
//        alert("Error, Ingrese un Numero");
//    }else{
//        nota2 = recuperarFloat("txtNota2");
//        if(isNaN(nota2)){
//            alert("Error, Ingres un numero");
//        }else{
//            nota3 = recuperarFloat("txtNota3");
//            if(isNaN(nota3)){
//                alert("Error, Ingrese un numero");
//            }else{
//                resultado = calcularPromedio(nota1, nota2, nota3);
//                resultadoFormato = resultado.toFixed(2);
//                mostrarTexto("lblResultado", resultadoFormato);
//            }
//        }
//    }
//
//
//
//}

calcular = function () {
    let nota1;
    let nota2;
    let nota3;
    let resultado;
    let resultadoFormato;
    let existeError= false;
    nota1 = recuperarFloat("txtNota1");
    nota2 = recuperarFloat("txtNota2");
    nota3 = recuperarFloat("txtNota3");
    if(esNotaValidad(nota1,"lblError1") & esNotaValidad(nota2,"lblError2") & esNotaValidad(nota3,"lblError3")){
        resultado = calcularPromedio(nota1, nota2, nota3);
        resultadoFormato = resultado.toFixed(2);
        mostrarTexto("lblResultado", resultadoFormato);
    }else{
        mostrarTexto("lblResultado","0.0")
    }
    
};

esNotaValidad=function(nota,idComponente){
    let hayErrores = false;
    if(isNaN(nota)){
        mostrarTexto(idComponente,"DEBES INGRESAR UN NUMERO")
        hayErrores = true;
    }
    if(nota<0 || nota>10){
        mostrarTexto(idComponente,"");
        hayErrores = true;
    }
    if( hayErrores==false){
        mostrarTexto(idComponente,"")
    }
    return !hayErrores;
}