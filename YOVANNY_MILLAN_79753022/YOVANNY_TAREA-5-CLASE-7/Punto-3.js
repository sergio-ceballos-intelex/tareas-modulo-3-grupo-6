let estudiantes = [
    { nombre: "Juan", edad: 20 },
    { nombre: "María", edad: 22 },
    { nombre: "Pedro", edad: 19 },
  ];
  estudiantes.forEach(function(estudiante){
    estudiante.edad=estudiante.edad+1;
});
console.log(estudiantes);