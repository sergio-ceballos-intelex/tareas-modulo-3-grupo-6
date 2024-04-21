let numeroPrimo = 348;
let mitadNumeroPrimo = numeroPrimo / 2;

for ( var number = 2; number <= mitadNumeroPrimo; number +=2) {
    if (Number.isInteger(numeroPrimo / number)) {
        console.log("El número no es primo");
        break;
    } 
        console.log("El Número es primo");
        break;
}



