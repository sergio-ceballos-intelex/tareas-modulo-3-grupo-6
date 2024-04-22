let number = Number(prompt("Ingrese un numero"));
let esPrimo = true

if(number <= 1){
    esPrimo = false
}else{
    for(i = 2; i < number / 2; i++);
        if(number % i === 0){
            esPrimo = false
        }
}


if(esPrimo){
    document.write("El numero ",number," es primo")
}else{
    document.write("El numero ",number," no es primo")
}