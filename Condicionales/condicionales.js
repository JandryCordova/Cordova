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