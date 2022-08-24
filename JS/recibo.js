const reciboContainer = document.querySelector('#recibo-container')

let divRecibo = document.createElement('div')
divRecibo.classList.add('d-flex', 'justify-content-center', 'align-items-center')
divRecibo.innerHTML = `

            <div class="recibo-form p-3 d-flex row col-12 col-md-6 col-xl-4">
                <div class="d-flex row justify-content-center align-items-center mb-2">
                    <img class="dc-modal-png mb-3 img-fluid" src="./assets/img/dcgray.png" alt="">
                    <h5 class="p-0 text-center my-3">Gracias por tu compra</h5>
                </div>
                <hr>
                <div class="mb-4 row aling-items-center text-start p-3">
                    <label class="mr-2" id="reciboNombre" > </label>
                    <label class="mr-2" id="reciboApellido" > </label>
                    <label class="mr-2" id="reciboCorreo" > </label>
                    <label class="mr-2" id="reciboTdc" > </label>
                    <label class="mr-2" id="reciboFactura" > </label>
                    <label class="mb-4" id="reciboPlan" > </label>
                    <label class="mb-4 text-center" id="reciboPrecio" > </label>
                    <label class="mb-4" id="reciboFecha" > </label>
                <div class="text-center">
                <button class="w-auto" id="cerrar-recibo" >Cerrar</button>
            </div>
            `
reciboContainer.appendChild(divRecibo)

reciboContainer.onclick = () =>{
    reciboContainer.classList.remove('open-recibo')
}

const cerrarRecibo = document.getElementById('cerrar-recibo')
cerrarRecibo.onclick = () => {
    reciboContainer.classList.remove('open-recibo')
    modalTitulo.innerText = 'Ingresa tus datos para realizar la compra'
    linkRecibo.classList.remove('open-recibo')
    modal.reset()
    localStorage.clear()
}