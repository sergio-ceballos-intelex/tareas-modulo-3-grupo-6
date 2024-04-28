//Tarea ES6 Arrays

/*Practicar la manipulación de arrays y objetos en JavaScript de manera progresiva
 utilizando los metodos vistos en clase (map, filter, foreach):*/

/*
1. Utilizando filter, genera un nuevo array que contenga los productos en stock 
(todos los productos cuyo stock es mayor a cero).
2. Utilizando map, genera un nuevo array con solo los nombres de los productos, 
ejemplo ["Camiseta", "Pantalón", "Zapatos", "Bufanda" ]
3. (Opcional) Escribe un programa que calcule el precio total de los productos 
disponibles, para ello debes recorrer todos los productos y obtener la suma de 
el precio de todos ellos*/

const productos = [
    { nombre: "Camiseta", precio: 20, stock: 10 },
    { nombre: "Pantalón", precio: 30, stock: 5 },
    { nombre: "Zapatos", precio: 50, stock: 0 },
    { nombre: "Bufanda", precio: 15, stock: 8 },
];

/*filter(): Retorna un nuevo array con todos los elementos que pasan una 
condición proporcionada por una función*/

const greaterThanZero = productos.filter(producto => producto.stock > 0);
console.log("Respuesta Ejercicio 1, caso 1: ARRAY MAYOR A CERO ", greaterThanZero);


const nameProducts = productos.map(producto => producto.nombre);
console.log("\nRespuesta Ejercicio 1, caso 2: NUEVO ARRAY NOMBRES ", nameProducts);

let addAllPrice = 0;
productos.forEach((producto) => {
    
    if(producto.stock > 0){
        addAllPrice += producto.precio;
    }
});

console.log("\nRespuesta Ejercicio 1, caso 3: PRECIO TOTAL ", addAllPrice);



/*Punto 2: Acceso y Modificación Básica de Datos: 
Crea un array llamado estudiantes que contenga objetos representando a tres estudiantes. 
Ejemplo*/

const estudiantesArray = [
    { nombre: "Camilo", edad: 33, promedio: 10 },
    { nombre: "Juan", edad: 30, promedio: 6 },
    { nombre: "Andres", edad: 29, promedio: 8.7 },
];

/*
1. Cada objeto debe tener las siguientes propiedades: nombre, edad, y promedio.
2. Imprime en la consola el nombre del segundo estudiante.
3. Actualiza la edad del primer estudiante a 25 años. Imprime en la consola la 
información completa del primer estudiante después de la actualización.*/

const estudiantes = estudiantesArray.map(estudiante => ({
    nombre: estudiante.nombre,
    edad: estudiante.edad,
    promedio: estudiante.promedio
}));

console.log("\n\nRespuesta Ejercicio 2, caso 1: OBJETO ", estudiantes);

console.log("\nRespuesta Ejercicio 2, caso 2: NOMBRE 2D ESTUDIANTE ", estudiantes[1].nombre);

let age = estudiantes[0].edad;
estudiantes[0].edad = age + 25;

console.log("\nRespuesta Ejercicio 2, caso 3: EDAD + 25 ", estudiantes[0].edad);
console.log(estudiantes);


/*Punto 3: 
Cálculo de Estadísticas Básicas: Calcula la suma de las edades de todos los 
estudiantes en el array (puedes utilizar un map o foreach).

1. Calcula el promedio de edad de los estudiantes.
2. Imprime en la consola tanto la suma como el promedio de edad de los estudiantes.*/

let addAllAge = 0;

estudiantes.forEach((estudiante) => {
    //console.log(estudiante.edad);
    addAllAge += estudiante.edad;
});

let averageStudents = addAllAge/estudiantes.length;

console.log("\nRespuesta Ejercicio 3, caso 1: PROMEDIO ", averageStudents)

console.log("\nRespuesta Ejercicio 3, caso 2: SUMA ", addAllAge, "PROMEDIO ", averageStudents)


/*Punto 4: 

1. Búsqueda y Filtrado de Datos: Utiliza filter para encontrar al 
estudiante con el promedio más alto en el array.
2. Imprime en la consola el nombre y la edad del estudiante con el promedio más alto.
3. Filtra los estudiantes mayores de 20 años en un nuevo array llamado estudiantesMayores.
4. Imprime en la consola la información completa de los estudiantes mayores de 20 años.*/


const estudiantes2 = [
    {
      nombre: "Ana",
      edad: 20,
      promedio: 85,
      genero: "Femenino",
      carrera: "Ingeniería Civil",
      ciudad: "Bogotá",
    },
    {
      nombre: "Juan",
      edad: 22,
      promedio: 78,
      genero: "Masculino",
      carrera: "Medicina",
      ciudad: "Medellín",
    },
    {
      nombre: "María",
      edad: 21,
      promedio: 90,
      genero: "Femenino",
      carrera: "Administración de Empresas",
      ciudad: "Cali",
    },
    {
      nombre: "Pedro",
      edad: 23,
      promedio: 82,
      genero: "Masculino",
      carrera: "Derecho",
      ciudad: "Barranquilla",
    },
    {
      nombre: "Laura",
      edad: 24,
      promedio: 88,
      genero: "Femenino",
      carrera: "Arquitectura",
      ciudad: "Cartagena",
    },
    {
      nombre: "Carlos",
      edad: 20,
      promedio: 75,
      genero: "Masculino",
      carrera: "Ingeniería de Sistemas",
      ciudad: "Santa Marta",
    },
    {
      nombre: "Sofía",
      edad: 22,
      promedio: 95,
      genero: "Femenino",
      carrera: "Psicología",
      ciudad: "Pereira",
    },
  ];


/*Profe este la verdad me todo buscarlo por chatGPT porque no lo entendi y me indico que 
el mejor metodo para hacer este proceso no es filter si no reduce*/

const highestAverage = estudiantes2.reduce((max, estudiante) => estudiante.promedio > max.promedio ? estudiante : max);
console.log("\n\nRespuesta Ejercicio 4, caso 1: ESTUDIANTE PROMEDIO MAS ALTO ", highestAverage);

console.log("\nRespuesta Ejercicio 4, caso 2: NOMBRE Y EDAD ESTUDIANTE PROM + ALTO ", highestAverage.nombre, highestAverage.edad);

const estudiantesMayores = estudiantes2.filter(estudiante => estudiante.edad > 20);
console.log("\nRespuesta Ejercicio 4, caso 3 y 4: ESTUDIANTES MAYORES A 20 AÑOS ", estudiantesMayores);