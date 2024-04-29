
/*Descripción: Crea una función que tome un arreglo de números y un callback, 
y llame al callback con el resultado de sumar todos los números del arreglo.*/

function sumarArreglo(n, callback) {
    /* Completa esta función para sumar todos los números del arreglo y 
    llamar al callback con el resultado*/
    let addAllNumber = 0;
    n.forEach(function(element) {
        addAllNumber += element;
    }); 

    return callback(addAllNumber);
}

const numeros1 = [1, 2, 3, 4, 5];

sumarArreglo(numeros1, function (resultado) {
console.log("Ejercicio 1: SUMATORIA CON CALLBACK ", resultado); // Debería imprimir 15
});  

/*
Descripción: Crea una función que tome un arreglo y un callback de filtro, 
y devuelva un nuevo arreglo con los elementos que pasan el filtro. Ejercicio:
*/

function filtrarArreglo2(arreglo, callbackFiltro) {
    const arregloFiltrado = arreglo.filter(callbackFiltro);
    return arregloFiltrado;
}

const numeros3 = [1, 2, 3, 4, 5];

const numerosPares3 = filtrarArreglo2(numeros3, function (numero) {
    return numero % 2 === 0;
});

console.log("Ejercicio 2: CALLBACK NUMEROS PARES ", numerosPares3); // Debería imprimir [2, 4]


/*
Descripción: Creea una función en JavaScript que filtre los números pares de un array y 
utilicen un callback para manejar el resultado.

Pasos a seguir:

1. Crea una función llamada filtrarPares que acepte dos parámetros: un array de números y un callback.
2. Dentro de la función filtrarPares, utiliza el método filter para filtrar los números pares del array.
3. Llama al callback pasado como parámetro con el array de números pares como argumento.
4. Implementa un callback llamado mostrarPares que acepte un parámetro numerosPares. Este callback debe imprimir los números pares en la consola.
*/

// Función para filtrar números pares y llamar a un callback con el resultado
function filtrarPares(numeros, callback) {
    // Tu codigo acá
    const numerosPares = numeros.filter(function(numero) {
        return numero % 2 === 0;
    });
    return callback(numerosPares);
  }
  
  // Callback para mostrar los números pares en la consola
  function mostrarPares(numerosPares) {
    // Tu codigo acá
    console.log("Ejercicio 3: MOSTRAR PARES ", numerosPares);
  }
  
  // Array de números de ejemplo
  const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  
  // Llamar a la función filtrarPares y pasar el callback mostrarPares
  filtrarPares(numeros, mostrarPares);


/*
Async Callbacks: Garantizar orden de ejecucion de tareas

Descripción: Tengo un viaje pendiente para hacer a Corea del Sur saliendo desde Bogotá y 
haciendo escalas en Madrid (donde me voy a demorar 3 horas en el aeropuerto) y despues en 
Frankfurt (donde me voy a demorar 4 horas) hasta que finalmente llegaré a Corea despues de 8 horas. 
Se debe crear un programa en javascript usando callbacks que me garantice el siguiente orden de escalas 
previamente mencionado. Cada hora podemos representarlo como 1000 milisegundos.

Bogota
Madrid -> 3 horas (3000 milisegundos)
Alemania -> 4 horas (4000 milisegundos)
Corea -> 8 horas (8000 milisegundos)
*/

// Async callbacks -> Se ejecutan cuando algo pasa (un evento ocurre)
const salida = () => console.log('Salida: Bogota');

const escala1 = (callback) => {
    setTimeout(() => {
        console.log('Escala 1 de 3 horas: Madrid');
        callback();
    }, 3000);
};

const escala2 = (callback) => {
    setTimeout(() => {
        console.log('Escala 2 de 4 horas: Alemania');
        callback();
    }, 4000);
};

const llegada = () => {
    setTimeout(() => {
        console.log('Llegada en 8 horas: Corea');
    }, 8000);
}

salida();
escala1(() => {
    escala2(() => {
        llegada();
    });
});
