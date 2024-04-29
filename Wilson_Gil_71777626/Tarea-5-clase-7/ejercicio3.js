let estudiantes = [
    { nombre: "Juan", edad: 20 },
    { nombre: "María", edad: 22 },
    { nombre: "Pedro", edad: 19 },
  ];

    estudiantes.forEach(element => {
        element.edad ++;
    });

    console.log(estudiantes);