//Punto 1: Obteniendo estadísticas de productos: Dado el siguiente array de productos.

const productos = [
    { nombre: "Camiseta", precio: 20, stock: 10 },
    { nombre: "Pantalón", precio: 30, stock: 5 },
    { nombre: "Zapatos", precio: 50, stock: 0 },
    { nombre: "Bufanda", precio: 15, stock: 8 },
];
//Utilizando filter, genera un nuevo array que contiene los productos en stock (todos los productos cuyo stock es mayor a cero).
const productFilter = productos.filter(producto => producto.stock>0);
console.log("productos cuyo stock es mayor a cero",productFilter);
//Utilizando map, genera un nuevo array con solo los nombres de los productos, ejemplo["Camiseta", "Pantalón", "Zapatos", "Bufanda" ]
const nameProduct = productos.map(producto=>producto.nombre);
console.log("array con solo los nombres de los productos",nameProduct);
//(Opcional) Escribe un programa que calcule el precio total de los productos disponibles, para ello debes recorrer todos los productos y obtener la suma del precio de todos ellos.
let total =0;
const precioProductos = productos.forEach(producto=>{
    total+=producto.precio*producto.stock
});
console.log("precio total de los productos disponibles ",total);

//Punto 2: Acceso y Modificación Básica de Datos: Crea un array llamado estudiantes que contiene objetos que representan a tres estudiantes. Ejemplo
const estudiantes = [
    { nombre: "Camilo", edad: 33, promedio: 10 },
    { nombre: "Juan", edad: 30, promedio: 6 },
    { nombre: "Andres", edad: 29, promedio: 8.7 },
];
//Imprime en la consola el nombre del segundo estudiante.
console.log("nombre del segundo estudiante es: ",estudiantes[1].nombre);
//Actualiza la edad del primer estudiante a 25 años. Imprima en la consola la información completa del primer estudiante después de la actualización.
estudiantes[0].edad=25;
console.log("Datos actualizados del primer estudiante",estudiantes[0]);
//Punto 3: Cálculo de Estadísticas Básicas: Calcula la suma de las edades de todos los estudiantes en el array (puedes utilizar un mapo foreach).
let edadTotal =0;
const edadesTotales = estudiantes.forEach(edades=>{
    edadTotal+=edades.edad;
});
//Calcula el promedio de edad de los estudiantes.
const promedioEdad = ()=>{return edadTotal/estudiantes.length};
//Imprime en la consola tanto la suma como el promedio de edad de los estudiantes.
console.log("La suma total de las edades de los estudiantes es ", edadTotal, " años");
console.log("El promedio edad de los estudiantes es ", promedioEdad(), " años");
//Punto 4: Búsqueda y Filtrado de Datos: Utiliza filter para encontrar al estudiante con el promedio más alto en el array.
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
//Imprime en la consola el nombre y la edad del estudiante con el promedio más alto.
let promedioMaximo=estudiantes2[0].promedio;
let estudiantePromedioMax;
estudiantes2.forEach(estudiante=>{
    if (promedioMaximo<estudiante.promedio){
        promedioMaximo=estudiante.promedio;
        estudiantePromedioMax=estudiante;
    }
})
console.log("El nombre del estudiante del promedio mas alto es: ",estudiantePromedioMax.nombre," y su edad es: ",estudiantePromedioMax.edad, " años");
//Filtra a los estudiantes mayores de 20 años en un nuevo array llamado estudiantesmayores.
const estudiantesMayores = estudiantes2.filter(estudiante=>estudiante.edad>20);
//Imprime en la consola la información completa de los estudiantes mayores de 20 años.
console.log("Los estudiantes mayores de 20 años son: ",estudiantesMayores);