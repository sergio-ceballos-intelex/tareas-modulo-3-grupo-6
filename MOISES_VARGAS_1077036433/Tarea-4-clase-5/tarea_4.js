// PRIMER PUNTO
/* ingrese la cantidad de kilos que desee comprar
en la variable peso */

const peso = 1;
const precio = 9737 * peso
const valorTotal = () => {
    if (peso <= 2){
        console.log("Valor total: " + precio);
    }else if (peso > 2 && peso <= 5){
        let i = precio - (10 * precio / 100);
        console.log("Valor total " + precio);
        console.log("Valor total con descuento " + i);
    }else if (peso > 5 && peso >= 10){
        let i = precio - (15 * precio / 100);
        console.log("Valor total " + precio);
        console.log("Valor total con descuento " + i);
    }else {
        let i = precio - (20 * precio / 100);
        console.log("Valor total " + precio);
        console.log("Valor total con descuento " + i);
    }
}

console.log(valorTotal());