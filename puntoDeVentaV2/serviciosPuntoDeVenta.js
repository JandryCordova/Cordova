calcularDescuentoPorVolumen=function(subtotal,cantidad){
    if(cantidad<3){ 
        let Descuento=0;
        return Descuento;
    }else if(cantidad>=3 && cantidad<=5){
        let Descuento=subtotal*3/100;
        return Descuento;
    }else if(cantidad>=6 && cantidad<=11){
        let Descuento=subtotal*4/100;
        return Descuento;
    }else{
        let Descuento=subtotal*5/100;
        return Descuento;
    }
}
calcularValorDescuento=function(monto,porcentajeDescuento){
    let valorDescuento=monto*porcentajeDescuento/100;
    return valorDescuento;
}

calcularIVA=function(monto){
    let total=monto*12/100;
    return total.toFixed(3);
}

calcularSubtotal=function(precio,cantidad){
    let Subtotal=precio*cantidad;
    return Subtotal;
}

calcularTotal=function(subtotal,descuento,iva){
    let total=subtotal-descuento+iva;
    return total;
}

function esProductoValido(producto) {
    if (!producto) {
        mostrarTexto("lblErrorProducto","CAMPO OBLIGATORIO");

        return false;
    }else{
        mostrarTexto("lblErrorProducto","");
    }
    if (producto.length > 10) {
        alert("El nombre de producto no puede tener mas de 10 caracteres");
        return false;
    }
    return true;
}

function esCantidadValida(cantidad) {
    if (!cantidad) {
        mostrarTexto("lblErrorCantidad","CAMPO OBLIGATORIO");
        return false;
    }else{
        mostrarTexto("lblErrorCantidad","");
    }
    if (isNaN(cantidad) || cantidad < 0 || cantidad > 100) {
        alert("La cantidad debe ser un numero entero entre 0 y 100");
        return false;
    }
    return true;
}

function esPrecioValido(precio) {
    if (!precio) {
        mostrarTexto("lblErrorPrecio","CAMPO OBLIGATORIO");
        return false;
    }else{
        mostrarTexto("lblErrorPrecio","");
    }
    if (isNaN(precio) || precio < 0 || precio > 50) {
        alert("El precio debe ser un numero entre 0 y 50");
        return false;
    }
    return true;
}
