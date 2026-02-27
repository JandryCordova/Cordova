let esValido=true;
let Personas=[
    {nombre: "Marcos", edad : 18},
    {nombre: "Roberto", edad : 15},
    {nombre: "Kate", edad : 25},
    {nombre: "Diana", edad : 12},
    {nombre: "Benja", edad : 5}
]

agregarPersona=function(){
    let NombrePerso=recuperrarTexto("CajaTextoNombre");
    let EdadPersona=recuperrarInt("CajaTextoEdad");
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
    }else{
        alert ("No se pudo agregar a " + NombrePerso);
    }
    
}
 //for (let i=0; i<EdadPersona.length; i++){
   //             if(CodigoPersona>=48 && CodigoPersona <=100){
     //           return esValido=true;
       //         }else{
         //           return mostrarTexto("ErrorCajaTexoNombre","La edad no se encuentra dentro del rango");
           //     }
            //}

            //return mostrarTexto("ErrorCajaTexoNombre","El nombre tiene que tener un minimo de 3 caracteres");