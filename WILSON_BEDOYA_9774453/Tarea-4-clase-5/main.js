const price = 2000;
let weight=10.1;
let discount=0;
if (weight>10) {
    discount= 0.20; 
} else if(weight>5){
    discount= 0.15; 
} else if(weight>2){
    discount= 0.10;  
}
let pay=price-(price*discount);
console.log("total a pagar es: ", pay)