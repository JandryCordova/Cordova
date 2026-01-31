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