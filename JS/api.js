const mostrarComentarios = (idCliente) => {

    const comentarios = document.querySelector('#comentarios')
    const sig = document.querySelector('#sig')
    const ant = document.querySelector('#ant')
  
    fetch(`https://jsonplaceholder.typicode.com/posts/${idCliente}`).then((response) => response.json())
    .then((comment) => {
  
      comentarios.innerHTML = `
                              <i class="icon-comment mb-4 fa-solid fa-comment"></i>
                              <p>${comment.title}</p><hr style="color: rgba(0, 0, 0, 0.405);">
                              <h5>"${comment.body}"</h5>
      `
    })
  }
  
  let id = 1
  
  sig.onclick = () => {
    id++
    mostrarComentarios(id)
  }
  ant.onclick = () => {
    if(id === 1 ) {return}
    id--
    mostrarComentarios(id)
  }
  
  mostrarComentarios(id)