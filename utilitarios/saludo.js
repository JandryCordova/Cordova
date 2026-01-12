saludar=function(){
    let nombre=recuperrarTexto("txtNombre");
    let Apellido=recuperrarTexto("txtApellido");
}

recuperrarTexto=function(idcomponente){
    let nombre=document.getElementById(idcomponente);
    let valorRecuperado=nombre.value;
    return valorRecuperado;

}