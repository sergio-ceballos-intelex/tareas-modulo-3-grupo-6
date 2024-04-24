let numeros = [1, 2, 3, 4, 5];
let newArray=[];
numeros.forEach(function(element,index){
    newArray[index]=element*2;
});
console.log(newArray);