async function getPosts() {
    try {
        const respuestaServidor = await fetch('https://jsonplaceholder.typicode.com/posts');
        const posts = await respuestaServidor.json();
        const fivePosts=posts.filter((elemento, index) => index < 5);
        for (const post of fivePosts) {
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