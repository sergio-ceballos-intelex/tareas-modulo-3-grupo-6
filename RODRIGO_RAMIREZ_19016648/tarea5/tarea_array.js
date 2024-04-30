let productos = [
    { nombre: "Camisa", precio: 20},
    {nombre: "Pantalon", precio: 30},
    {nombre: "Zapatos", precio: 50},
    
];
let precios = [], menor = 0;
for (let i = 0; i<productos.length; i++) {
    valor = productos[i].precio;
    precios.push(valor);
    menor = Math.min.apply(null, precios);
    if (productos[i].precio === menor)
    console.log('El producto con el precio mas bajo es :', productos[i]);
    
}
       
let varMin=productos[0].precio;  
let varIndex=0;      
productos.forEach((objeto,index)=>{ 

 if(objeto.precio<=varMin){
    varMin=objeto.precio;
     varIndex=index;
     //console.log('**varMin: ' + varMin + '**varIndex: ' + varIndex ); 
 }
});

console.log('Producto de menor Costo: ' + productos[varIndex].nombre + ' $ '+ productos[varIndex].precio );


