let frutas=["pera","manazana","uva"];

buscar=function(fruta){
    let elemento;
    let frutaEncontrada=null;
    for (let a=0;a<frutas.length;a++){
        elemento=frutas[a];
        if( fruta == elemento){
            frutaEncontrada = elemento;
            break;
        }
    }
    return frutaEncontrada;
}

probarBusqueda=function(){
    let frutaIngresada=recuperrarTexto("txtFrutas");
    let resultado = buscar(frutaIngresada);
    if (resultado == null){
        alert("No existe la fruta");
    }else{
        alert(frutaIngresada+" existe en el cesto..! ");
    }
}