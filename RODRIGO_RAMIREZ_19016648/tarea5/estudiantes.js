let estudiantes = [
    { nombre: "Juan", edad: 20 },
    { nombre: "María", edad: 22 },
    { nombre: "Pedro", edad: 19 },
  ];
//Utiliza un bucle for para incrementar la edad de cada estudiante en 1 año. Luego, imprime el array modificado.
let estudiantes1 = [];
for (let i = 0; i < estudiantes.length; i++ ) {
  estudiantes1.push(estudiantes[i].nombre, estudiantes[i].edad + 1);
}
console.log('estudiantes1 =', estudiantes1);


let estudiantes2 = [];
estudiantes.forEach(function(estudiante) {
estudiantes2.push(estudiante.nombre, estudiante.edad + 1);

});
console.log('estudiantes2 =',estudiantes2);