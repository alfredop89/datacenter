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

dcModal.appendChild(div);


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

for (i=0; i<3; i++){
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
    arrayInputs[index].textContent ==="" ? modalTitulo.innerText = "Datos inválidos" : modalTitulo.innerText = ''
    
    if( modalNombre.value, modalAPellido.value, modalCorreo.value, modalTdc.value < 3){
        modalTitulo.innerText = "Datos inválidos"
        return
    }
    else if(modalNombre.value, modalAPellido.value, modalCorreo.value, modalTdc.value ===""){
        modalTitulo.innerText = "Datos inválidos"
        return
    }
    else if(modalNombre.value, modalAPellido.value, modalCorreo.value ===""){
        modalTitulo.innerText = "Datos inválidos"
        return
    }
    else if(modalTdc.value <= 1){
        modalTitulo.innerText = "Datos inválidos"
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
    const nombreFactura = document.getElementById('reciboNombre')
    const apellidoFactura = document.getElementById('reciboApellido')
    const correoFactura = document.getElementById('reciboCorreo')
    const tdcFactura = document.getElementById('reciboTdc')
    const planFactura = document.getElementById('reciboPlan')
    const fechaFactura = document.getElementById('reciboFecha')
    const precioFactura = document.getElementById('reciboPrecio')

    nombreFactura.innerText = 'Nombre: ' + localStorage.getItem('nombre')
    apellidoFactura.innerText = 'Apellido: ' + localStorage.getItem('apellido')
    correoFactura.innerText = 'Correo electrónico: ' + localStorage.getItem('correo')
    planFactura.innerText = 'Tipo de plan: ' + localStorage.getItem('tipoPlan')
    tdcFactura.innerText = 'TDC: ' + localStorage.getItem('tdc')
    precioFactura.innerText = 'Precio: ' + localStorage.getItem('precio') + '$' + ' + I.V.A. - TOTAL : ' + localStorage.getItem('precio')* 1.25 + '$'
    fechaFactura.innerText = 'Fecha de la compra: ' + new Date().toString()

    const usuarioDatos = []
    let user = {
        nombre: modalNombre.value,
        apellido: modalAPellido.value,
        correo: modalCorreo.value
    }
    usuarioDatos.push(user)

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