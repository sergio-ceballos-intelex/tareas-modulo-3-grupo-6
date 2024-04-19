const costoKiloManzana = 12990
let number1 = 1.5
let number2 = 3
let descuento2 = 10 / 100
let number3 = 6.5
let descuento3 = 15 / 100
let number4 = 12
let descuento4 = 20 / 100

console.log("si el cliente compra 0 || <= 2 kilos, el costo total es $",number1*costoKiloManzana, "no aplica descuento")
console.log("si el cliente compra 2 || <= 5 kilos, el costo total es $", number2*costoKiloManzana, "con descuento del 10% $", number2*costoKiloManzana*descuento2);
console.log("si el cliente compra 5 || <= 10 kilos, el costo total es $", number3*costoKiloManzana, "con descuento del 15% $", number3*costoKiloManzana*descuento3);
console.log("si el cliente compra >= 10 kilos, el costo total es $", number4*costoKiloManzana, "con descuento del 20% $", number4*costoKiloManzana*descuento4);    