let esNuevo = false;

let empleados = [
    {cedula:"1714616123",nombre:"John",apellido:"Cena",sueldo:500.0},
    {cedula:"0914632123",nombre:"Luisa",apellido:"Gonzalez",sueldo:900.0},
    {cedula:"0864975123",nombre:"Juan",apellido:"Zambrano",sueldo:600.0}
]

mostrarOpcionEmpleado=function(){
    mostrarComponente("divEmpleado");
    ocultarComponente("divRol");
    ocultarComponente("divResumen");
    mostrarEmpleados();
}

mostrarOpcionRol=function(){
    mostrarComponente("divRol");
    ocultarComponente("divEmpleado");
    ocultarComponente("divResumen");
}

mostrarOpcionResumen=function(){
    mostrarComponente("divResumen");
    ocultarComponente("divRol");
    ocultarComponente("divEmpleado");
}

mostrarEmpleados=function(){
    let cmpTabla=document.getElementById("tablaEmpleados");
    let contenidoTabla="<table>"+
    "<th>CEDULA</th>"+
    "<th>NOMBRE</th>"+
    "<th>APELLIDO</th>"+
    "<th>SUELDO</th>"
    
    let elementoEmpleado;
    for(let a=0;a<empleados.length;a++){
        elementoEmpleado=empleados[a];
        contenidoTabla+="<tr><td>"+elementoEmpleado.cedula+"</td>"+
        "<td>"+elementoEmpleado.nombre+"</td>"+
        "<td>"+elementoEmpleado.apellido+"</td>"+
        "<td>"+elementoEmpleado.sueldo+"</td>"+
        "</tr>"
    }
    contenidoTabla+="</table>";
    cmpTabla.innerHTML=contenidoTabla;
    deshabilitarComponente("txtCedula");
    deshabilitarComponente("txtNombre");
    deshabilitarComponente("txtApellido");
    deshabilitarComponente("txtSueldo");
    deshabilitarComponente("btnGuardar");

}

ejecutarNuevo=function(){
    habilitarComponente("txtCedula");
    habilitarComponente("txtNombre");
    habilitarComponente("txtApellido");
    habilitarComponente("txtSueldo");
    habilitarComponente("btnGuardar");
    esNuevo = true;

}

buscarEmpleado=function(cedula){
    let empleadoEncontrado;
    for (let a=0;a<empleados.length;a++){
        empleadoEncontrado=empleados[a];
        if(empleadoEncontrado.cedula==cedula){
            return empleadoEncontrado;
        }
    }
    return null;
}

agregarEmpleados=function(empleado){
    let resultado;
    resultado=buscarEmpleado(empleado.cedula);
    if (resultado==null){
        empleados.push(empleado);
        alert ("Cliente Agregado");
        mostrarEmpleados();
        return true;
    }else{
        alert("Ya existe el cliente con la cedula "+empleado.cedula);
        return false;
    }
}

guardar=function(){
    let valorCedula=recuperarTexto("txtCedula");
    let valorNombre=recuperarTexto("txtNombre");
    let valorApellido=recuperarTexto("txtApellido");
    let valorSueldo=recuperarTexto("txtSueldo");
    let cedula;
    let nombre;
    let apellido;
    let esValido=true;

    if(valorCedula.length==10){
        mostrarTexto("lblErrorCedula","");
        for(let a=0;a<valorCedula.length;a++){
            cedula=valorCedula.charCodeAt(a);
            if (cedula>=48 && cedula<=57){
                mostrarTexto("lblErrorCedula","");           
            }else{
                mostrarTexto("lblErrorCedula","Solo ingrese digitos");
                esValido=false;
                break;
            }
        }
        
    }else{
        mostrarTexto("lblErrorCedula","Solo puede ingresar 10 digitos");
        esValido=false;
    }
    if (valorNombre.length>=3){
        mostrarTexto("lblErrorNombre","");
        for(let a=0;a<valorNombre.length;a++){
            nombre=valorNombre.charCodeAt(a);
            if(nombre>=65 && nombre<=90){
                mostrarTexto("lblErrorNombre","");
            }else{
                mostrarTexto("lblErrorNombre","Solo puede ingresar letras mayusculas");
                esValido=false;
                break;
            }
        }
    }else{
        mostrarTexto("lblErrorNombre","Deber tener mas de 3 caracteres");
        esValido=false;
    }
    
    if (valorApellido.length>=3){
        mostrarTexto("lblErrorApellido","");
        for(let a=0;a<valorApellido.length;a++){
            apellido=valorApellido.charCodeAt(a);
            if(apellido>=65 && apellido<=90){
                mostrarTexto("lblErrorApellido","");
            }else{
                mostrarTexto("lblErrorApellido","Solo puede ingresar letras mayusculas");
                esValido=false;
                break;
            }
        }
    }else{
        mostrarTexto("lblErrorApellido","Deber tener mas de 3 caracteres");
        esValido=false;
    }

    if(!isNaN(valorSueldo)){
        if(valorSueldo>=400 && valorSueldo<=5000){
            mostrarTexto("lblErrorSueldo","");
        }else{
            mostrarTexto("lblErrorSueldo","El valor debe estar entre $400 y $5000");
            esValido=false;
        }
    }else{
        mostrarTexto("lblErrorSueldo","Debe ser un numero flotante");
        esValido=false;
    }
    
    if(esValido==true){ 
        let empleado={}; 
        empleado.cedula=valorCedula; 
        empleado.nombre=valorNombre; 
        empleado.apellido=valorApellido; 
        empleado.sueldo=valorSueldo; 
        if(esNuevo==true){ 
            let resultado=agregarEmpleados(empleado); 
            if(resultado==true){ 
                alert("EMPLEADO GUARDADO CORRECTAMENTE"); 
                mostrarEmpleados(); 
                deshabilitarComponente("txtCedula");
                deshabilitarComponente("txtNombre");
                deshabilitarComponente("txtApellido");
                deshabilitarComponente("txtSueldo");
                deshabilitarComponente("btnGuardar");
            }else{ 
                alert("YA EXISTE UN EMPLEADO CON LA CEDULA "+empleado.cedula); 
            } 
        }
        
    }
    
}