const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function filtrarPares (numero, callback) {
    for (let i = 0; i < numero.length; i++) {
        const element = Number(numero[i]);
        callback(element);
    }
}

filtrarPares(numeros, function (callback) {
    numerosPares = numeros.filter(num => num % 2 === 0 );

});
function mostrarPares(numerosPares) {
    console.log(numerosPares);
}
mostrarPares(numerosPares);
filtrarPares(numeros, mostrarPares);