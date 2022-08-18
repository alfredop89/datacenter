
// MODAL

const dcmodal = document.querySelector(".dc-modal-container")
const modal = document.querySelector(".dc-modal")
const modalbutton = document.querySelectorAll(".dc-banner-button")
const cerrar = document.querySelector("#close-modal")
const inputs = document.querySelectorAll("input")

modal.addEventListener("click", (e) =>{
    e.stopPropagation()
    e.preventDefault()
})

const facturaPlan = document.querySelector("#reciboPlan")
document.onclick = () =>{
    dcmodal.classList.remove("open-dcmodal")
}
cerrar.onclick = () =>{
    dcmodal.classList.remove("open-dcmodal")
}
modalbutton[1].onclick = () =>{
    const tipoPlan = document.querySelector("#tipoPlan")
    tipoPlan.innerText = "Plan básico"
    const facturaPlan = document.querySelector("#reciboPlan")
    facturaPlan.innerText = "Plan adquirido: Plan básico (15$ + 1.25% I.V.A)"
}
modalbutton[2].onclick = () =>{
    const tipoPlan = document.querySelector("#tipoPlan")
    tipoPlan.innerText = "Plan Negocios"
    facturaPlan.innerText = "Plan adquirido: Plan negocios (35$ + 1.25% I.V.A)"
}
modalbutton[3].onclick = () =>{
    const tipoPlan = document.querySelector("#tipoPlan")
    tipoPlan.innerText = "Plan empresas"
    facturaPlan.innerText = "Plan adquirido: Plan empresas (45$ + 1.25% I.V.A)"
}
modalbutton[4].onclick = () =>{
    const tipoPlan = document.querySelector("#tipoPlan")
    tipoPlan.innerText = "Plan Pro"
    facturaPlan.innerText = "Plan adquirido: Plan PRO (60$ + 1.25% I.V.A)"
}
for(let index = 1; index < 5; index++){
    modalbutton[index].addEventListener("click", (e) =>{
        dcmodal.classList.add("open-dcmodal")
        e.stopPropagation()
    })
}


// MODAL FORM

const modalBoton = document.querySelector("#modalbutton")
modalBoton.onclick = () =>{
    const userName = document.querySelector("#modalnombre")
    const userApellido = document.querySelector("#modalapellido")
    const userEmail = document.querySelector("#modalcorreo")
    const userTdc = document.querySelector("#modaltdc")
    const modaltitulo = document.querySelector("#modaltitulo")

    const entrada = document.querySelectorAll(".entradas")
    index = 0
    for(index = 0; index < 4; index++)
    entrada[index].addEventListener("click", () =>{
        modaltitulo.innerText = "Ingresa tus datos para realizar la compra"
    })

    if( userName.value, userApellido.value, userEmail.value, userTdc.value < 3){
        modaltitulo.innerText = "Datos inválidos"
        return
    }
    else if(userName.value, userApellido.value, userEmail.value, userTdc.value ===""){
        modaltitulo.innerText = "Datos inválidos"
        return
    }
    else if(userName.value, userApellido.value, userEmail.value ===""){
        modaltitulo.innerText = "Datos inválidos"
        return
    }
    else if(userTdc.value <= 1){
        modaltitulo.innerText = "Datos inválidos"
        return
    }
    else{
        modaltitulo.innerText = userName.value + ", " + "gracias por tu compra!"
    }


    const usuarioDatos = []
    let user = {
        nombre: userName.value,
        apellido: userApellido.value,
        correo: userEmail.value
    }
    usuarioDatos.push(user)
    localStorage.setItem("Usuario", JSON.stringify(user))

    const success = document.querySelector("#success-msg")
    success.classList.add("open-success")
    for(let index = 1; index < 5; index++){
        modalbutton[index].addEventListener("click", (e) =>{
            success.classList.remove("open-success")
            modaltitulo.innerText = "Ingresa tus datos para realizar la compra"
            e.stopPropagation()
        })
    }
    const recibo = document.querySelector("#recibo")
    const reciboContainer = document.querySelector(".recibo-container")
    const cerrarRecibo = document.querySelector("#cerrar-recibo")
    recibo.onclick = () =>{
        reciboContainer.classList.add("open-recibo")
    }
    cerrarRecibo.onclick = () =>{
        reciboContainer.classList.remove("open-recibo")
    }
    
    const nombreFactura = document.querySelector("#reciboNombre")
    const apellidoFactura = document.querySelector("#reciboApellido")
    const correoFactura = document.querySelector("#reciboCorreo")
    const tdcFactura = document.querySelector("#reciboTdc")
    const numeroFactura = document.querySelector("#reciboFactura")
    const fechaFactura = document.querySelector("#reciboFecha")

    nombreFactura.innerText = "Nombre: " + userName.value
    apellidoFactura.innerText = "Apellido: " + userApellido.value
    correoFactura.innerText = "Correo electrónico: " + userEmail.value
    tdcFactura.innerText = "# TDC: " + userTdc.value
    numeroFactura.innerText = "Factura # : 7854651232587"
    fechaFactura.innerText = "Fecha de la compra: " + new Date().toString();

    modal.reset()
}