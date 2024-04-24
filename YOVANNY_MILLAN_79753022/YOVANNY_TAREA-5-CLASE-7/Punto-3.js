let estudiantes = [
    { nombre: "Juan", edad: 20 },
    { nombre: "María", edad: 22 },
    { nombre: "Pedro", edad: 19 },
  ];
  estudiantes.forEach(function(element,index){
    estudiantes[index].edad=estudiantes[index].edad+1;
});
console.log(estudiantes);