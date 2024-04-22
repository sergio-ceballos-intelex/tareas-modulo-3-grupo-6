 calcular_descuento = (prec,peso) => {
    let precio = prec; 
    let kg = peso;
    let descuento = 0;

    if(kg <= 2){
        descuento = 0;
    }else if(kg > 2 && kg <=5){
        descuento = precio * 0.10;
    }else if(kg > 5 && kg <=10){
       descuento = precio * 0.15; 
    }else if(kg > 10){
        descuento = precio * 0.20;
    }
    const resultado = precio - descuento;
    return resultado;
 }

console.log(calcular_descuento(5000,3));