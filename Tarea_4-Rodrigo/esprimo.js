let numero = Number(prompt("ingrese un número"));
let numero2 = numero / 2;

if (numero > 1) {
    for (var divisor = 2; divisor <= numero2; divisor +=2) {
        if (numero % divisor === 0) {
            document.write("El Número :",numero,  " No es Número Primo");
            break;
        } else {
            document.write("El Número :", numero,  " Es Número Primo");
            break;
        }
    } 
}