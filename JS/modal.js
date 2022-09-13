// // MODAL

const dcModal = document.querySelector('#dc-modal-container')
dcModal.onclick = () => {
    dcModal.classList.remove('open-dcmodal')
}

let div = document.createElement('div')
div.classList.add('d-flex', 'justify-content-center', 'align-items-center')
div.innerHTML =`
                <form id="dc-modal" class="dc-modal d-flex row p-4 col-12 col-md-6 col-xl-4">
                    <div class="d-flex justify-content-center align-items-center mb-2">
                        <img class="dc-modal-png" src="./assets/img/dcgray.png" alt="">
                    </div>
                        <h5 id="modalTitulo" class="p-0 text-center my-3">Ingresa tus datos para realizar la compra</h5>
                        <p id="tipoPlan" class="tipoPlan text-center "></p>
                        <hr>
                        <p class="p-0 m-0">Nombre</p>
                        <input id="modalNombre" class="entradas mb-4" type="text" maxlength= "20" required>
                        <p class="p-0 m-0">Apellido</p>
                        <input id="modalApellido" class="entradas mb-4" type="text" required>
                        <p class="p-0 m-0">Correo electrónico</p>
                        <input id="modalCorreo" class="entradas mb-4" type="email" required>
                        <p class="p-0 m-0">Tarjeta de crédito</p>
                        <input id="modalTdc" class="entradas mb-4" type="text" placeholder="000-000-000000" maxlength= "12">
                        <br>
                        <i id="modal-check" class="modal-check text-center fa-solid fa-circle-check"></i>
                        <button class=" text-center modalbutton mt-2" id="modalButton" type="submit">Comprar</button>
                    <div class="d-flex column justify-content-between align-items-center">
                        <a id="close-modal" class="text-dark">Cerrar ventana</a>
                        <a id="linkRecibo" class="text-light link-recibo">Ver factura</a>
                    </div>
                </form>
                `
dcModal.appendChild(div)


// ABRIR Y CERRAR EL MODAL

const abrirModal = document.querySelectorAll('#cardbutton')
const abrirModalPro = document.getElementById('cardbutton-pro')
const cerrarModal = document.getElementById('close-modal')
const linkRecibo = document.getElementById('linkRecibo')
const tipoPlan = document.querySelector('.tipoPlan')
let modalCheck = document.getElementById('modal-check')

abrirModalPro.onclick = (planes) =>{
    dcModal.classList.add('open-dcmodal')
    tipoPlan.innerText = 'Plan PRO'
    localStorage.setItem('tipoPlan', 'PLAN PRO')
    localStorage.setItem('precio', '60')
}

abrirModal.forEach((abrir) =>{
    abrir.onclick = () => {
        dcModal.classList.add('open-dcmodal')
    }
})
cerrarModal.onclick = () =>{
    dcModal.classList.remove('open-dcmodal')
    localStorage.clear()
}

const modal = document.querySelector(".dc-modal")
modal.addEventListener("click", (e) =>{
    e.stopPropagation()
     e.preventDefault()
})


//  REALIZAR COMPRA

const arrayComprar = [...abrirModal]

    arrayComprar[0].onclick = () =>{
        tipoPlan.innerText = 'Plan básico'
        dcModal.classList.add('open-dcmodal')
        localStorage.setItem('tipoPlan', 'PLAN BÁSICO')
        localStorage.setItem('precio', '15')
    }
    arrayComprar[1].onclick = () =>{
        tipoPlan.innerText = 'Plan negocios'
        dcModal.classList.add('open-dcmodal')
        localStorage.setItem('tipoPlan', 'PLAN NEGOCIOS')
        localStorage.setItem('precio', '35')
    }
    arrayComprar[2].onclick = () =>{
        tipoPlan.innerText = 'Plan empresas'
        dcModal.classList.add('open-dcmodal')
        localStorage.setItem('tipoPlan', 'PLAN EMPRESAS')
        localStorage.setItem('precio', '45')
    }


