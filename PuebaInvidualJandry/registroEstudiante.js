validarNombre=function(nombre){
    let nombreRecu;
    if(nombre != null){
        mostrarTexto("ErrorCajaNombre","");
        if(!nombre.includes(" ")){
            mostrarTexto("ErrorCajaNombre","El primero y segundo nombre debe estar Separados con un Espacio");
            return;
        }
        let partes=nombre.split(" ");
        if(partes.length != 2){
            mostrarTexto("ErrorCajaNombre","Solo debe tener un Maximo 2 Palabras");
            return;
        }
        let nombre1=partes[0];
        let nombre2=partes[1];
        let CodigoNombre1 = nombre1.charCodeAt(0);
        if(CodigoNombre1 >= 65 && CodigoNombre1<=90){
            mostrarTexto("ErrorCajaNombre","");
            for (let a=1; a<nombre1.length; a++){
                let posicionNombre1 = nombre1.charAt(a)
                let CodeNombre1=nombre1.charCodeAt(a)
                if(CodeNombre1>=97 && CodeNombre1<=122){
                    mostrarTexto("ErrorCajaNombre","");
                    console.log(posicionNombre1);
                }else{
                    mostrarTexto("ErrorCajaNombre","La letra "+ posicionNombre1+ " debe ser minuscula");
                }
            }
        }else{
            mostrarTexto("ErrorCajaNombre","La primera letra debe ser mayuscula");
        }
        let CodigoNombre2 = nombre2.charCodeAt(0);
        if(CodigoNombre2 >= 65 && CodigoNombre2<=90){
            mostrarTexto("ErrorCajaNombre","");
            for (let a=1; a<nombre2.length; a++){
                let posicionNombre2 = nombre2.charAt(a)
                let CodeNombre2=nombre2.charCodeAt(a)
                if(CodeNombre2>=97 && CodeNombre2<=122){
                    mostrarTexto("ErrorCajaNombre","");
                    console.log(posicionNombre2);
                }else{
                    mostrarTexto("ErrorCajaNombre","La letra "+ posicionNombre2+ " debe ser minuscula");
                }
            }
        }else{
            mostrarTexto("ErrorCajaNombre","La primera letra debe ser mayuscula");
        }
        
    }else{
        mostrarTexto("ErrorCajaNombre","El campo nombre esta vacio");
    }
    
}

validarCorreo=function(correo){
    if(correo && correo.trim() != ""){
        mostrarTexto("ErrorCajaCorreo","");
        let CorreoElectronico = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(CorreoElectronico.test(correo)){
            mostrarTexto("ErrorCajaCorreo","");
        }else{
            mostrarTexto("ErrorCajaCorreo","Ingrese un correo valido, Ejemplo: ejemplo@correo.com");
        }
    }else{
        mostrarTexto("ErrorCajaCorreo","El campo correo esta vacio");
    }

}

guardar=function(){
    Nombre=recuperarTexto("CajaNombres");
    Apellido=recuperarTexto("CajaApellidos");
    Correo=recuperarTexto("CajaCorreoElectronico");
    IdEstudiante=recuperarTexto("CajaIdEstudiante");
    validarNombre(Nombre);
    validarCorreo(Correo);
}