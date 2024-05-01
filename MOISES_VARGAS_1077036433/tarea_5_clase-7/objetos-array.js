/* PROMER PUNTOS
Dado el siguiente array de números:
let numeros = [1, 2, 3, 4, 5];
Utiliza un bucle for para multiplicar cada número por 2 y almacenar el resultado en un nuevo array. Luego, imprime el nuevo array. */

let numeros = [1, 2, 3, 4, 5];
let numerosPor2 =[];

for (let index = 0; index < numeros.length; index++) {
    const element = numeros[index];
    numerosPor2.push(element * 2);
    
}

console.log(numeros);
console.log(numerosPor2);
console.log("___________________________");

/* SEGUNDO PUNTO
Dado el siguiente array de objetos que representan estudiantes:
let estudiantes = [
  { nombre: "Juan", edad: 20 },
  { nombre: "María", edad: 22 },
  { nombre: "Pedro", edad: 19 },
];
Utiliza un bucle for para incrementar la edad de cada estudiante en 1 año. Luego, imprime el array modificado. */

let estudiantes = [
    { nombre: "Juan", edad: 20 },
    { nombre: "María", edad: 22 },
    { nombre: "Pedro", edad: 19 },
  ];
  
  for (let index = 0; index < estudiantes.length; index++) {
    let element = estudiantes[index].edad;
    estudiantes[index].edad = element + 1;   
  }
  console.log(estudiantes);
  console.log("___________________________");

  /* TRECER PUNTO 
  Dado el siguiente array de objetos que representan libros:

let libros = [
  { titulo: "El principito", autor: "Antoine de Saint-Exupéry" },
  { titulo: "Don Quijote de la Mancha", autor: "Miguel de Cervantes" },
  { titulo: "Cien años de soledad", autor: "Gabriel García Márquez" },
];
Utiliza un bucle for para encontrar todos los libros cuyo título contenga la palabra "El". Luego, imprime estos libros. */

let libros = [
    { titulo: "El principito", autor: "Antoine de Saint-Exupéry" },
    { titulo: "Don Quijote de la Mancha", autor: "Miguel de Cervantes" },
    { titulo: "Cien años de soledad", autor: "Gabriel García Márquez" },
  ];

  for (let index = 0; index < libros.length; index++) {
    const element = libros[index].titulo;
    if (element.startsWith('El')){
        console.log(element);
    } 
  }
  console.log("___________________________");

  /* CUARTO PUNTO
  Dados los siguientes arrays de frutas:
let frutas1 = ["Manzana", "Plátano", "Naranja"];
let frutas2 = ["Fresa", "Uva", "Piña"];
Utiliza un bucle for para concatenar frutas2 al final de frutas1. Luego, imprime el array resultante. */

let frutas1 = ["Manzana", "Plátano", "Naranja"];
let frutas2 = ["Fresa", "Uva", "Piña"];

for (let index = 0; index < frutas2.length; index++) {
    frutas1.push(frutas2[index]);    
}
console.log(frutas1);
