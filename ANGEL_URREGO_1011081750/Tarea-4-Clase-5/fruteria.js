let price = prompt("Ingrese el precio de las manzanas por KG")
let kg = prompt("Ingrese el peso en KG de manzanas que desea llevar");


if (kg <= 2){
    document.write("su produco no cuenta con desucento");
}
else if(kg > 2 && kg <= 5){
    const priceTotal = price * kg; 
    const descuento10 = 100 - 10;
    let descuento = priceTotal * descuento10 / 100;
    document.write("Tiene un descuento del 10% :) el valor a pagar seria de: ",descuento);
}
else if(kg > 5 && kg <= 10){
    const priceTotal = price * kg; 
    const descuento15 = 100 - 15;
    let descuento = priceTotal * descuento15 / 100;
    document.write("Tiene un descuento del 15% :) el valor a pagar seria de: ",descuento);
}
else{
    const priceTotal = price * kg; 
    const descuento20 = 100 - 20;
    let descuento = priceTotal * descuento20 / 100;
    document.write("Tiene un descuento del 20% :) el valor a pagar seria de: ",descuento);
}




  