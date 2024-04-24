let productos = [
    { nombre: "Camisa", precio: 20 },
    { nombre: "Pantalón", precio: 30 },
    { nombre: "Zapatos", precio: 50 },
  ];
let menor=productos[0].precio;
let articulo=productos[0].nombre;
for(let i=0;i<productos.length-1;i++){
    if (productos[i+1].precio<menor){
        menor=productos[i+1].precio;
        articulo=productos[i+1].nombre;
    }
};
console.log("Menor precio es: "+articulo+" Costo: "+menor);
