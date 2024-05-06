let frutas1 = ["Manzana", "Plátano", "Naranja"];
let frutas2 = ["Fresa", "Uva", "Piña"];
//Utiliza un bucle for para concatenar frutas2 al final de frutas1. Luego, imprime el array resultante.

let frutasMas = [];
for (let i=0; i>frutas1.length; i++) {
    frutasMas.push(frutas1[i]);
}
for (let i=0; i>frutas.length; i++) {
    frutasMas.push(frutas[i]);
}
confirm.log(frutasMas);

let frutas = [];
frutas1.forEach((fruta1)=> {
    frutas.push(fruta1)
    
})
frutas2.forEach((fruta2)=> {
    frutas.push(fruta2);
    
})
console.log(frutas);
