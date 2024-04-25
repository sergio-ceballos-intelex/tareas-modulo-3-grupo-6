console.log("-------------EJERCICIO 1-----------------------");
let numeros = [1, 2, 3, 4, 5];
let dobles=[];
numeros.forEach((element)=> {
    element=element*2;
    dobles.push(element);
});
console.log(dobles);
/*-------------ejercicio 2----------------------- */
console.log("-------------EJERCICIO 2-----------------------");
let productos = [
    { nombre: "Camisa", precio: 20 },
    { nombre: "Pantalón", precio: 30 },
    { nombre: "Zapatos", precio: 50 },
];
let productoBarato = productos[0];//paso la posicion cero del array productos al nuevo array;
productos.forEach((producto)=>{
    if(productos.precio<productoBarato.precio){
        productoBarato=producto;
    }
})
console.log("El producto más barato es:", productoBarato.nombre);
console.log("Precio:", productoBarato.precio);
/*-------------ejercicio 3----------------------- */
console.log("-------------EJERCICIO 3-----------------------");
let estudiantes = [
    { nombre: "Juan", edad: 20 },
    { nombre: "María", edad: 22 },
    { nombre: "Pedro", edad: 19 },
];
estudiantes.forEach((estudiante)=>{
    estudiante.edad++;
})
console.log(estudiantes);
/*-------------ejercicio 4----------------------- */
console.log("-------------EJERCICIO 4-----------------------");
let libros = [
    { titulo: "El principito", autor: "Antoine de Saint-Exupéry" },
    { titulo: "Don Quijote de la Mancha", autor: "Miguel de Cervantes" },
    { titulo: "Cien años de soledad", autor: "Gabriel García Márquez" },
  ];
  let nuevoArrayLibros=[];
  libros.forEach((libro)=>{
    if (libro.titulo.startsWith('El')) {
        nuevoArrayLibros.push(libro);        
    }    
  })
  console.log(nuevoArrayLibros);
  /*-------------ejercicio 5----------------------- */
  console.log("-------------EJERCICIO 5-----------------------");
  let frutas1 = ["Manzana", "Plátano", "Naranja"];
  let frutas2 = ["Fresa", "Uva", "Piña"];
  let totalFrutas=[];
  /*Primera opcion usando bucle forEach */
  frutas2.forEach((fruta)=>{
    frutas1.push(fruta);
  })
  console.log(frutas1);
