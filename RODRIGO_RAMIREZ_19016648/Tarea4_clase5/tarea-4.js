let pesoManzanas = 11;
let precioManzanas = 20;

if (pesoManzanas < 2.01) {
    console.log("El valor de las manzanas es :", precioManzanas * pesoManzanas);
} else if (pesoManzanas > 2 && pesoManzanas < 5.01) {
    console.log("El valor de las manzanas es: ", (precioManzanas * pesoManzanas) - (precioManzanas * pesoManzanas) * 0.1);
} else if (pesoManzanas > 5 && pesoManzanas < 10.01) {
    console.log("El valor de las manzanas es :", (pesoManzanas * precioManzanas) - (precioManzanas * pesoManzanas) * 0.15);
} else {
    console.log("El valor de las manzanas es :", (pesoManzanas * precioManzanas) - (precioManzanas * pesoManzanas) * 0.2);
}