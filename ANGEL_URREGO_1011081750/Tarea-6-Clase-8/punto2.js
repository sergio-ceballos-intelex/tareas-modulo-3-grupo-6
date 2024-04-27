//PUNTO #2
const estudiantes = [
    { nombre: "Camilo", edad: 33, promedio: 10 },
    { nombre: "Juan", edad: 30, promedio: 6 },
    { nombre: "Andres", edad: 29, promedio: 8.7 },
];

// EJERCICIO#1 Impreme el nombre del segundo estudiante
const segundoEstudiante = estudiantes.find((element, index) => index === 1);
console.log(segundoEstudiante.nombre); 

// EJERCICIO#2 Actualiza la informacion del primer estudiante
const updateAge = estudiantes.filter(estudiante => {
    if (estudiante.nombre === "Camilo") {
        estudiante.edad = 25;
        return estudiante;
    }
});
console.log(updateAge)