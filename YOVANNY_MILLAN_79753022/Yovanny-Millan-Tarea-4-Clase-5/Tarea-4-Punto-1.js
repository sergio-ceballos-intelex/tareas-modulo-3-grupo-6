//El presente algoritmo dado el precio por kilo, y el peso
//determine cuánto pagará una persona que compre manzanas es esa frutería.

let precioProducto=prompt("Digite el precio del producto ");
document.write("Precio: ",precioProducto);
let pesoProducto=prompt("Digite el peso del producto ");
document.write("<br>Peso: ", pesoProducto);
let descuento=0;
if (pesoProducto<=5&&pesoProducto>2){
    descuento=0.10;
}else if(pesoProducto>5&&pesoProducto<=10){
    descuento=0.15;
}else if(pesoProducto>10){
   descuento=0.20;
}
let pagar=precioProducto*(1-descuento);
document.write("<br>El valor a pagar es: ",pagar);
