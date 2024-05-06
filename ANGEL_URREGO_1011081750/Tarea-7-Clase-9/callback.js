//EJERCICIO #1
function sumarArreglo(numeros, callback) {
    let sum = 0
    numeros.forEach(element => {
        sum += element
    });
    callback(sum)
}
const numeros = [1, 2, 3, 4, 5];
sumarArreglo(numeros, function (resultado) {
    console.log(resultado);
});

//EJERCICIO #2

function filtrarArreglo(arreglo, callbackFiltro) {
    return arreglo.filter(callbackFiltro);
}
  const numerosPares = filtrarArreglo(numeros, function (numero) {
    return numero % 2 === 0;
  });
  console.log(numerosPares); // Debería imprimir [2, 4]

//EJERCICIO #3
function filtrarPares(numeros, callback) {
    const pares = numeros.filter(numero => numero % 2 === 0);
    callback(pares);
}
  
function mostrarPares(numerosPares) {
    console.log(numerosPares)
}

const numeros2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  
filtrarPares(numeros2, mostrarPares);

//EJERCICIO #4
const bogota = () => console.log('Bogota');

const madrid = (callback) => {
    setTimeout(() => {
        console.log("Madrid");
        callback();
    }, 3000);
};

const alemania = (callback) => {
    setTimeout(() => {
        console.log('Alemania');
        callback();
    }, 4000);
};

const corea = () => {
    setTimeout(() => {
        console.log('Corea');
    }, 8000);
};

bogota();
madrid(() =>{
    alemania (() =>{
        corea(); 
    });
});
