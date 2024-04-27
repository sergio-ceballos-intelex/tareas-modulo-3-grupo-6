//PUNTO 3
// EJERCICIO#1 Suma de edades y el promedio de las edades
let totalEdad = 0
estudiantes.forEach(element => {
     totalEdad += element.edad 
});
console.log("Total suma edades:",totalEdad,"Promedio de las edades:",totalEdad / 3)