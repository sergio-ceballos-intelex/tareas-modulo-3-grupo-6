let libros = [
    { titulo: "El principito", autor: "Antoine de Saint-Exupéry" },
    { titulo: "Don Quijote de la Mancha", autor: "Miguel de Cervantes" },
    { titulo: "Cien años de soledad", autor: "Gabriel García Márquez" },
  ];

  let arrContains = [];


  libros.forEach(element => {
    if(element.titulo.includes('El')){
        arrContains.push(element.titulo);
    }
});

console.log(arrContains);