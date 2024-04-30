// Ejercicio 1: Crea una función que tome un arreglo de números y un callback,
// y llame al callback con el resultado de sumar todos los números del arreglo.
function sumarArreglo(numeros, callback) {
  // Completa esta función para sumar todos los números del arreglo y llamar al callback con el resultado
  let resultado = 0;
  for (let i = 0; i < numeros.length; i++) {
    resultado+=numeros[i];     
  }
  callback(resultado);   
}
const numeros = [1, 2, 3, 4, 5];
sumarArreglo(numeros, (resultado)=> {
  console.log("resultado de la suma es ",resultado); // Debería imprimir 15
});

//Ejercicio 2: Crear una función que tome un arreglo y un callback de filtro, y 
//devuelva un nuevo arreglo con los elementos que pasan el filtro. Ejercicio:

function filtrarArreglo(arreglo, callbackFiltro) {
    // Completa esta función para devolver un nuevo arreglo con los elementos que pasan el filtro
    const arregloFiltrado = [];
    for (let i = 0; i < arreglo.length; i++) {
      const elemento = arreglo[i];
      if (callbackFiltro(elemento)) {
        arregloFiltrado.push(elemento);
      }
    }
    return arregloFiltrado;
    
} 
const numerosPares = filtrarArreglo(numeros, function (numero) {
    return numero % 2 === 0;
});
console.log(numerosPares); // Debería imprimir [2, 4]

/*  Ejercicio 3: Crear una función en JavaScript que filtre los números pares de un array 
y utilicen un callback para manejar el resultado.
Crea una función llamada filtrarPares que acepte dos parámetros: un array de números y un callback.
Dentro de la función filtrarPares, utiliza el método filter para filtrar los números pares del array.
Llama al callback pasado como parámetro con el array de números pares como argumento.
Implementa un callback llamado mostrarPares que acepte un parámetro numerosPares. Este callback debe imprimir los números pares en la consola.
¡No olvides probar tu función llamando a filtrarPares y pasando mostrarPares como callback!*/
  
// Función para filtrar números pares y llamar a un callback con el resultado
function filtrarPares(numeros, callback) {
  // Tu codigo acá
  const numeroFiltrados = numeros.filter(numero=>numero % 2 === 0);
  callback(numeroFiltrados);
}
  
// Callback para mostrar los números pares en la consola
function mostrarPares(numerosPares) {
  // Tu codigo acá
  console.log(numerosPares);
}
// Array de números de ejemplo
const numeros1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// Llamar a la función filtrarPares y pasar el callback mostrarPares
filtrarPares(numeros1, mostrarPares);

/*Ejercicio 4: Tengo un viaje pendiente para hacer a Corea del Sur saliendo desde Bogotá horas y
haciendo escalas en Madrid (donde me voy a demorar 3 horas en el aeropuerto) y después en Frankfurt
(donde me voy a demorar 4) hasta que finalmente llegaré a Corea después de 8 horas. Se debe crear
un programa en javascript usando callbacks que me garantice el siguiente orden de escalas 
previamente mencionado. Cada hora podemos representarlo como 1000 milisegundos.
Bogotá
Madrid -> 3 horas (3000 milisegundos)
Alemania -> 4 horas (4000 milisegundos)
Corea -> 8 horas (8000 milisegundos)
*/
const escalaBogota=()=>(console.log("Saliendo de Bogotá"));
const escalaMadrid = (callback) => {
  setTimeout(() => {
    console.log("Estoy en Madrid, España");
    callback();
  }, 3000);

};
const escalaFrankfurt=(callback)=>{
  setTimeout (()=>{
    console.log("Estoy en Frankfurt, Alemania");
    callback();
  },4000);
}; 

const escalaCorea =()=>{
  setTimeout(()=>{
    console.log("Llegué a Corea")
  },8000);

};

escalaBogota();
escalaMadrid(()=>{
  escalaFrankfurt(()=>{
    escalaCorea();
  });
});
