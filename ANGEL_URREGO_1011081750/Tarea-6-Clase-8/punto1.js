//Punto #1
const productos = [
    { nombre: "Camiseta", precio: 20, stock: 10 },
    { nombre: "Pantalón", precio: 30, stock: 5 },
    { nombre: "Zapatos", precio: 50, stock: 0 },
    { nombre: "Bufanda", precio: 15, stock: 8 },
];

// EJERCICIO#1 Productos con un stock mayor a 0
let stock = []
const filterStock = productos.filter(productos => {
    if(productos.stock > 0){
        stock.push(productos)
    }
});
console.log(stock);

// EJERCICIO#2 Nombre de los productos
let productsNames = []
const productName = productos.map(element => productsNames.push(element.nombre) );
console.log(productsNames);

// EJERCICIO#3 Precio total de los productos
let sumar = 0
productos.forEach(element => {
    sumar += element.precio;
});
console.log("El precio total de los productos es de:",sumar)