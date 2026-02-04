probarAtributos=function(){
    let persona ={
        nombre :"Juan",
        apellido : "Perez",
        edad : 25 ,
        estaVivo : true
    }
    console.log(persona.nombre);
    console.log(persona.edad);
    if(persona.estaVivo == false){
        console.log("esta muerto");
    }else{
        console.log("esta vivo");
    }
}

crearProducto=function(){
    let producto1={
        nombre : "Celular",
        precio : 82.5,
        stock : 100
    }
    let producto2={
        nombre : "Reloj",
        precio : 25.86,
        stock : 200
    }
    console.log(producto1.nombre);
    console.log(producto2.precio);
    if(producto1.stock > producto2.stock){
        console.log(producto1.nombre+" tiene mayor stock");
    }
    if(producto2.stock > producto1.stock ){
        console.log(producto2.nombre+" tiene mayor stock");
    }
    if(producto1.stock == producto2.stock){
        console.log(" Ambos productos tienen el mismo stock");
    }
}

modificarAtributos=function(){
    let cuenta={
        numero : "551658553654",
        saldo : 0.0
    }
    cuenta.saldo=100;
    cuenta.saldo+=10;
    console.log(cuenta.saldo);
}

crearCliente=function(){
    let clientes={
        cedula : "15911223",
        nombre : "juan"
    }
    let cliente1={}
    cliente1.cedula="05916516556";
    cliente1.nombre="Juan";
    cliente1.apellido="Perez";
}

incrementarSaldo=function(cuenta,monto){
    cuenta.saldo+=monto;
}

determinarMayor=function(persona1,persona2){
    if (persona1.edad>persona2.edad){
        return persona1;
    }else if(persona2.edad>persona1.edad){
        return persona2;
    }else{
        return null;
    }
}

probarIncrementoSaldo=function(){
    let cuenta={
        numero:"159455566",
        saldo : 35.0
    }
    incrementarSaldo(cuenta,100);
    console.log(cuenta.saldo);

}

probarDeterminarMayor=function(){
    let per1={nombre : "Juan", edad : 15}
    let per2={nombre : "Sofia", edad : 20}
    let mayor;
    mayor=determinarMayor(per1,per2);
    if (mayor != null){
        console.log("El mayor es: " + mayor.nombre);
    }
}