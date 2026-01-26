calcularValorTotal = function () {
    //variables para recuperar los valores de las cajas de texto
    let nombreProducto=recuperarTexto("txtProducto");
    let precioProducto=recuperarFloat("txtPrecio"); // SE UTILIZA PARA RECUPERAR EL PRECIO COMO FLOAT
    let cantidad=recuperarInt("txtCantidad"); // SE UTILIZA PARA RECUPERAR LA CANTIDAD COMO INT
    
    if (!esProductoValido(nombreProducto) & !esCantidadValida(cantidad) & !esPrecioValido(precioProducto)) { 
        return; 
    }

    let valorSubtotal=calcularSubtotal(precioProducto,cantidad);
    let valorDescuento=calcularDescuentoPorVolumen(valorSubtotal,cantidad);
    let ValorRestado=valorSubtotal-valorDescuento
    let valorIVA=calcularIVA(ValorRestado);
    let Iva=parseFloat(valorIVA);
    let valorTotal=calcularTotal(valorSubtotal,valorDescuento,Iva);

    mostrarTexto("lblSubtotal",valorSubtotal);
    mostrarTexto("lblDescuento",valorDescuento);
    mostrarTexto("lblValorIVA",Iva);
    mostrarTexto("lblTotal",valorTotal);
    
}
limpiar = function () {
    mostrarTextoEnCaja("txtProducto","")
    mostrarTextoEnCaja("txtCantidad","")
    mostrarTextoEnCaja("txtPrecio","")
    mostrarTexto("lblSubtotal","0.0");
    mostrarTexto("lblDescuento","0.0");
    mostrarTexto("lblValorIVA","0.0");
    mostrarTexto("lblTotal","0.0");
    mostrarTexto("lblResumen","");
}
