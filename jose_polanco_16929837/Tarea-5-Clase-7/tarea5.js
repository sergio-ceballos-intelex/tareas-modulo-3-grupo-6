//Ejercicio de Bucle For con Arrays

/*Utiliza un bucle for para multiplicar cada número por 2 y 
almacenar el resultado en un nuevo array. Luego, imprime el nuevo array*/

let numeros = [1, 2, 3, 4, 5];
let newNumbers = [];

for (let i = 0; i < numeros.length; i++) {
    newNumbers.push(numeros[i]*2);
}

console.log("Ejercicio 1: ", newNumbers);


/*Utiliza un bucle for para encontrar el producto con el precio más bajo. Luego, 
imprime el nombre y el precio de ese producto.*/

let productos = [
    { nombre: "Camisa", precio: 20 },
    { nombre: "Pantalón", precio: 30 },
    { nombre: "Zapatos", precio: 50 },
  ];

let productName = productos[0]["nombre"];
let lowPrice = productos[0]["precio"];

for (let i = 0; i < productos.length; i++) {

    if(productos[i]["precio"] < lowPrice){
        productName = productos[i]["nombre"];
        lowPrice = productos[i]["precio"];
    }
}

console.log("Ejercicio 2: ", productName, lowPrice);


/* Utiliza un bucle for para incrementar la edad de cada 
estudiante en 1 año. Luego, imprime el array modificado.*/

let estudiantes = [
    { nombre: "Juan", edad: 20 },
    { nombre: "María", edad: 22 },
    { nombre: "Pedro", edad: 19 },
  ];

for (let i = 0; i < estudiantes.length; i++) {
    //console.log(estudiantes[i]["edad"]);
    estudiantes[i]["edad"] = estudiantes[i]["edad"]+1;
}

console.log("Ejercicio 3: ", estudiantes);


/* Utiliza un bucle for para encontrar todos los libros cuyo título 
contenga la palabra "El". Luego, imprime estos libros.*/

let libros = [
    { titulo: "El principito", autor: "Antoine de Saint-Exupéry" },
    { titulo: "Don Quijote de la EL Mancha", autor: "Miguel de Cervantes" },
    { titulo: "Cien años de el soledad", autor: "Gabriel García Márquez" },
  ];

const wordSearch = "el";

for (let i = 0; i < libros.length; i++) {
    //console.log(libros[i]["titulo"].toLowerCase().includes(wordSearch));
    if(libros[i]["titulo"].toLowerCase().includes(wordSearch)){
        console.log("Nombre: ", libros[i]["titulo"], "Autor: ", libros[i]["autor"]);
    }
}


/*Utiliza un bucle for para concatenar frutas2 al final de frutas1. 
Luego, imprime el array resultante.*/

let frutas1 = ["Manzana", "Plátano", "Naranja"];
let frutas2 = ["Fresa", "Uva", "Piña"];

for (let i = 0; i < frutas2.length; i++) {
    frutas1.push(frutas2[i]);
}

console.log(frutas1);
