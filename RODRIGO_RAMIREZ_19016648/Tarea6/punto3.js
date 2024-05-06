const estudiantes = [
    { nombre: "Camilo", edad: 33, promedio: 10 },
    { nombre: "Juan", edad: 30, promedio: 6 },
    { nombre: "Andres", edad: 29, promedio: 8.7 },
];

//Calcula el promedio de edad de los estudiantes.
let totalEdad = 0;
let numero = 0;
estudiantes.forEach((Element, index) => {
    totalEdad += parseInt(Element.edad);
    numero = index + 1;
    console.log(Element.edad);
});
console.log('La suma de las edades de los estudiantes es:', totalEdad);
console.log('El Promedio de edad es =', totalEdad / numero );