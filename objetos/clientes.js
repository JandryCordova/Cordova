let clientes=[
    {cedula:"0264486",nombre:"Juan",edad:20},
    {cedula:"4443423",nombre:"Pedro",edad:50},
    {cedula:"0567568",nombre:"Sofia",edad:22}
];

mostrarClientes=function(){
    let cmptabla=document.getElementById("tablaClientes");
    let contenidoTabla="<table>"+
    "<th>CEDULA</th>"+
    "<th>NOMBRE</th>"+
    "<th>EDAD</th>"
    ;
    let elementoContenido;
    for (a=0;a<clientes.length;a++){
        elementoContenido=clientes[a];
        contenidoTabla+=
        "<tr><td>"+elementoContenido.cedula+"</td>"+
        "<td>"+elementoContenido.nombre+"</td>"+
        "<td>"+elementoContenido.edad+"</td>"
        +"</tr>"
    }
    contenidoTabla+="</table>";
    cmptabla.innerHTML=contenidoTabla;

}

buscarCliente=function(cedula){
    let elementoCliente;
    let clienteEncontrado= null;
    for (let a=0;a<clientes.length;a++){
        elementoCliente=clientes[a];
        if (elementoCliente.cedula == cedula){
            clienteEncontrado=elementoCliente;
            break;
        }

    }
    return clienteEncontrado;
}

agregrarCliente=function(cliente){
    let resultado;
    resultado=buscarCliente(cliente.cedula);
    if (resultado==null){
        clientes.push(cliente);
        alert ("Cliente Agregado");
        mostrarClientes();
    }else{
        alert("Ya existe el cliente con la cedula "+cliente.cedula);
    }

}

crearCliente=function(){
    let valorCedula=recuperrarTexto("txtCedula");
    let valorNombre=recuperrarTexto("txtNombre");
    let valorEdad=recuperrarInt("txtEdad");
    let nuevoCliente={};
    nuevoCliente.cedula=valorCedula;
    nuevoCliente.nombre=valorNombre;
    nuevoCliente.edad=valorEdad;

    agregrarCliente(nuevoCliente);
}

ejecutarBusqueda=function(){
    let valorCedula=recuperrarTexto("txtCedulaBuscada");
    let respuesta=buscarCliente(valorCedula);
    if (respuesta==null){
        alert ("Cliente no encontrado");
    }else{
        mostrarTextoEnCaja("txtCedula",respuesta.cedula);
        mostrarTextoEnCaja("txtNombre",respuesta.nombre);
        mostrarTextoEnCaja("txtEdad",respuesta.edad);
    }
}

modificarCliente=function(cliente){
    let clienteBuscado=buscarCliente(cliente.cedula);
    if (clienteBuscado!=null){
        clienteBuscado.nombre=cliente.nombre;
        clienteBuscado.edad=cliente.edad;
    }
}

guardarCambios=function(){
    let valorCedula=recuperrarTexto("txtCedula");
    let valorNombre=recuperrarTexto("txtNombre");
    let valorEdad=recuperrarInt("txtEdad");
    let datosCliente={};
    datosCliente.cedula=valorCedula;
    datosCliente.nombre=valorNombre;
    datosCliente.edad=valorEdad;
    modificarCliente(datosCliente);
    mostrarClientes();
}
