//EJERCICIO #1
let numeros = [1, 2, 3, 4, 5];
let arrayResult = [];

numeros.forEach(element => {
   const multilpicacion = element * 2;
   arrayResult.push(multilpicacion);
});

console.log(arrayResult);

//EJERCICIO #2
let productos = [
    { nombre: "Camisa", precio: 20 },
    { nombre: "Pantalón", precio: 30 },
    { nombre: "Zapatos", precio: 50 },
  ];

let productoBarato = productos[0]; 

productos.forEach(element => {
    if(element.precio < productoBarato.precio){
        productoBarato = element;
    }  
});  

console.log(productoBarato);

//EJERCICIO #3
let estudiantes = [
    { nombre: "Juan", edad: 20 },
    { nombre: "María", edad: 22 },
    { nombre: "Pedro", edad: 19 },
  ];


estudiantes.forEach(element => { 
    let sumEdad = element.edad + 1
    element.edad = sumEdad
  });

console.log(estudiantes)

//EJERCICIO #4

let libros = [
    { titulo: "El principito", autor: "Antoine de Saint-Exupéry" },
    { titulo: "Don Quijote de la Mancha", autor: "Miguel de Cervantes" },
    { titulo: "Cien años de soledad", autor: "Gabriel García Márquez" },
  ];

let librosEl = []

libros.forEach(element => {
    if (element.titulo.startsWith('El')){
        librosEl.push(element)
    }
  });

console.log(librosEl)

//EJERCICIO #5

let frutas1 = ["Manzana", "Plátano", "Naranja"];
let frutas2 = ["Fresa", "Uva", "Piña"];
frutas2.forEach(element => {
    frutas1.push(element)
});
console.log(frutas1)
 




