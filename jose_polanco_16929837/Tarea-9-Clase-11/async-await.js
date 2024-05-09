/*
Haciendo uso de la api jsonplaceholder, se requiere hacer un programa que obtenga los primeros 5 posts 
de la url https://jsonplaceholder.typicode.com/posts?_start=0&_limit=5. Una vez se obtengan los primeros 
cinco posts, se deben obtener los comentarios de ese post de la siguiente url 
https://jsonplaceholder.typicode.com/posts/${postId}/comments donde postId será cada id de los posts
 previamente obtenidos.

Nota: Se debe hacer uso de async / await. Pueden guiarse del ejercicio que hicimos en la clase 10 
(repaso-promesas.js) en donde hacemos lo mismo pero con .then y .catch. No se olviden de 
encerrar todo en un bloque try catch.
*/

async function getPosts() {
    try {
        const respuestaServidor = await fetch('https://jsonplaceholder.typicode.com/posts?_start=0&_limit=5');
        const posts = await respuestaServidor.json();
        //console.log(posts);
        const idsDePublicaciones = posts.map(post => post.id);
        console.log(idsDePublicaciones);
        return idsDePublicaciones;

    } catch(error) {
        console.log("Error al obtener ID", error)
    }
}

//getPosts();

async function getComments() {
    try {
      const ids = await getPosts();
      
      for (const postId of ids) {
        const respuestaServidor = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`);
        const comments = await respuestaServidor.json();
        console.log(comments);
      }
      
    } catch (error) {
      console.error('Error en la función principal:', error);
    }
  }
  
  getComments();



