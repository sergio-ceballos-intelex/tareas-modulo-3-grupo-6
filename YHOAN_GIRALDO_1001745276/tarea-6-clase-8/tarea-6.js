// PUNTO 1 Obteniendo estadísticas de productos

console.log("---------------------------------------");
console.log("PUNTO 1");

const productos = [

    {nombre: "Camiseta",  precio: 20,  stock: 10},
    {nombre: "Pantalon",  precio: 30,  stock: 5},
    {nombre: "Zapatos",  precio: 50,  stock: 0},
    {nombre: "Bufanda",  precio: 15,  stock: 8},

]

// punto 1.1

const stockProductos = productos.filter(num => num.stock > 0);
console.log(stockProductos);

//punto 1.2

const nombreProductos = productos.map( num => { return num.nombre } );
console.log(nombreProductos);

//punto 1.3


let totalPrecioProductos = 0;

for(let i = 0; i < productos.length; i++) {
  
    totalPrecioProductos = totalPrecioProductos + productos[i].precio;

   if ( i === productos.length - 1){

     console.log("El valor total de los productos es: " + totalPrecioProductos);

   }

}


console.log("------------------------------------------");
console.log("PUNTO 2");

//PUNTO 2 Acceso y Modificación Básica de Datos

const estudiantes = [

    { nombre: "Camilo", edad: 33, promedio: 10 },
    { nombre: "Juan", edad: 30, promedio: 6 },
    { nombre: "Andres", edad: 29, promedio: 8 },

];


// punto 2.1
const nombreSegundo = estudiantes[1].nombre;
console.log("El Nombre del segundo puesto es: " + nombreSegundo);

//punto 2.2

console.log("La edad inicial del primer dato es: " + estudiantes[0].edad);

estudiantes[0].edad = 98;

const edadActualizada = estudiantes[0].edad;
console.log("La edad actualizada del primer dato es: " + edadActualizada);




console.log("------------------------------------------");
console.log("PUNTO 3");

//PUNTO 3  Cálculo de Estadísticas Básicas

let sumaEdad = 0;
let contador = 0;

estudiantes.forEach(objeto => {
    sumaEdad += objeto.edad;
    contador ++;
})


console.log("La suma de edad es: " + sumaEdad);


//punto 3.1
let promedio = sumaEdad / contador;
console.log("El promedio de edad es: " + promedio);





console.log("------------------------------------------");
console.log("PUNTO 4");


//PUNTO 4 Búsqueda y Filtrado de Datos

const estudiantesPunto4 = [
    {
      nombre: "Ana",
      edad: 19,
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
      edad: 17,
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


 
  //punto 4 Promedio mas alto

  let max = 0;
  let posicion = 0;

  estudiantesPunto4.forEach((objeto, index) => {

    if (max < objeto.promedio){
        
        max = objeto.promedio;
        posicion = index;
    }

  })


  //punto 4.1
  console.log("El promedio mas alto es " + max);

  //punto 4.2
  console.log("El estudiante con el promedio alto es: " + estudiantesPunto4[posicion].nombre + " y tiene: " +  estudiantesPunto4[posicion].edad + " años");

  //punto 4.3
  const estudiantesMayores = estudiantesPunto4.filter(num => num.edad > 20);
  console.log(estudiantesMayores);


 

  //---------------------------------------------------------------------------

 /*
  
  
  //EJERCICIO #2 Y #3
  
  const Age20 = estudiantes.filter(element => element.edad > 20 )
  
  console.log(Age20)
*/