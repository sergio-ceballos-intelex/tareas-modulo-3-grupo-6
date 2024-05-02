// primer punto

const array = [1, 2, 3, 4, 5];
const multiplicar = 2;

function operacion (array, multiplicar){
    for (let number = 0; number < array.length; number++) {
        array[number] *= multiplicar;
    }
    return array;
}

let resultado = operacion (array, multiplicar);
console.log("nuevo array", resultado);

// Segundo Punto

// let productos = [
//     { nombre: "Camisa", precio: 20 },
//     { nombre: "Pantalón", precio: 30 },
//     { nombre: "Zapatos", precio: 50 },
// ];

// let costoMenor = productos.filter(function (producto) {
//     if (producto.precio <= 20){
//         return true;
//     } else 
//         return false;
// });

// console.log(costoMenor);

// Tercer Punto

// let estudiantes = [
//     { nombre: "Juan", edad: 20 },
//     { nombre: "María", edad: 22 },
//     { nombre: "Pedro", edad: 19 },
// ];

// const modificar = estudiantes.map(item => {
//     item.edad = item.edad + 1
//     return item
// })

// console.log(modificar);

// Cuarto Punto

// let libros = [
//     { titulo: "El principito", autor: "Antoine de Saint-Exupéry" },
//     { titulo: "Don Quijote de la Mancha", autor: "Miguel de Cervantes" },
//     { titulo: "Cien años de soledad", autor: "Gabriel García Márquez" },
//   ];

// let busqueda = libros.find (item => item.titulo = "El principito")
//    console.log(busqueda);

// Quinto Punto

// let frutas1 = ["Manzana", "Plátano", "Naranja"];
// let frutas2 = ["Fresa", "Uva", "Piña"];

// const resultado = (frutas1.concat(frutas2));
// console.log(resultado);