

// PUNTO 1
//Programa para calcular descuentos 

let valorManz = 2000;
console.log("Ingrese el valor del kilo de manzanas: (" + valorManz + ")");

let kilosManz = 6;
console.log("Ingrese kilos comprados: (" + kilosManz + ")");


let valorPagar = 0;

if(kilosManz <= 2){

    valorPagar = valorManz * kilosManz;

}else if(kilosManz > 2,1 && kilosManz <= 5){

    valorPagar = (valorManz * kilosManz) - (valorManz * kilosManz * 0,10);

}else if(kilosManz > 5,1 && kilosManz <= 10){

    valorPagar = (valorManz * kilosManz) - (valorManz * kilosManz * 0,15);

}else{

    valorPagar = (valorManz * kilosManz) - (valorManz * kilosManz * 0,20);
}

console.log("El valor a pagar es: " + valorPagar);


//PUNTO 2
//CALCULAR SI NUMERO ES PRIMO O NO

 const numPri1 = 3;
console.log("Porfavor ingrese numero: 1.(" + numPri1 + ")");

const numPri2 = 0;
console.log("Porfavor ingrese numero: 2.(" + numPri2 + ")");

cont = 0;

while(cont = 0){

    if(numPri1 <= 1){

        console.log("El numero es igual a 0 y NO es primp");

    }else if( (numPri1 % 2) === 0 && (numPri1 % 1) === 0){

        console.log("El numero SI es primo");

    }else{
        console.log("NO es primo");
    }

    cont = 1;
}


cont1= 0;

while(cont1 <= 0){

    if(numPri2 <= 1){

        console.log("El numero es igual a 0 y NO es primp");

    }else if( (numPri2 % 2) === 0 && (numPri2 % 1) === 0){

        console.log("El numero SI es primo");

    }else{
        console.log("NO es primo");
    }

    cont = 1;
    
}


