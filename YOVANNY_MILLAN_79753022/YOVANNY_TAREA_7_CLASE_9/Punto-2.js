function filtrarArreglo(arreglo, callbackFiltro) {
    const newArray=[];
    for(let i=0;i<arreglo.length;i++){
        if (callbackFiltro(arreglo[i])){
            newArray.push(arreglo[i]);
        }
    }
    return newArray;    
  }
  
  const numeros = [1, 2, 3, 4, 5];
  const numerosPares = filtrarArreglo(numeros, function (numero) {
    return numero % 2 === 0;
  });
  console.log(numerosPares); // Debería imprimir [2, 4]