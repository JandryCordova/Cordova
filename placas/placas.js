validarPlaca=function(){
    let placa=recuperrarTexto("txtPlaca");
    let erroresEstructura=validarEstructura(placa);
    let lblError=document.getElementById("lblError");
    let lblProvincia=document.getElementById("lblProvincia");
    if (erroresEstructura == null){
        mostrarTexto("lblErrores","");
        mostrarTexto("lblError","");
        mostrarTexto("lblError","ESTRUCTURA VALIDAD");
        lblError.style.color = "green";
        let provincia=obtenerProvincia(placa);
        if (provincia == null){
            mostrarTexto("lblProvincia","PROVINCIA INCORRECTA");
            lblProvincia.style.color= "red";
        }else{
            mostrarTexto("lblProvincia",provincia);
            lblProvincia.style.color= "beige";
        }
        let TipoVehiculo=obtenerTipoVehiculo(placa);
        if (TipoVehiculo == null){
            mostrarTexto("lblTipoVehiculo","TIPO DE VEHICULO INCORRECTO");
        }else{
            mostrarTexto("lblTipoVehiculo",TipoVehiculo);
        }
        let picoPlaca=obtenerDiaPicoYPlaca(placa);
        mostrarTexto("lblPicoPlaca",picoPlaca);
    }else{
        mostrarTexto("lblPicoPlaca","");
        mostrarTexto("lblTipoVehiculo","");
        mostrarTexto("lblProvincia","");
        mostrarTexto("lblError","ESTRUCTURA INCORRECTO");
        mostrarTexto("lblErrores",erroresEstructura);
        lblError.style.color= "red";
    }
    
}
Limpiar=function(){
    mostrarTexto("lblPicoPlaca","");
    mostrarTexto("lblTipoVehiculo","");
    mostrarTexto("lblProvincia","");
    mostrarTexto("lblErrores","");
    mostrarTexto("lblError","");
    document.getElementById("txtPlaca").value="";
    
}