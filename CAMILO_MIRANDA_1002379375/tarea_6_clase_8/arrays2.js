/* Punto 1: Obteniendo estadisticas de productos: Dado el siguiente array de productos.

    
Utilizando filter, genera un nuevo array que contenga los productos en stock (todos los productos cuyo stock es mayor a cero).
Utilizando map, genera un nuevo array con solo los nombres de los productos, ejemplo ["Camiseta", "Pantalón", "Zapatos", "Bufanda" ]
  (Opcional) Escribe un programa que calcule el precio total de los productos disponibles, para ello debes recorrer todos los productos y obtener la suma de el precio de todos ellos */

const productos = [
  { nombre: "Camiseta", precio: 20, stock: 10 },
  { nombre: "Pantalón", precio: 30, stock: 5 },
  { nombre: "Zapatos", precio: 50, stock: 0 },
  { nombre: "Bufanda", precio: 15, stock: 8 },
];

const productosEnStock = productos.filter((producto) => producto.stock > 0);
console.log("productos en stock: ", productosEnStock);

const nombreProducto = productos.map((producto) => producto.nombre);
console.log("nombre de productos", nombreProducto);

const precioTotal = productos.reduce((total, producto) => {
  return producto.stock > 0 ? total + producto.precio : total;
}, 0);

console.log("precio total: ", precioTotal);
console.log("----------------");

/*Punto 2: Acceso y Modificación Básica de Datos: Crea un array llamado estudiantes que contenga objetos representando a tres estudiantes. Ejemplo
Cada objeto debe tener las siguientes propiedades: nombre, edad, y promedio.
Imprime en la consola el nombre del segundo estudiante.
Actualiza la edad del primer estudiante a 25 años. Imprime en la consola la información completa del primer estudiante después de la actualización.
*/

const estudiantes = [
  { nombre: "Camilo", edad: 33, promedio: 10 },
  { nombre: "Juan", edad: 30, promedio: 6 },
  { nombre: "Andres", edad: 29, promedio: 8.7 },
];

console.log(estudiantes[1].nombre);

estudiantes[0].edad = 25;

console.log("informacion completa y actualizada estudiante 1", estudiantes[0]);

/*Punto 3: Cálculo de Estadísticas Básicas: Calcula la suma de las edades de todos los estudiantes en el array (puedes utilizar un map o foreach).
Calcula el promedio de edad de los estudiantes.
Imprime en la consola tanto la suma como el promedio de edad de los estudiantes. */

let sumaEdades = 0;

estudiantes.forEach((estudiante) => {
  sumaEdades += estudiante.edad;
});

const promedioEdad = sumaEdades / estudiantes.length;

console.log("suma de edades de los estudiantes :", sumaEdades);
console.log("promedio de edades de los estudiantes :", promedioEdad);

console.log("-------------");

/* Punto 4: Búsqueda y Filtrado de Datos: Utiliza filter para encontrar al estudiante con el promedio más alto en el array.

Imprime en la consola el nombre y la edad del estudiante con el promedio más alto.
Filtra los estudiantes mayores de 20 años en un nuevo array llamado estudiantesMayores.
Imprime en la consola la información completa de los estudiantes mayores de 20 años. */

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

const estudiantePromedioMasAlto = estudiantes2.reduce((prev, current) =>
  prev.promedio > current.promedio ? prev : current
);
console.log(
  `Estudiante promedio mas alto: ${estudiantePromedioMasAlto.nombre}, ${estudiantePromedioMasAlto.edad} años`
);

const estudiantesMayores20 = estudiantes2.filter(
  (estudiante) => estudiante.edad > 20
);
console.log("los estudiantres mayores de 20 años son: ");
estudiantesMayores20.forEach((estudiante) => {
  console.log(estudiante);
});
