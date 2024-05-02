function sumarArreglo(numeros, callback) {
    let suma=0;
    for(let i=0;i<numeros.length;i++){
        suma=suma+numeros[i];
    }
    callback(suma);
  }
  const numeros = [1, 2, 3, 4, 5];
  sumarArreglo(numeros, function (resultado) {
    console.log(resultado); // Debería imprimir 15
  });
