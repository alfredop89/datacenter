
// MODAL CONTACTO

const formularioContacto = document.querySelector("#contactform")
formularioContacto.onclick = (e) =>{
    e.preventDefault()
}
const contactNombre = document.querySelector("#contactnombre")
const contactEmail = document.querySelector("#contactemail")
const send = document.querySelector(".contactenviar")
const textArea = document.querySelector("#textarea")

let expresion = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/
let validaciones = expresion.test(contactEmail.value)

send.onclick = () =>{
    if(contactNombre.value, contactEmail.value < 3 || contactNombre.value ==="" || textArea.value ===""){
        const contacttitulo = document.querySelector("#contacttitulo")
        contacttitulo.innerText = "No puedes dejar campos vacíos"
        return
    }
    // else if(contactNombre.value ===""){
    //     const contacttitulo = document.querySelector("#contacttitulo")
    //     contacttitulo.innerText = "Datos inválidos"
    //     return
    // }
    else if (!validaciones){
        contacttitulo.innerText = "Correo electrónico inválido"
        return
    }
    // else if(textArea.value ===""){
    //     contacttitulo.innerText = "No puedes enviar un mensaje vacío"
    //     return
    // }
    else{
        contacttitulo.innerText = contactNombre.value + "," + " tu mensaje ha sido enviado. Gracias por contactarnos"
    }
    formularioContacto.reset()
}
