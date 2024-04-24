function numeroprimo(numero) {
    if(numero <= 0){
        return false
    }
    let contador = 0;
    for (var i = 1; i <= numero ; i++){
        if (numero % i === 0)  {
            contador ++ ;    
        }     
    }
    return contador === 2 ? true : false ;
}
console.log ("el numero 1 es :" , numeroprimo (1));
console.log ("el numero 2 es :" , numeroprimo (2));
console.log ("el numero 3 es :" , numeroprimo (3));
console.log ("el numero 4 es :" , numeroprimo (4));
console.log ("el numero 5 es :" , numeroprimo (5));
console.log ("el numero 6 es :" , numeroprimo (6));
console.log ("el numero 7 es :" , numeroprimo (7));
console.log ("el numero 8 es :" , numeroprimo (8));
console.log ("el numero 9 es :" , numeroprimo (9));
console.log ("el numero 10 es :" , numeroprimo (10));
