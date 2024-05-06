// Primer Punto

const productos = [
    { nombre: "Camiseta", precio: 20, stock: 10 },
    { nombre: "Pantalón", precio: 30, stock: 5 },
    { nombre: "Zapatos", precio: 50, stock: 0 },
    { nombre: "Bufanda", precio: 15, stock: 8 },
];

const newArray1 = productos.filter(number => number.stock);
console.log(newArray1);

const newArray2 = productos.map(product => product.nombre);
console.log(newArray2);

const precioTotal = productos.reduce((total, item) => {
    return total + item.precio ;
}, 0);
console.log(precioTotal);

// Segundo Punto

// const estudiantes = [
//     { 
//         nombre: "Camilo",
//         edad: 33, 
//         promedio: 10 
//     },
//     { 
//         nombre: "Juan", 
//         edad: 30, 
//         promedio: 6 
//     },
//     { 
//         nombre: "Andres", 
//         edad: 29, 
//         promedio: 8.7 
//     },
// ];

// let estudiante2 = estudiantes[1].nombre;
// console.log("Nombre del segundo estudiante", estudiante2);

// let estudiante1 = estudiantes[0].edad = 25;

// console.log("Informacion del primer estudiante", estudiantes[0]);

// Tercer Punto

// const estudiantes = [
//     { nombre: "Camilo", edad: 33, promedio: 10 },
//     { nombre: "Juan", edad: 30, promedio: 6 },
//     { nombre: "Andres", edad: 29, promedio: 8.7 },
// ];

// let sumaEdad = 0; 
//     estudiantes.forEach(estudiante => {
//     sumaEdad += estudiante.edad;
// });

// console.log(sumaEdad);

// let promedio = sumaEdad / estudiantes.length;
// console.log(promedio);

// Cuarto Punto

// const estudiantes = [
//     {
//       nombre: "Ana",
//       edad: 20,
//       promedio: 85,
//       genero: "Femenino",
//       carrera: "Ingeniería Civil",
//       ciudad: "Bogotá",
//     },
//     {
//       nombre: "Juan",
//       edad: 22,
//       promedio: 78,
//       genero: "Masculino",
//       carrera: "Medicina",
//       ciudad: "Medellín",
//     },
//     {
//       nombre: "María",
//       edad: 21,
//       promedio: 90,
//       genero: "Femenino",
//       carrera: "Administración de Empresas",
//       ciudad: "Cali",
//     },
//     {
//       nombre: "Pedro",
//       edad: 23,
//       promedio: 82,
//       genero: "Masculino",
//       carrera: "Derecho",
//       ciudad: "Barranquilla",
//     },
//     {
//       nombre: "Laura",
//       edad: 24,
//       promedio: 88,
//       genero: "Femenino",
//       carrera: "Arquitectura",
//       ciudad: "Cartagena",
//     },
//     {
//       nombre: "Carlos",
//       edad: 20,
//       promedio: 75,
//       genero: "Masculino",
//       carrera: "Ingeniería de Sistemas",
//       ciudad: "Santa Marta",
//     },
//     {
//       nombre: "Sofía",
//       edad: 22,
//       promedio: 95,
//       genero: "Femenino",
//       carrera: "Psicología",
//       ciudad: "Pereira",
//     },
//   ];

// let promedioAlto = estudiantes.filter((estudiante) => {
//     return estudiante.promedio > 90;
// });

// console.log(promedioAlto);

// let promedioAlto2 = estudiantes[6].nombre;
// let promedioAlto3 = estudiantes[6].edad;

// console.log("Estudiante promedio alto", "Nombre", promedioAlto2, "edad", promedioAlto3);

// let estudiantesMayores = estudiantes.filter(function(estudiante) {
//     return estudiante.edad > 20;
// }); 

// console.log(estudiantesMayores);