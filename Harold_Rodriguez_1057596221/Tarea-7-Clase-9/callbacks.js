// Primer Punto 

function sumarArreglo(numeros, callback) {
    let suma = numeros.reduce((numero, item) => 
        numero + item, 0);
        callback(suma);
}
    const numeros = [1, 2, 3, 4, 5];
    sumarArreglo(numeros, function (resultado) {
    console.log(resultado); 
});

// Segundo Punto

// function filtrarArreglo(arreglo, callbackFiltro) {
//     let filtrar = arreglo.filter(callbackFiltro);
//     return filtrar;       
// }
  
//     const numeros = [1, 2, 3, 4, 5];
//     const numerosPares = filtrarArreglo(numeros, function (numero) {
//     return numero % 2 === 0;
// });
//     console.log(numerosPares);

// Tercer Punto

// function filtrarPares(numeros, callback) {
//     let filtrar = numeros.filter(function(numero){
//         return numero % 2 === 0;
//     });
//         callback(filtrar);
// }

// function mostrarPares (numerosPares) {
//     console.log(numerosPares);
// }
  
// const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// filtrarPares(numeros, mostrarPares);

// Cuarto Punto

// const salida = () => console.log('Viaje desde Bogota');

// const escala1 = (callback) => {
//     setTimeout(() => {
//         console.log('Primera escala en Madrid');
//         callback();
//     }, 3000);
// };

// const escala2 = (callback) => {
//     setTimeout(() => {
//         console.log('Segunda escala en Alemania');
//         callback();
//     }, 4000);
// };

// const destino = (callback) => {
//     setTimeout(() => {
//         console.log('Fin del viaje en corea del sur');
//         callback();
//     }, 8000);
// };

// salida();
// escala1(() => {
//     escala2(() => {
//         destino(() => {
//         });
//     });
// });
