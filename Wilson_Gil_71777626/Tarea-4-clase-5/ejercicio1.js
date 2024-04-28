let precio = 1200;
let peso = 8;
let descuento = 0;

if(peso >0 && peso <= 2){
    descuento = 0;
}else if(peso > 2 && peso <= 5){
    descuento = 10;
}else if(peso > 5 && peso <= 10){
    descuento = 15;
}else  {
    descuento = 20;
}

let vrPagar = precio *(1 - descuento/100);


console.log('Porcentaje de descuento es de ', descuento);
console.log('Valor A Pagar es de $', vrPagar);