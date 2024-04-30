let numeros = [3, 1, 2, 3, 4, 5];


let numeros2 = [];
for (let i = 0; i < numeros.length; i ++) {
     let element = numeros[i] * 2;
     numeros2.push(element);
    
}
console.log("Nuevo array: numeros2 =", numeros2 );

//caso 2 foreach

let numeros3 = [];
numeros.forEach(function(element) {
     let element1 = element * 2;
     numeros3.push(element1);

})
console.log("Nuevo array: numeros3 =", numeros3 );

