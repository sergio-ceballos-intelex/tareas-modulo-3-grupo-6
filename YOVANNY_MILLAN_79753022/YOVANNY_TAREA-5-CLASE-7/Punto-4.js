let libros = [
    { titulo: "El principito", autor: "Antoine de Saint-Exupéry" },
    { titulo: "Don Quijote de la Mancha", autor: "Miguel de Cervantes" },
    { titulo: "Cien años de soledad", autor: "Gabriel García Márquez" },
  ];
libros.forEach(function(libro){
    if(libro.titulo.includes(`El`)){
        console.log(libro.titulo);
    } 
});