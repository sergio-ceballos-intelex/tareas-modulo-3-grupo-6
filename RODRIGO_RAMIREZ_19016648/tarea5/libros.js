let libros = [
    { titulo: "El principito", autor: "Antoine de Saint-Exupéry" },
    { titulo: "Don Quijote de la Mancha", autor: "Miguel de Cervantes" },
    { titulo: "Cien años de soledad", autor: "Gabriel García Márquez" },
  ];

  //Utiliza un bucle for para encontrar todos los libros cuyo título contenga la palabra "El". Luego, imprime estos libros.
for (let i=0; i<libros.length; i++) {
  if (libros[i].titulo.includes('El')) {
    console.log(libros[i]);
  }
}


  libros.forEach((libro)=> {
    if (libro.titulo.includes("El")) {

        console.log(libro.titulo);
    }
  })