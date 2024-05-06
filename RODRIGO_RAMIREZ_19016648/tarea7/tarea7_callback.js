
const numeros = [1, 2, 3, 4, 5];
function sumarArreglo(numeros, callback) {
    for (let i = 0; i < numeros.length; i++) {
        const element = numeros[i];
        callback(element);
    }
}
let resultado2 = 0;
sumarArreglo(numeros, function (resultado) {
    resultado2 += resultado;
});
console.log(resultado2);