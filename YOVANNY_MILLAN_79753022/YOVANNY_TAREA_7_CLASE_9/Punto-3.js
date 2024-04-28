// Función para filtrar números pares y llamar a un callback con el resultado
function filtrarPares(numeros, callback) {
    let newArray=numeros.filter(numero=>numero%2===0);
    console.log(newArray);
    return newArray;
  }
  
  // Callback para mostrar los números pares en la consola
  function mostrarPares(numerosPares) {
    console.log(numerosPares);
  }
  
  // Array de números de ejemplo
  const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  
  // Llamar a la función filtrarPares y pasar el callback mostrarPares
  filtrarPares(numeros, mostrarPares);