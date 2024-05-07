// ejercicio 1

let numeros = [1, 2, 3, 4, 5];
let multiplicar = [];
for (let i = 0; i < numeros.length; i++) {
  multiplicar.push(numeros[i] * 2);
}
console.log(multiplicar);

// ejercicio 2

let productos = [
  { nombre: "Camisa", precio: 20 },
  { nombre: "Pantalón", precio: 30 },
  { nombre: "Zapatos", precio: 50 },
];

let productoMasBarato = productos[0];

for (let i = 1; i < productos.length; i++) {
  if (productos[i].precio < productoMasBarato.precio) {
    productoMasBarato = productos[i];
  }
}
console.log("producto mas barato");
console.log("nombre: ", productoMasBarato.nombre);
console.log("precio: ", productoMasBarato.precio);

// ejercicio 3
let estudiantes = [
  { nombre: "Juan", edad: 20 },
  { nombre: "María", edad: 22 },
  { nombre: "Pedro", edad: 19 },
];

for (let i = 0; i < estudiantes.length; i++) {
  estudiantes[i].edad++;
}
console.log(estudiantes);

//ejercicio 4
let libros = [
  { titulo: "El principito", autor: "Antoine de Saint-Exupéry" },
  { titulo: "Don Quijote de la Mancha", autor: "Miguel de Cervantes" },
  { titulo: "Cien años de soledad", autor: "Gabriel García Márquez" },
];

for (i = 0; i < libros.length; i++) {
  if (libros[i].titulo.includes("El")) {
    console.log(libros[i]);
  }
}

//ej4ercicio 5
let frutas1 = ["Manzana", "Plátano", "Naranja"];
let frutas2 = ["Fresa", "Uva", "Piña"];

for (let i = 0; i < frutas2.length; i++) {
  frutas1.push(frutas2[i]);
}
console.log(frutas1);
