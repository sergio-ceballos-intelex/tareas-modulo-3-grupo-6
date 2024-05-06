const productos = [
    { nombre: "Camiseta", precio: 20, stock: 10 },
    { nombre: "Pantalón", precio: 30, stock: 5 },
    { nombre: "Zapatos", precio: 50, stock: 0 },
    { nombre: "Bufanda", precio: 15, stock: 8 },
];
//Utilizando filter, genera un nuevo array que contenga los productos en
// stock (todos los productos cuyo stock es mayor a cero).

const productos1 = productos.filter(prod => prod.stock > 0);
console.log(productos1);

//Utilizando map, genera un nuevo array con solo los nombres de los productos,
//ejemplo ["Camiseta", "Pantalón", "Zapatos", "Bufanda" ]

const productos2 = productos.map(prod => prod.nombre);
console.log(productos2);
//(Opcional) Escribe un programa que calcule el precio total de los productos disponibles, 
//para ello debes recorrer todos los productos y obtener la suma de el precio de todos ellos

let costoProductos = [];
for (let i=0; i< productos.length; i++) { 
        valor1 = productos[i].precio;
        cantidad = productos[i].stock;
        precioTotal = valor1 * cantidad;
        costoProductos.push(precioTotal);
        
        
}
console.log(costoProductos);
total = 0;
for ( let i = 0; i<costoProductos.length; i++) {
    total += costoProductos[i];
    
}
console.log('El costo total de los productos es:', total); 