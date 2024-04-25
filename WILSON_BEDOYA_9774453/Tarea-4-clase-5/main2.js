const number = Number(prompt("Ingrese un numero"));
let truePrimo=(number)=>{
    if (number<=1) {
        return document.write("numero no es primo")
    } 
    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            return document.write("numero no es primo");;
        }
    }
    return document.write("numero es primo");

}
if(isNaN(number)){
    document.write("lo ingresado no es valido");
}else{
    truePrimo(number);
}

