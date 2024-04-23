const kilos = 3;
const descuento = "0%";
const descuento1 = "10%";
const descuento2 = "15%";
const descuento3 = "20%";


const precio = 5000;
const totalapagar = precio * kilos
const totalcondescuento = totalapagar * 10 /100
if (kilos <=2){
    console.log("tiene un descuento de :",descuento )
}else if (kilos >2 && kilos <=5){
    console.log("tiene un descuento de " , descuento1)
}else if (kilos >5 && kilos <=10){
    console.log("tiene un descuento de " , descuento2)
}else {
    console.log("tiene un descuento de " , descuento3)
}
console.log("total a pagar es : " , totalapagar)
console.log("el descuento es de " ,totalcondescuento)