// // MODAL FORM

const modalNombre = document.getElementById('modalNombre')
const modalAPellido = document.getElementById('modalApellido')
const modalCorreo = document.getElementById('modalCorreo')
const modalTdc = document.getElementById('modalTdc')
const modalTitulo = document.getElementById('modalTitulo')
const modalComprar = document.getElementById('modalButton')
const inputs = document.querySelectorAll('.entradas')

inputs.forEach((e) => {
    e.onclick = () => {
        modalTitulo.innerText = 'Ingresa tus datos para realizar la compra'
    }
})

modalComprar.onclick = () =>{

    const arrayInputs = [...inputs]
    let expresiones = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    let validacion = expresiones.test(modalCorreo.value)
    let tdcLength = modalTdc.value.length

    let index = 0
    for(index = 0; index <4; index++){
    arrayInputs[index].textContent <= 3 ? modalTitulo.innerText = "Datos inválidos" : modalTitulo.innerText = modalNombre + 'Gracias por tu compra'
    
        if( modalNombre.value === "" || modalAPellido.value === "" || modalCorreo.value === ""){
            modalTitulo.innerText = "No puedes dejar campos vacíos"
            return
        }
        else if(tdcLength < 12){
            modalTitulo.innerText = 'El número de tu TDC debe ser de 12 dígitos'
            return
        }
        else if (!validacion){
            modalTitulo.innerText = 'Correo electrónico inválido'
            return
        }
        else{
            modalTitulo.innerText = modalNombre.value + ", " + "gracias por tu compra!"
            linkRecibo.classList.add('open-recibo')

            modalCheck.classList.add('modal-check-open')
            
            localStorage.setItem('nombre',modalNombre.value)
            localStorage.setItem('apellido',modalAPellido.value)
            localStorage.setItem('correo',modalCorreo.value)
            localStorage.setItem('tdc',modalTdc.value)

            modalComprar.disabled = true
            modalComprar.classList.add('modalbutton-disabled')
        }

    }

    //  IMPRIMIENDO FACTURA


    let iva = localStorage.getItem('precio') * 21 / 100
    const cerrarRecibo = document.getElementById('cerrar-recibo')

    const nombreFactura = document.getElementById('reciboNombre').innerText = 'Nombre :  ' + localStorage.getItem('nombre')
    const apellidoFactura = document.getElementById('reciboApellido').innerText = 'Apellido :  ' + localStorage.getItem('apellido')
    const correoFactura = document.getElementById('reciboCorreo').innerText = 'E-mail :  ' + localStorage.getItem('correo')
    const tdcFactura = document.getElementById('reciboTdc').innerText = 'TDC :  ' + localStorage.getItem('tdc')
    const planFactura = document.getElementById('reciboPlan').innerText = 'Tipo de plan :  ' + localStorage.getItem('tipoPlan')

    
    const precioFactura = document.getElementById('reciboPrecio').innerText = 'Precio :  ' + localStorage.getItem('precio') + '$' + ' + I.V.A. (21%) TOTAL :  ' + (parseFloat(localStorage.getItem('precio')) + parseFloat(iva)) + '$'
    const fechaFactura = document.getElementById('reciboFecha').innerText = 'Fecha de la compra :  ' + new Date().toString()
    
    //  MENSAJE DE TOASTIFY

    Toastify({
        style: {
            background: 'rgb(27, 27, 68)'
        },
        gravity: "top",
        position: 'center',
        text: 'Compra realizada exitósamente',
        duration: 6000
        
        }).showToast();
}
    
linkRecibo.onclick = () =>{
    dcModal.classList.remove('open-dcmodal')
    reciboContainer.classList.add('open-recibo')
    modalCheck.classList.remove('modal-check-open')
    modalComprar.disabled = false
    modalComprar.classList.remove('modalbutton-disabled')
}
