const numeros = [1, 2, 3, 4, 5];
function filtrarArreglo(arreglo, callbackfiltro) {
    for (let i = 0; i < arreglo.length; i++) {
        const element = arreglo[i]
        callbackfiltro(element);
    }
}
const pares = []; 
const numerosPares = filtrarArreglo(numeros, function(numero) {
    pares.push(numero)
    console.log(numero);
    
});
console.log(pares.filter(num => num % 2 === 0));
