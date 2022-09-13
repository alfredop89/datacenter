
// MODAL CONTACTO

const formularioContacto = document.querySelector("#contactform")
formularioContacto.onclick = (e) =>{
    e.preventDefault()
}
const contactNombre = document.querySelector("#contactnombre")
const contactEmail = document.querySelector("#contactemail")
const send = document.querySelector(".contactenviar")
const textArea = document.querySelector("#textarea")


const arrayContactInputs = [contactNombre, contactEmail, textArea].forEach((e) => {e.onclick = () =>{contacttitulo.innerText = "Ingresa tus datos para enviar tu mensaje"}})

let expresion = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
let validaciones = expresion.test(contactEmail.value)

send.onclick = () =>{
    if(contactNombre.value, contactEmail.value === "" || contactNombre.value ==="" || textArea.value ===""){
        const contacttitulo = document.querySelector("#contacttitulo")
        contacttitulo.innerText = "No puedes dejar campos vacíos"
        return
    }
    else if (!validaciones){
        contacttitulo.innerText = "Correo electrónico inválido"
        return
    }
    else{
        contacttitulo.innerText = contactNombre.value + "," + " tu mensaje ha sido enviado. Gracias por contactarnos"
    }
    formularioContacto.reset()
}
