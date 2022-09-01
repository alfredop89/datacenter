const mostrarOferta = () =>{
    const modalOferta = document.querySelector('#modal-oferta')
    const cerrarOferta = document.getElementById('cerrar-oferta')

    let divOferta = document.createElement('div')
    divOferta.classList.add('oferta', 'text-center', 'd-flex', 'row', 'justify-content-center', 'align-items-center', 'col-12', 'col-sm-8', 'col-md-6', 'col-lg-4', 'p-4', 'mx-2')

    divOferta.innerHTML = `
                    <h3 class="mb-4">Aprovecha las ofertas que te ofrece Datacenter</h3>
                    <hr style="color: rgba(0, 0, 0, 0.405);">
                    <i class="oferta-icon fa-solid fa-bag-shopping my-4"></i>
                    <p id="oferta-parrafo">Desde 15$ ( + I.V.A) podrás empezar a disfrutar de nuestros servicios con la mejor calidad y atención para todo lo que necesites!</p>
                    <hr style="color: rgba(0, 0, 0, 0.405);">

                `
    modalOferta.appendChild(divOferta)
        
    divOferta.addEventListener('click', (e) =>{
        modalOferta.classList.remove('open-oferta')
    })
    modalOferta.onclick = () =>{
        modalOferta.classList.remove('open-oferta')
    }
    setTimeout(()=>{
        modalOferta.classList.add('open-oferta')
    }, 5000)
}
mostrarOferta()