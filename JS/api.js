const mostrarComentarios = (idCliente) => {

    const comentarios = document.querySelector('#comentarios')
    const parrafo = document.querySelector('#parrafo-comentario')
    const sig = document.querySelector('#sig')
    const ant = document.querySelector('#ant')
    
  
    fetch(`https://jsonplaceholder.typicode.com/posts/${idCliente}`).then((response) => response.json())
    .then((comment) => {

 
      comentarios.innerHTML = `
                              <i class="icon-comment mb-4 fa-solid fa-comment"></i>
                              <p>${comment.title}</p><hr style="color: rgba(0, 0, 0, 0.405);">
                              <h5 id="parrafo-comentario">"${comment.body}"</h5>
      `
    })
  }
  
  const slide = document.querySelector('.comentarios')
  let id = 1
  
  sig.onclick = () => {
    id++
    mostrarComentarios(id)
    slide.classList.add('comentario-sig')



  }
  ant.onclick = () => {
    if(id === 1 ) {return}
    id--
    mostrarComentarios(id)
    slide.classList.replace('comentario-sig', 'comentario-ant')


  }
  
  mostrarComentarios(id)