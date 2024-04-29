const peso = 7; //prompt("ingresa los kilos a llevar");
const precioKl = 6.999;
let descuento = 0;

if (peso <= 2) {
  descuento = 0;
} else if (peso <= 5) {
  descuento = 0.1;
} else if (peso > 2 && peso <= 5) {
  descuento = 0.15;
} else {
  descuento = 0.2;
}

let preciosSinDescuento = precioKl * peso;
let precioConDescuento = preciosSinDescuento * (1 - descuento);
console.log("el precio a pagar es", precioConDescuento.toFixed(3));
