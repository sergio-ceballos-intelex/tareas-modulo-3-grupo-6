//PUNTO 1

console.log("PUNTO 1");

let multiplicacion = [];
let numeros = [1 , 2, 3, 4, 5];

for(let i = 0; i < numeros.length; i++ ){

    let resultado = 0
    resultado = numeros[i] * 2;

    multiplicacion.push(resultado);
    
}
console.log(multiplicacion);

console.log("---------------------------------");


//PUNTO 2

console.log("PUNTO 2");

let productos = [

    {nombre: "Camisa" , precio: 124 },
    {nombre: "Pantalon" , precio: 3 },
    {nombre: "Zapatos" , precio: 23},
];


let valorMenor = productos[0].precio;

let prenda = productos[0].nombre;

for(let i = 0; i < productos.length-1; i++){

    if (productos[i+1].precio < valorMenor){

        valorMenor = productos[i+1].precio;

        prenda = productos[i+1].nombre;
    }
    
};
console.log("El producto (" +prenda+ ") tiene el menor valor y es: " +valorMenor);

console.log("---------------------------------");


//PUNTO 3

console.log("PUNTO 3");


let estudiantes = [

    {nombre: "Juan" , edad: 20},
    {nombre: "María" , edad: 22},
    {nombre: "Pedro" , edad: 19},

]

console.log("Lista antes:");
console.log(estudiantes)

for( let i = 0; i < estudiantes.length; i++){

    estudiantes[i].edad += 1;

}
console.log("Lista despues:");
console.log(estudiantes);

console.log("---------------------------------");


//PUNTO 4

console.log("PUNTO 4");

let libros = [
    { titulo: "EL principito", autor: "Antonie de Sain-Exupéry" },
    { titulo: "Don Quijote de la mancha", autor: "Miguel de cervantes" },
    { titulo: "Cien años de soledad", autor: "Gabriel Garcia Marquez" },
]


let newTittle = [];
for(let i = 0; i < libros.length; i++){

    let letra = libros[i].titulo;

    if (letra.startsWith("E")){
        newTittle.push(letra);
    }

}
console.log("El nuevo array es: " +newTittle);



//PUNTO 5

console.log("----------------------");
console.log("PUNTO 5");


let frutas1 = ["Manzana" , "platano" , "Naranja"];

let frutas2 = ["Fresas" , "Uva" , "Piña"];


for(let i = 0; i < frutas2.length; i++){

    frutas1.push(frutas2[i]);

}

console.log(frutas1);