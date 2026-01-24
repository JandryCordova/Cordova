botonCalcular=function(){
    let Descuento=calcularDescuento("txtPrecio","txtCantidad");
    console.log(Descuento);
    let CapacidadPago=calcularCapacidadPago("txtEdad","txtIngreso","txtEgresos");
    console.log(CapacidadPago);
    let TasaInteres=calcularTasaInteres('txtIngresoAnual');
    console.log(TasaInteres);
}