calcularValorTotal = function () {
    //variables para recuperar los valores de las cajas de texto
    let nombreProducto=recuperarTexto("txtProducto");
    let precioProducto=recuperarFloat("txtPrecio"); // SE UTILIZA PARA RECUPERAR EL PRECIO COMO FLOAT
    let cantidad=recuperarInt("txtCantidad"); // SE UTILIZA PARA RECUPERAR LA CANTIDAD COMO INT
    let porcentajeDescuento=recuperarInt("txtPorcentajeDescuento");

    //variables para almacenar los retornos de las funciones
    let valorSubtotal=calcularSubtotal(precioProducto,cantidad);
    let valorDescuento=calcularValorDescuento(valorSubtotal,porcentajeDescuento);
    let ValorRestado=valorSubtotal-valorDescuento
    let valorIVA=calcularIVA(ValorRestado);
    let Iva=parseFloat(valorIVA);
    let valorTotal=calcularTotal(valorSubtotal,valorDescuento,Iva);

    mostrarTexto("lblSubtotal",valorSubtotal);
    mostrarTexto("lblDescuento",valorDescuento);
    mostrarTexto("lblValorIVA",Iva);
    mostrarTexto("lblTotal",valorTotal);

    let Resumen="Valor a pagar por " +cantidad+ " " +nombreProducto+ " con " +porcentajeDescuento+ "% de descuento: USD " +valorTotal
    mostrarTexto("lblResumen",Resumen)
    //12. Mostrar un resumen en el componente lblResumen, si no existe debe agregarlo
    /*
        Ejemplo: 
            Valor a pagar por 20 cerveza corona con 10% de descuento: USD 48.75
        Si funciona, hacer un commit
    */

}
limpiar = function () {
    /*
        Dejar todas las cajas de texto con el valor cadena vacía, 0 ó 0.0 según el tipo de dato
        Dejar todos los textos de los montos con el valor 0.0
        Si funciona, hacer un commit
     */
}
/* SI TODO FUNCIONA, HACER UN PUSH */