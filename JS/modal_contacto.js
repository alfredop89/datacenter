
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
