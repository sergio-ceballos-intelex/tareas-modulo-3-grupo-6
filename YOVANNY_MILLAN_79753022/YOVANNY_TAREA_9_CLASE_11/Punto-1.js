async function getPosts() {
    try {
        const respuestaServidor = await fetch('https://jsonplaceholder.typicode.com/posts?_start=0&_limit=5');
        const posts = await respuestaServidor.json();
          for (const post of posts) {
            const postId = post.id;
            const commentsResponse = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`);
            const comentarios = await commentsResponse.json();
            console.log(`Comentarios del post ${postId}:`);
            comentarios.forEach((comentario,index) => {
              console.log(`${postId}.${index+1}: ${comentario.body}`);
            });
          }
    } catch(error) {
        console.log(error);
    }
}
getPosts();