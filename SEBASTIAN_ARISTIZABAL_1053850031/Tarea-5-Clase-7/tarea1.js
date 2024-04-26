//Ejercicio1:
let num = [1,2,3,4,5];
let newArray = [];
for(let i=0; i < num.length; i++){
    const multiplicar = num[i] * 2;
    newArray.push(multiplicar);
}
console.log(newArray);

//Ejercicio2:

let productos = [
    { nombre: "Camisa", precio: 20 },
    { nombre: "Pantalón", precio: 30 },
    { nombre: "Zapatos", precio: 50 },
];
let numeros = [];

for (let i = 0; i < productos.length; i++) {
    numeros.push(productos[i].precio);
}

let menorPrecio = Infinity; 


for (let j = 0; j < numeros.length; j++) {
    if (numeros[j] < menorPrecio) {
        menorPrecio = numeros[j];
    }
}

console.log("El número menor es:", menorPrecio); 


//Ejercicio3

let estudiantes = [
    { nombre: "Juan", edad: 20 },
    { nombre: "María", edad: 22 },
    { nombre: "Pedro", edad: 19 },
  ];

  for(let i = 0; i < estudiantes.length; i++){
   estudiantes[i].edad + 1;
  }
  console.log(estudiantes)
  

//Ejercicio4

let libros = [
    { titulo: "El principito", autor: "Antoine de Saint-Exupéry" },
    { titulo: "Don Quijote de la Mancha", autor: "Miguel de Cervantes" },
    { titulo: "Cien años de soledad", autor: "Gabriel García Márquez" },
];

let librosConEl = [];


for (let i = 0; i < libros.length; i++) {
    if (libros[i].titulo.includes("El")) {
        librosConEl.push(libros[i]);
    }
}

console.log(librosConEl);

//Ejercicio5
let frutas1 = ["Manzana", "Plátano", "Naranja"];
let frutas2 = ["Fresa", "Uva", "Piña"];

for(let i =0; i < frutas2.length; i++){
    frutas1.push(frutas2[i]);
}
console.log(frutas1);