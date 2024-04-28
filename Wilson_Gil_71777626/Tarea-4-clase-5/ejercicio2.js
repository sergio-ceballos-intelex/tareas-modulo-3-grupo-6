let numero= 89;

if(numero > 1) {
    let esPrimo = true;
    for(let i = 2; i <= Math.sqrt(numero); i++){
            if(numero % i === 0){
                esPrimo = false; 
                return;   
        }
    }
    if(esPrimo){
        console.log('El número ', numero, ' es primo');
    } else {
        console.log('El número ', numero, ' no es primo');
    }

}else {
    console.log('El número ', numero, ' no es primo');
}


