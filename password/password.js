let error = "";

ejecutarValidadcion=function(){
    let Contrasena = document.getElementById("txtContraseña");
    let ContrasenaNue =Contrasena.value;
    validarPassword(ContrasenaNue);
    let lblError = document.getElementById("lblError");
    lblError.innerText=(error);
    
    
}
validarPassword=function(password){
    error = "";
    let mayuscula = 0;
    let digito = 0;
    let caracterEspecial = 0;
    let contraseña=password.length;
    if (contraseña>=8 && contraseña<=16){
        
        for (a=0 ; a<contraseña ; a++ ){
            let CodMayuscula =password.charCodeAt(a);
            if (CodMayuscula>=65 && CodMayuscula<=90){
                mayuscula++;
            }

            let codDigito = password.charCodeAt(a);
            if (codDigito>=48 & codDigito<=57){
                digito++;
            }
            let codCaracterEspecial=password.charCodeAt(a);
            if (codCaracterEspecial == 42 || codCaracterEspecial == 45 || codCaracterEspecial == 95){
                caracterEspecial++;
            }
        }
        if(mayuscula<1){
            error += "Debe tener al menos una letra mayuscula, ";
        }
        if(digito<1){
            error += "Debe tener al menos un digito, ";
        }
        if(caracterEspecial<1){
            error += "Debe tener al menos un caracter especial.";
        }
    }else{
        error += "Contraseña debe tener entre 8 y 16 caracteres, ";
    }
    if (error != ""){
        return error.trim();
    }
    return error;
}