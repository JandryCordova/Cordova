validarPlaca=function(){
    let placa=recuperrarTexto("txtPlaca");
    let erroresEstructura=validarEstructura(placa);
    let lblError=document.getElementById("lblError");
    if (erroresEstructura == null){
        mostrarTexto("lblErrores","");
        mostrarTexto("lblError","");
        mostrarTexto("lblError","ESTRUCTURA VALIDAD");
        lblError.style.color = "green";
    }else{
        mostrarTexto("lblError","ESTRUCTURA INCORRECTO");
        mostrarTexto("lblErrores",erroresEstructura);
        lblError.style.color= "red";
    }
    
}