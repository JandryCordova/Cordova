
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
    let total=(subtotal-descuento)+iva;
    return total;
}