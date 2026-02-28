let esValido=true;
let Personas=[
    {nombre: "Marcos", edad : 18},
    {nombre: "Roberto", edad : 15},
    {nombre: "Kate", edad : 25},
    {nombre: "Diana", edad : 12},
    {nombre: "Benja", edad : 5}
]


agregarPersona=function(){
    let NombrePerso=recuperarTexto("CajaTextoNombre");
    let EdadPersona=recuperarInt("CajaTextoEdad");
    let tamanoNombre=NombrePerso.length;
    if(tamanoNombre>=3){
        mostrarTexto("ErrorCajaTexoNombre","");
    }else{
        mostrarTexto("ErrorCajaTexoNombre","El nombre tiene que tener un minimo de 3 caracteres");
        esValido=false;
    }

    if(!isNaN(EdadPersona) && EdadPersona>=0 && EdadPersona<=100){
        mostrarTexto("ErrorCajaTexoEdad","");
    }else{
        mostrarTexto("ErrorCajaTexoEdad","La edad no se encuentra dentro del rango");
        esValido=false;
    }

    if(esValido==true){
        let nuevaPersona={
            nombre: NombrePerso,
            edad: EdadPersona
        }
        Personas.push(nuevaPersona);
        alert ("Se agrego con exito a " + NombrePerso);
        mostrarDatosTabla();
    }else{
        alert ("No se pudo agregar a " + NombrePerso);
    }
    
}

mostrarDatosTabla=function(){
    let cmpTablaDatos=document.getElementById("TablaDeDatos");
    let contenido="<table>"+
    "<th>EDAD</th>"+
    "<th>NOMBRE</th>"

    let DatosPersona;
    for ( let a=0; a<Personas.length; a++){
        DatosPersona=Personas[a];
        contenido+="<tr><td>"+DatosPersona.edad+"</td>"+
        "<td>"+DatosPersona.nombre+"</td>"+
        "</tr>"
    }
    contenido+="</table>"
    cmpTablaDatos.innerHTML=contenido;

}

mostrarTabla=function(){
    mostrarDatosTabla();
}

encontrarMayor=function(){
    let personaMayor=Personas[0];
    let elementoPersona;
    for (let i=1; i<Personas.length; i++){
        elementoPersona=Personas[i]
        console.log(elementoPersona);
        if(elementoPersona.edad > personaMayor.edad){
            personaMayor=elementoPersona;
        }
    }
    return personaMayor;
}

determinarMayor=function(){
    mayor=encontrarMayor();
    mostrarTexto("ResultadoMayor",mayor.nombre+ " es la mayor con "+ mayor.edad+ " years");
}

encontrarMenor=function(){
    let personaMenor=Personas[0];
    let elementoPersona;
    for (let a=0;a<Personas.length; a++){
        elementoPersona=Personas[a];
        console.log(elementoPersona);
        if(elementoPersona.edad < personaMenor.edad){
            personaMenor=elementoPersona
        }
    }
    return personaMenor;
}

determinarMenor=function(){
    Menor=encontrarMenor();
    mostrarTexto("ResultadoMenor",Menor.nombre+ " es la menor con "+ Menor.edad+ " years");
}