//Ejercicio1

const productos = [
    { nombre: "Camiseta", precio: 20, stock: 10 },
    { nombre: "Pantalón", precio: 30, stock: 5 },
    { nombre: "Zapatos", precio: 50, stock: 0 },
    { nombre: "Bufanda", precio: 15, stock: 8 },
];
//
let producStock = productos.filter(pro => pro.stock >  0 );
//console.log(producStock);
//
let products = productos.map(pro => {
    return pro.nombre
});
//console.log(products);
//(Opcional)
let suma = 0;
producStock.forEach((pro)=>{
    suma += pro.precio * pro.stock;
})
//console.log(suma);
//2 ejercicio
const estudiantes = [
    { nombre: "Camilo", edad: 33, promedio: 10 },
    { nombre: "Juan", edad: 30, promedio: 6 },
    { nombre: "Andres", edad: 29, promedio: 8.7 },
];
//console.log(estudiantes[1].nombre);
estudiantes[0].edad = 25;
//console.log(estudiantes[0]);
//3 ejercicio
let sumaEdad = 0;

estudiantes.forEach((estu) => {
   sumaEdad += estu.edad;
});
//console.log(sumaEdad);

const promedioEdad = sumaEdad / estudiantes.length;
//console.log(promedioEdad);

//4 Ejercicio
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
    }, {
        nombre: "sebastian",
        edad: 22,
        promedio: 97,
        genero: "Femenino",
        carrera: "Psicología",
        ciudad: "Pereira",
      },
  ];

  let promedioMax = estudiantes2[0];

estudiantes2.forEach((estu) => {
    if (estu.promedio > promedioMax.promedio) {
        promedioMax = estu;  
    }
});

console.log("El estudiante con el promedio máximo es:", promedioMax.nombre, "y su edad es: ", promedioMax.edad);
//
let estudiantesMayores = estudiantes2.filter(estu => estu.edad > 20);
console.log(estudiantesMayores);