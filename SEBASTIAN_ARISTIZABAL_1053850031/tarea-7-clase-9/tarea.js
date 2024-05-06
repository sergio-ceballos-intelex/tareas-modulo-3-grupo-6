//Ejercicio1:
/*
function sumarArreglo(numeros, callback) {
   let sumaArreglo = 0
   numeros.forEach(element => {
    sumaArreglo += element;
    return sumaArreglo;
   });
   callback(sumaArreglo);
  }
  const numeros = [1, 2, 3, 4, 5];
  sumarArreglo(numeros, function (resultado) {
    console.log(resultado); 
  });
  */
//Ejercicio2:
/*
function filtrarArreglo(arreglo, callbackFiltro) {
    const newArray = arreglo.filter(callbackFiltro)
    return newArray;
  };

  const numeros = [1, 2, 3, 4, 5];
  const numerosPares = filtrarArreglo(numeros, function (numero) {
    return numero % 2 === 0;
  });
  console.log(numerosPares); // Debería imprimir [2, 4]
  */
 //Ejercicio3:
 /*
 function filtrarPares(numeros, callback) {
   const newArray = numeros.filter(numero => numero % 2 === 0)
   callback(newArray);
  }
  function mostrarPares(numerosPares) {
    console.log(numerosPares);
  }
  const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  
  filtrarPares(numeros, mostrarPares);
  */
 //Ejercicio4:
 function viaje() {
    console.log("Saliendo de Bogotá...");
    EscalaMadrid(function() {
        EscalaFrankfurt(function() {
            DestinoCorea();
        });
    });
}

function EscalaMadrid(callback) {
    setTimeout(function() {
        console.log("Saliendo de Madrid");
        callback();
    }, 3000);
}

function EscalaFrankfurt(callback) {
    setTimeout(function() {
        console.log("Saliendo de Alemania");
        callback(); 
    }, 4000);
}

function DestinoCorea() {
    setTimeout(function() {
        console.log("Llegando a Corea");
    }, 8000);
}

viaje(); 
