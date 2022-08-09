// MODAL



const dcmodal = document.querySelector(".dc-modal-container")
const modal = document.querySelector(".dc-modal")
const modalbutton = document.querySelectorAll(".dc-banner-button")
const cerrar = document.querySelector("#close-modal")

const inputs = document.querySelectorAll("input")
console.log(inputs)


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
for(let index = 1; index < 5; index++){
    modalbutton[index].addEventListener("click", (e) =>{
        dcmodal.classList.add("open-dcmodal")
        e.stopPropagation()
    })
}


// MODAL FORM

const modalBoton = document.querySelector("#modalbutton")
const success = document.querySelector("#success-msg")
success.onmouseover = () => {
    success.classList.remove("open-success")
    dcmodal.classList.remove("open-dcmodal")
}

console.log(success)

modalBoton.onclick = () =>{
    console.log(user)
    usuarioDatos.push(user)
    console.log(usuarioDatos)
    // dcmodal.classList.remove("open-dcmodal")
    success.classList.add("open-success")
    const modaltitulo = document.querySelector("#modaltitulo")
    modaltitulo.innerText = "Felicidades " + userName.value + "!"
}

usuarioDatos= []

const userName = document.querySelector("#modalnombre")
const userApellido = document.querySelector("#modalapellido")
const userEmail = document.querySelector("#modalcorreo")
const userTdc = document.querySelector("#modaltdc")

const user = ({
    nombre: userName.value,
    apellido: userApellido.value,
    email: userEmail.value,
    TDC: userTdc.value
})


// MENSAJE DE COMPRA

