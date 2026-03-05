validarPalabra=function(palabra,cmpError){
    let codigo = palabra.charCodeAt(0);
    if(codigo >= 65 && codigo <=90){
        mostrarTexto(cmpError,"");
        for ( let a=1; a<palabra.length; a++){
            let posicion =palabra.charAt(a);
            let codePalabra = palabra.charCodeAt(a);
            if (codePalabra >= 97 && codePalabra <= 122){
                mostrarTexto(cmpError,"");
            }else{
                mostrarTexto(cmpError,"La letra "+ posicion+ " debe ser minuscula");
                return false;
            }        
        }
    }else{
        mostrarTexto(cmpError,"La primera letra debe ser mayuscula");
        return false;
    }
}

validarNombre=function(nombre){
    if(nombre && nombre.trim() != ""){
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
        NombreValidado=validarPalabra(nombre1,"ErrorCajaNombre");
        if(NombreValidado==false){
            return;
        }else{
            validarPalabra(nombre2,"ErrorCajaNombre");
        }
        return partes;
    }else{
        mostrarTexto("ErrorCajaNombre","El campo nombre esta vacio");
    }
    
}

validarApellido=function(apellido){
    if (apellido  && apellido.trim() != ""){
        mostrarTexto("ErrorCajaApellido","");
        if(!apellido.includes(" ")){
            mostrarTexto("ErrorCajaApellido","El primero y segundo apellido debe estar separados con un espacio");
            return;
        }
        let partes=apellido.split(" ");
        let apellido1=partes[0];
        let apellido2=partes[1];
        if(partes.length != 2){
            mostrarTexto("ErrorCajaApellido","Solo debe tener un Maximo 2 Palabras");
        }else{
            let ApellidoValidado = validarPalabra(apellido1,"ErrorCajaApellido");
            if (ApellidoValidado==false){
                return;
            }else{
            validarPalabra(apellido2,"ErrorCajaApellido");
            }
        }
    }else{
        mostrarTexto("ErrorCajaApellido","El campo apellido esta vacio");
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

validarID=function(IdEstudiante){
    if(IdEstudiante && IdEstudiante.trim() != ""){
        for ( let i=0; i<IdEstudiante.length; i++){
            let codigo=IdEstudiante.charCodeAt(i);
            if(!(codigo>=48 && codigo<=57)){
                mostrarTexto("ErrorCajaIdEstudiante","El ID es obligatorio y debe tener solo numeros");
                return;
            }
        }
    }else{
        mostrarTexto("ErrorCajaIdEstudiante","El campo correo esta vacio");
        return;
    }
}

guardar=function(){
    Nombre=recuperarTexto("CajaNombres");
    Apellido=recuperarTexto("CajaApellidos");
    Correo=recuperarTexto("CajaCorreoElectronico");
    IdEstudiante=recuperarTexto("CajaIdEstudiante");
    validarNombre(Nombre);
    validarApellido(Apellido);
    validarCorreo(Correo);
}