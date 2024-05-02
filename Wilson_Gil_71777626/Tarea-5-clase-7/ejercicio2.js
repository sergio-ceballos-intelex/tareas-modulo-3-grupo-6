let productos = [
    { nombre: "Camisa", precio: 200 },
    { nombre: "Pantalón", precio: 100 },
    { nombre: "Zapatos", precio: 50 },
  ];

let lowCost = productos[0].precio;;
let pos = 0;
  for(let i = 1; i <  productos.length; i++){
    // lowCost = productos[i].precio;
   
        if(productos[i].precio < lowCost){
            lowCost = productos[i].precio;
            pos = i;
        }
        
    }
  

  console.log('Precio mas bajo', lowCost);
  console.log(productos[pos]);