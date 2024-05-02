//tarea  con map
const productos = [
    { nombre: "Camiseta", precio: 20, stock: 10 },
    { nombre: "Pantalón", precio: 30, stock: 5 },
    { nombre: "Zapatos", precio: 50, stock: 0 },
    { nombre: "Bufanda", precio: 15, stock: 8 },
];

let producto2 = ["camisa","pantalon","zapatos","bufanda"];
const nuevoArray = producto2.map((nombre)=>{
    return nombre;
})
console.log(nuevoArray);

// tarea con filter
let stokdeproductos = [10, 5, 0,8]
const stokProductos = stokdeproductos.filter((num)=>{
       return num > 0;
})
console.log(stokProductos)

/*Cada objeto debe tener las siguientes propiedades: nombre, edad, y promedio.
Imprime en la consola el nombre del segundo estudiante.
Actualiza la edad del primer estudiante a 25 años. Imprime en la consola la información 
completa del primer estudiante después de la actualización.*/
const estudiantes = [
    { nombre: "Camilo", edad: 33, promedio: 10 },
    { nombre: "Juan", edad: 30, promedio: 6 },
    { nombre: "Andres", edad: 29, promedio: 8.7 },
];
let estudiante2 = ["camilo","juan","andres"]
var segundoNombre = estudiante2.find ((estudiante) => {
    return estudiante == "juan"
})
console.log(segundoNombre);

let edadCamilo = 33;
edad = 33-8;
console.log("la edad de camilo es ",edad)


/*Punto 3: Cálculo de Estadísticas Básicas: Calcula la suma de las edades de todos 
los estudiantes en el array (puedes utilizar un map o foreach).
- Calcula el promedio de edad de los estudiantes.
-Imprime en la consola tanto la suma como el promedio de edad de los estudiantes.*/


let edades = [33,30,29];
let suma = edades.reduce((a,n)=>(a += n, a), 0);
console.log (suma);
let promedio = suma/edades.length;
console.log(promedio)

/*Punto 4: Búsqueda y Filtrado de Datos: Utiliza filter para encontrar al estudiante 
con el promedio más alto en el array.

Imprime en la consola el nombre y la edad del estudiante con el promedio más alto.
Filtra los estudiantes mayores de 20 años en un nuevo array llamado estudiantesMayores.
Imprime en la consola la información completa de los estudiantes mayores de 20 años.*/
const estudiantes3 = [
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
]
/*Punto 4: Búsqueda y Filtrado de Datos: Utiliza filter para encontrar al estudiante 
con el promedio más alto en el array.

Imprime en la consola el nombre y la edad del estudiante con el promedio más alto.
Filtra los estudiantes mayores de 20 años en un nuevo array llamado estudiantesMayores.
Imprime en la consola la información completa de los estudiantes mayores de 20 años.*/
let promedioEstu = [95,75,88,82,90,78]
//const promedio2 =  promedioEstu.m ((prom) => prom < 100 )
console.log("el prome3dio mas alto es : " , Math.max(...promedioEstu))



let estudiantesMayores = [22,21,23,24,22]
const mayor= estudiantesMayores.every((num)=>num > 20)
console.log("todos son mayores de 20 ? ", mayor)

let estudiantesMayores1 = ["juan",22,"maria",21,"pedro",23,"laura",24,"sofia",22];
console.log(estudiantesMayores1);

