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
                <div class="mb-4 row p-3">
                    <label class="mr-2" id="reciboNombre" > </label>
                    <label class="mr-2" id="reciboApellido" > </label>
                    <label class="mr-2" id="reciboCorreo" > </label>
                    <label class="mr-2" id="reciboTdc" > </label>
                    <label class="mr-2" id="reciboFactura" > </label>
                    <label class="mb-4" id="reciboPlan" > </label>
                    <label class="mb-4" id="reciboPrecio" > </label>
                    <label class="mb-4" id="reciboFecha" > </label>
                <div class="text-center">
                <button class="w-auto" id="cerrar-recibo" >Cerrar</button>
            </div>
            `
reciboContainer.appendChild(divRecibo)

const cerrarRecibo = document.querySelector('#cerrar-recibo')
const nombreFactura = document.querySelector('#reciboNombre')
const apellidoFactura = document.querySelector('#reciboApellido')
const correoFactura = document.querySelector('#reciboTdc')
const planFactura = document.querySelector('#reciboPlan')
const fechaFactura = document.querySelector('#reciboFecha')
const precioFactura = document.querySelector('#reciboPrecio')

nombreFactura.innerText = 'Nombre: ' + localStorage.getItem('nombre')
apellidoFactura.innerText = 'Apellido: ' + localStorage.getItem('apellido')
correoFactura.innerText = 'Correo electrónico: ' + localStorage.getItem('correo')
planFactura.innerText = 'Tipo de plan: ' + localStorage.getItem('tipoPlan')
precioFactura.innerText = 'Precio: ' + localStorage.getItem('precio') + '$'
fechaFactura.innerText = 'Fecha de la compra: ' + new Date().toString()



cerrarRecibo.onclick = () => {
    reciboContainer.classList.remove('open-recibo')
    modalTitulo.innerText = 'Ingresa tus datos para realizar la compra'
    localStorage.clear()
    modal.reset()
}