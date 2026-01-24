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
    let mayuscula=esMayuscula("txtCaracter");
    console.log(mayuscula);
    let Minuscula=esMinuscula("txtCaracter");
    console.log(Minuscula);
    let Digito=esDigito("txtCaracter");
    console.log(Digito);
    let Permiso=darPermiso("txtMatematicas","txtFisica","txtGeometria");
    console.log(Permiso);
    let OtorgarPermiso=otorgarPermiso("txtMatematicas","txtFisica","txtGeometria");
    console.log(OtorgarPermiso);
    let Salir=dejarSalir("txtMatematicas","txtFisica","txtGeometria");
    console.log(Salir);
}