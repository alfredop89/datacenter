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
                    <h5 id="modaltitulo" class="p-0 text-center my-3">Ingresa tus datos para realizar la compra</h5>
                    <p id="tipoPlan" class="tipoPlan text-center"> </p>
                    <hr>
                    <p class="p-0 m-0">Nombre</p>
                    <input id="modalnombre" class="entradas mb-4" type="text" required>
                    <p class="p-0 m-0">Apellido</p>
                    <input id="modalapellido" class="entradas mb-4" type="text" required>
                    <p class="p-0 m-0">Correo electrónico</p>
                    <input id="modalcorreo" class="entradas mb-4" type="email" required>
                    <p class="p-0 m-0">Tarjeta de crédito</p>
                    <input id="modaltdc" class="entradas mb-4" type="text" placeholder="000-000-000000">
                    <br>
                    <button class="modalbutton mt-4" id="modalbutton" type="submit">Comprar</button>
                    <div class="d-flex column justify-content-between">
                    <a id="close-modal" class="text-dark">Cerrar ventana</a>
                    <a id="linkRecibo" class="text-dark link-recibo">Ver factura</a>
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

abrirModalPro.onclick = (planes) =>{
    dcModal.classList.add('open-dcmodal')
    tipoPlan.innerText = 'plan PRO'
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
        tipoPlan.innerText = 'plan básico'
        dcModal.classList.add('open-dcmodal')
        localStorage.setItem('tipoPlan', 'PLAN BÁSICO')
        localStorage.setItem('precio', '15')
    }
    arrayComprar[1].onclick = () =>{
        tipoPlan.innerText = 'plan negocios'
        dcModal.classList.add('open-dcmodal')
        localStorage.setItem('tipoPlan', 'PLAN NEGOCIOS')
        localStorage.setItem('precio', '35')
    }
    arrayComprar[2].onclick = () =>{
        tipoPlan.innerText = 'plan empresas'
        dcModal.classList.add('open-dcmodal')
        localStorage.setItem('tipoPlan', 'PLAN EMPRESAS')
        localStorage.setItem('precio', '45')
    }


// // MODAL FORM

const modalNombre = document.getElementById('modalnombre')
const modalAPellido = document.getElementById('modalapellido')
const modalCorreo = document.getElementById('modalcorreo')
const modalTdc = document.getElementById('modaltdc')
const modalTitulo = document.getElementById('modaltitulo')
const modalComprar = document.getElementById('modalbutton')
const inputs = document.querySelectorAll('.entradas')

inputs.forEach((e) => {
    e.onclick = () => {
        modalTitulo.innerText = 'Ingresa tus datos para realizar la compra'
    }
})

modalComprar.onclick = () =>{
    
    const arrayInputs = [...inputs]
    let index = 0
    for(index = 0; index <4; index++){
    arrayInputs[index].textContent <= 3 ? modalTitulo.innerText = "Datos inválidos" : modalTitulo.innerText = 'Gracias por tu compra'
    
        if( modalNombre.value === "" || modalAPellido.value === "" || modalCorreo.value === "" || modalTdc.value === ""){
            modalTitulo.innerText = "No puedes dejar campos vacíos"
            return
        }
        else{
            modalTitulo.innerText = modalNombre.value + ", " + "gracias por tu compra!"
            linkRecibo.classList.add('open-recibo')
            
            localStorage.setItem('nombre',modalNombre.value)
            localStorage.setItem('apellido',modalAPellido.value)
            localStorage.setItem('correo',modalCorreo.value)
            localStorage.setItem('tdc',modalTdc.value)
        }

    }
    //  IMPRIMIENDO FACTURA

    const cerrarRecibo = document.getElementById('cerrar-recibo')

    const nombreFactura = document.getElementById('reciboNombre').innerText = 'Nombre: ' + localStorage.getItem('nombre')

    const apellidoFactura = document.getElementById('reciboApellido').innerText = 'Apellido: ' + localStorage.getItem('apellido')

    const correoFactura = document.getElementById('reciboCorreo').innerText = 'Correo electrónico: ' + localStorage.getItem('correo')

    const tdcFactura = document.getElementById('reciboTdc').innerText = 'TDC: ' + localStorage.getItem('tdc')

    const planFactura = document.getElementById('reciboPlan').innerText = 'Tipo de plan: ' + localStorage.getItem('tipoPlan')

    const precioFactura = document.getElementById('reciboPrecio').innerText = 'Precio: ' + localStorage.getItem('precio') + '$' + ' + I.V.A. - TOTAL : ' + localStorage.getItem('precio')* 1.25 + '$'

    const fechaFactura = document.getElementById('reciboFecha').innerText = 'Fecha de la compra: ' + new Date().toString()


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
}