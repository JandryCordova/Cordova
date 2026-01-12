saludar=function(){
    let nombre=recuperrarTexto("txtNombre");
    let Apellido=recuperrarTexto("txtApellido");
    let Edad=recuperrarInt("txtEdad");
    let Estatura=recuperrarFloat("txtEstatura");
    console.log(nombre);
    console.log(Apellido);
    console.log(Edad);
    console.log(Estatura);
    let mesajeBienvenidad="Bienvenido " +nombre+ " " +Apellido+ " Tienes " +Edad+ " años y mides " +Estatura+ " cm";
    mostrarTexto("lblResultado",mesajeBienvenidad);
    mostrarImagen("imgPrueba","./imagenes/Saludo1.gif");
    mostrarTextoEnCaja("txtNombre","");
    mostrarTextoEnCaja("txtApellido","");
    mostrarTextoEnCaja("txtEdad","");
    mostrarTextoEnCaja("txtEstatura","");
}

