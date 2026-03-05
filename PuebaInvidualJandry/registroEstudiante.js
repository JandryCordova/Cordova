let Estudiantes=[];
validarPalabra=function(palabra,cmpError){
    let codigo = palabra.charCodeAt(0);
    if(codigo >= 65 && codigo <=90){
        mostrarTexto(cmpError,"");
        for ( let a=1; a<palabra.length; a++){
            let posicion =palabra.charAt(a);
            let codePalabra = palabra.charCodeAt(a);
            if (codePalabra >= 97 && codePalabra <= 122){
                mostrarTexto(cmpError,"");
                return true;
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
    mostrarTexto("ErrorCajaNombre","");
    if(nombre && nombre.trim() != ""){
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
        let NombreValidado=validarPalabra(nombre1,"ErrorCajaNombre");
        if(NombreValidado==false){
            return;
        }else{
            validarPalabra(nombre2,"ErrorCajaNombre");
        }
    }else{
        mostrarTexto("ErrorCajaNombre","El campo nombre esta vacio");
        return;
    }
    return true;
    
}

validarApellido=function(apellido){
    mostrarTexto("ErrorCajaApellido","");
    if (apellido  && apellido.trim() != ""){
        if(!apellido.includes(" ")){
            mostrarTexto("ErrorCajaApellido","El primero y segundo apellido debe estar separados con un espacio");
            return;
        }
        let partes=apellido.split(" ");
        let apellido1=partes[0];
        let apellido2=partes[1];
        if(partes.length != 2){
            mostrarTexto("ErrorCajaApellido","Solo debe tener un Maximo 2 Palabras");
            return;
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
        return;
    }
    return true;
}
validarCorreo=function(correo){
    mostrarTexto("ErrorCajaCorreo","");
    if(correo && correo.trim() != ""){
        let CorreoElectronico = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(CorreoElectronico.test(correo)){
            mostrarTexto("ErrorCajaCorreo","");
        }else{
            mostrarTexto("ErrorCajaCorreo","Ingrese un correo valido, Ejemplo: ejemplo@correo.com");
            return;
        }
    }else{
        mostrarTexto("ErrorCajaCorreo","El campo correo esta vacio");
        return;
    }
    return true;
}

validarID=function(IdEstudiante){
    mostrarTexto("ErrorCajaIdEstudiante","");
    if(IdEstudiante && IdEstudiante.trim() != ""){
        for ( let i=0; i<IdEstudiante.length; i++){
            let codigo=IdEstudiante.charCodeAt(i);
            if(!(codigo>=48 && codigo<=57)){
                mostrarTexto("ErrorCajaIdEstudiante","El ID es obligatorio y debe tener solo numeros");
                return;
            }
        }
    }else{
        mostrarTexto("ErrorCajaIdEstudiante","El campo ID esta vacio");
        return;
    }
    return true;
}

buscarEstudiante=function(idEstudiante){
    for (let a=0; a<Estudiantes.length; a++){
        let Recuperado=Estudiantes[a];
        if (Recuperado.id == idEstudiante){
            deshabilitarComponente("CajaIdEstudiante");
            return Recuperado;
        }
    }
    return null;
}

guardar=function(){
    let Nombre=recuperarTexto("CajaNombres");
    let Apellido=recuperarTexto("CajaApellidos");
    let Correo=recuperarTexto("CajaCorreoElectronico");
    let IdEstudiante=recuperarTexto("CajaIdEstudiante");
    let respuestaNombre=validarNombre(Nombre);
    let respuestaApellido=validarApellido(Apellido);
    let respuestaCorreo=validarCorreo(Correo);
    let respuestaID=validarID(IdEstudiante);
    if (respuestaNombre==true && respuestaApellido==true && respuestaCorreo==true && respuestaID==true){
        let EncontradoEstudiante=buscarEstudiante(IdEstudiante);
        if (EncontradoEstudiante==null){
            let NuevoEstudiante={
                nombre : Nombre,
                apellido : Apellido,
                correo : Correo,
                id : IdEstudiante
            }
            Estudiantes.push(NuevoEstudiante);
            alert ("ESTUDIANTE con ID: "+IdEstudiante+" AGREGADO CON EXITO");
        }else{
            if(EncontradoEstudiante.nombre == Nombre && EncontradoEstudiante.apellido == Apellido && EncontradoEstudiante.correo == Correo){
                alert ("NO SE REALIZARON CAMBIOS");
                return;
            }
            EncontradoEstudiante.nombre = Nombre,
            EncontradoEstudiante.apellido = Apellido,
            EncontradoEstudiante.correo = Correo
            alert ("ACTUALIZADO CON EXITO");
            
        }
        MostraListaEstudiantes();
        Limpiar();
    }else{
        console.log("GUARDADO SIN EXITO");
    }
    
}

Limpiar=function(){
    mostrarTextoEnCaja("CajaNombres","");
    mostrarTextoEnCaja("CajaApellidos","");
    mostrarTextoEnCaja("CajaCorreoElectronico","");
    mostrarTextoEnCaja("CajaIdEstudiante","");
    mostrarTexto("ErrorCajaIdEstudiante","");
    mostrarTexto("ErrorCajaCorreo","");
    mostrarTexto("ErrorCajaApellido","");
    mostrarTexto("ErrorCajaNombre","");
    habilitarComponente("CajaIdEstudiante");
}

MostraListaEstudiantes=function(){
    let cmpTabla = document.getElementById("ListaEstudiantes");
    let contenido= "<table><tr>"+
    "<th>NOMBRE</th>"+
    "<th>APELLIDO</th>"+
    "<th>CORREO</th>"+
    "<th>ID ESTUDIANTE</th></tr>"
    for (let j=0; j<Estudiantes.length; j++){
        let DatosEstudiantes=Estudiantes[j];
        contenido+="<tr><td>"+DatosEstudiantes.nombre+"</td>"+
        "<td>"+DatosEstudiantes.apellido+"</td>"+
        "<td>"+DatosEstudiantes.correo+"</td>"+
        "<td>"+DatosEstudiantes.id+"</td>"+"</tr>"
    }
    contenido+="</table>"
    cmpTabla.innerHTML=contenido;
}

eliminarEstudiante=function(){
    mostrarTexto("ErrorCajaIdEstudiante","");
    let estudiante=recuperarTexto("CajaIdEstudiante");
    if(estudiante && estudiante.trim() != "" ){
        for(let h=0; h<Estudiantes.length; h++){
            let RecuEstudiante = Estudiantes[h];
            if (RecuEstudiante.id == estudiante){
                Estudiantes.splice(h,1);
                MostraListaEstudiantes();
                alert ("ESTUDIANTE ELIMINADO CORRECTAMENTE")
                return;
            }
        }
        alert ("NO SE ENCONTRO ESTUDIANTE")
    }else{
        mostrarTexto("ErrorCajaIdEstudiante","EL CAMPO ID ESTA VACIO");
        return;
    }
    
}
window.onload = function(){
    MostraListaEstudiantes();
}
