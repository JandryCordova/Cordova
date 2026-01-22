calcularPromedioNotas=function(){
    let nota1=recuperarFlotante("txtNota1")
    let nota2=recuperarFlotante("txtNota2")
    let nota3=recuperarFlotante("txtNota3")
    let promedio=calcularPromedio(nota1,nota2,nota3)
    cambiarTexto("lblResultado",promedio.toFixed(2))
    if (promedio<5 && promedio>=0){
        cambiarTexto("lblRespuesta","Reprobado")
        cambiarImagen("imgResultado","./imagenes/reprobado.gif");
    }else if (promedio>=5 && promedio<=8){
        cambiarTexto("lblRespuesta","Buen Trabajo")
        cambiarImagen("imgResultado","./imagenes/buentrabajo.gif");
    }else if (promedio>8 && promedio<=10){
        cambiarTexto("lblRespuesta","Excelente")
        cambiarImagen("imgResultado","./imagenes/excelente.gif");
    }else{
        cambiarTexto("lblRespuesta","Datos Incorrectos")
        cambiarImagen("imgResultado","./imagenes/datosIncorrecto.gif");
    }
}