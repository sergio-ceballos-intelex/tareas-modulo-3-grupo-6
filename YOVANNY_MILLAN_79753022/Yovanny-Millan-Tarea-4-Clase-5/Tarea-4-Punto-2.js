const numero=prompt("Por favor digite un número");
let esprimo=true;
if (numero>1){
    for(let i=2;i<numero;i++){
        if(numero%i==0){
            esprimo=false;
            break;
        }
    }   
}
if(numero<=1){
    esprimo=false;
}
if(esprimo==false){
    document.write("El número no es primo");
}else{
    document.write("El número es primo");   
}
