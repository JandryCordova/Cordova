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