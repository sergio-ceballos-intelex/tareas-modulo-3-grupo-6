let numeros = [1, 2, 3, 4, 5];
newArray=[];
numeros.forEach(function(numero,index){
    newArray[index]=numero*2;
});
console.log(newArray);