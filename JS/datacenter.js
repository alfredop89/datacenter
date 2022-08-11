// HEADER

const header = document.querySelector("#dc-header")
window.addEventListener("scroll", () => {
    if(window.scrollY >= 50){
        header.classList.add("color-bg")
    }
    else{
        header.classList.remove("color-bg")
    }
})

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
document.onclick = () =>{
    dcmodal.classList.remove("open-dcmodal")
}
cerrar.onclick = () =>{
    dcmodal.classList.remove("open-dcmodal")
}
modalbutton[1].onclick = () =>{
    const tipoPlan = document.querySelector("#tipoPlan")
    tipoPlan.innerText = "Plan básico"
}
modalbutton[2].onclick = () =>{
    const tipoPlan = document.querySelector("#tipoPlan")
    tipoPlan.innerText = "Plan Negocios"
}
modalbutton[3].onclick = () =>{
    const tipoPlan = document.querySelector("#tipoPlan")
    tipoPlan.innerText = "Plan empresas"
}
modalbutton[4].onclick = () =>{
    const tipoPlan = document.querySelector("#tipoPlan")
    tipoPlan.innerText = "Plan Pro"
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

    const success = document.querySelector("#success-msg")
    success.classList.add("open-success")
    for(let index = 1; index < 5; index++){
        modalbutton[index].addEventListener("click", (e) =>{
            success.classList.remove("open-success")
            modaltitulo.innerText = "Ingresa tus datos para realizar la compra"
            e.stopPropagation()
        })
    }

    modal.reset()
}
// MODAL CONTACTO

const formularioContacto = document.querySelector("#contactform")
formularioContacto.onclick = (e) =>{
    e.preventDefault()
}
const contactNombre = document.querySelector("#contactnombre")
const contactEmail = document.querySelector("#contactemail")
const send = document.querySelector(".contactenviar")
const textArea = document.querySelector("#textarea")

send.onclick = () =>{
    if(contactNombre.value, contactEmail.value < 3){
        const contacttitulo = document.querySelector("#contacttitulo")
        contacttitulo.innerText = "Datos inválidos"
        return
    }
    else if(contactNombre.value ===""){
        const contacttitulo = document.querySelector("#contacttitulo")
        contacttitulo.innerText = "Datos inválidos"
        return
    }
    else if(textArea.value ===""){
        const contacttitulo = document.querySelector("#contacttitulo")
        contacttitulo.innerText = "No puedes enviar un mensaje vacío"
        return
    }
    else{
        contacttitulo.innerText = contactNombre.value + "," + " tu mensaje ha sido enviado. Gracias por contactarnos"
    }
    formularioContacto.reset()
}



































// // MENSAJE DE COMPRA

// usuarioDatos= []

// const userName = document.querySelector("#modalnombre")
// const userApellido = document.querySelector("#modalapellido")
// const userEmail = document.querySelector("#modalcorreo")
// const userTdc = document.querySelector("#modaltdc")

// const user = ({
//     nombre: userName.value,
//     apellido: userApellido.value,
//     email: userEmail.value,
//     TDC: userTdc.value
// })

// modalBoton.onclick = () =>{
//     if(inputs.value < 3){
//         modaltitulo.innerText = "Datos inválidos"
//         return
//     }

//     console.log(user)
//     usuarioDatos.push(user)
//     console.log(usuarioDatos)




//     success.classList.add("open-success")
//     const modaltitulo = document.querySelector("#modaltitulo")
//     modaltitulo.innerText = "Felicidades " + userName.value + "!"



// }
