botonCalcular=function(){
    let CapacidadPago=calcularCapacidadPago("txtEdad","txtIngreso","txtEgresos");
    console.log(CapacidadPago);
    let TasaInteres=calcularTasaInteres('txtIngresoAnual');
    console.log(TasaInteres);
}