botonCalcular=function(){
    let TasaInteres=calcularTasaInteres('txtIngresoAnual');
    console.log(TasaInteres);
    let CapacidadPago=calcularCapacidadPago("txtEdad","txtIngreso","txtEgresos");
    console.log(CapacidadPago);
    let Descuento=calcularDescuento("txtPrecio","txtCantidad");
    console.log(Descuento);
    let colesterol=determinarColesterolLDL("txtColesterol");
    console.log(colesterol);
    let Contraseña=validarClave("txtContraseña");
    console.log(Contraseña);
}