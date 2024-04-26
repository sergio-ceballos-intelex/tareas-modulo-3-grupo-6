const costoKiloManzana = 12990
let peso1 = 1.5
let peso2 = 3
let peso3 = 6.5
let peso4 = 12

if (peso1 > 0 && peso1 <= 2){
    console.log("no aplica descuento");
} else if (peso2 > 2 && peso2 <= 5){
    let operacion1 = costoKiloManzana*peso2
    let descuento1 = operacion1 * (10 / 100);
    console.log(operacion1, "tienes un descuento del 10%", descuento1, "valor a pagar es", operacion1-descuento1);
} else if (peso3 > 5 && peso3 <= 10){
    let operacion2 = costoKiloManzana*peso3
    let descuento2 = operacion2 * (15 / 100);
    console.log(operacion2, "tienes un descuento del 15%", descuento2, "valor a pagar es", operacion2-descuento2);
} else if (peso4 > 10){
    let operacion3 = costoKiloManzana*peso4
    let descuento3 = operacion3 * (20 / 100);
    console.log(operacion3, "tienes un descuento del 20%", descuento3, "valor a pagar es", operacion3-descuento3);
} else {
    console.log("fin procedimiento")
}