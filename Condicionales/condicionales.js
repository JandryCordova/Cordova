calcularTasaInteres=function(ingresoAnual){
    let Valor=document.getElementById(ingresoAnual);
    let valorRecu=Valor.value;
    let valorFloat=parseFloat(valorRecu);
    if (valorFloat<300000){
        return valorFloat*16/100
    }else if (valorFloat>=300000 && valorFloat<500000){
        return valorFloat*15/100
    }else if (valorFloat>=500000 && valorFloat<1000000){
        return valorFloat*14/100
    }else if (valorFloat>=1000000 && valorFloat<2000000){
        return valorFloat*13/100
    }else{
        return valorFloat*12/100
    }
}

calcularCapacidadPago=function(edad,ingresos,egresos){
    let edadCarac=document.getElementById(edad);
    let edadRecu=edadCarac.value;
    let edadFloat=parseInt(edadRecu);
    let ingresosCarac=document.getElementById(ingresos);
    let ingresosRecu=ingresosCarac.value;
    let ingresosFloat=parseFloat(ingresosRecu);
    let egresosCarac=document.getElementById(egresos);
    let egresosRecu=egresosCarac.value;
    let egresosFloat=parseFloat(egresosRecu);
    if(edadFloat>50){
        let Resultado=(ingresosFloat-egresosFloat)
        return Resultado*30/100; 
    }
}

calcularDescuento=function(precio,cantidad){
    let PrecioCarac=document.getElementById(precio);
    let PrecioRecu=PrecioCarac.value;
    let PrecioFloat=parseFloat(PrecioRecu);
    let CantidadCarac=document.getElementById(cantidad);
    let CantidadRecu=CantidadCarac.value;
    let CantidadInt=parseInt(CantidadRecu);
    let total=CantidadInt*PrecioFloat;
    if(CantidadInt<3){
        return total;
    }else if(CantidadInt>=3 && CantidadInt<=5){
        let descuento1=(CantidadInt*PrecioFloat)*2/100;
        return total-descuento1
    }else if(CantidadInt>=6 && CantidadInt<=11){
        let descuento1=(CantidadInt*PrecioFloat)*3/100;
        return total-descuento1
    }else{
        let descuento1=(CantidadInt*PrecioFloat)*4/100;
        return total-descuento1
    }
}

determinarColesterolLDL=function(nivelColesterol){
    let nivelColesterolCarac=document.getElementById(nivelColesterol);
    let nivelColesterolRecu=nivelColesterolCarac.value;
    if(nivelColesterolRecu < 100){
        return "Nivel de colesterol LDL óptimo";
    }else if(nivelColesterolRecu>=100 && nivelColesterolRecu<=129){
        return "Nivel de colesterol LDL casi óptimo";
    }else if(nivelColesterolRecu>=130 && nivelColesterolRecu<=159){
        return "Nivel de colesterol LDL límite alto";
    }else if(nivelColesterolRecu>=160 && nivelColesterolRecu<=189){
        return "Nivel de colesterol LDL alto";
    }else {
        return "Nivel de colesterol LDL muy alto";
    }
}

validarClave=function(clave){
    let ClaveCarac=document.getElementById(clave);
    let ClaveRecu=ClaveCarac.value;
    let ResuClave=ClaveRecu.length;
    if(ResuClave>=8 && ResuClave<=16){
        return true;
    }else{
        return false;
    }

}

esMayuscula=function(caracter){
    let Letra=document.getElementById(caracter);
    let LetraRecu=Letra.value;
    let LetraEncon=LetraRecu.charCodeAt(0);
    if(LetraEncon>=65 && LetraEncon<=90){
        return true;
    }else{
        return false;
    }
}

esMinuscula=function(caracter){
    let Letra=document.getElementById(caracter);
    let LetraRecu=Letra.value;
    let LetraEncon=LetraRecu.charCodeAt(0);
    if(LetraEncon>=97 && LetraEncon<=122){
        return true;
    }else{
        return false;
    }
}

esDigito=function(caracter){
    let Numero=document.getElementById(caracter);
    let NumeroRecu=Numero.value;
    let NumeroEncon=NumeroRecu.charCodeAt(0);
    if (NumeroEncon>=48 && NumeroEncon<=57){
        return true;
    }else{
        return false;
    }
}

darPermiso=function(notaMatematica,notaFisica,notaGeometria){
    let NotaM=document.getElementById(notaMatematica);
    let NotaMRecu=NotaM.value;
    let NotaMFloat=parseFloat(NotaMRecu);
    let NotaF=document.getElementById(notaFisica);
    let NotaFRecu=NotaF.value;
    let NotaFFloat=parseFloat(NotaFRecu);
    let NotaG=document.getElementById(notaGeometria);
    let NotaGRecu=NotaG.value;
    let NotaGFloat=parseFloat(NotaGRecu);
    if(NotaMFloat==90 || NotaFFloat == 90 || NotaGFloat==90){
        return true;
    }else{
        return false;
    }

}