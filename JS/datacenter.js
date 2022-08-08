const dcmodal = document.querySelector("#dc-modal-container")
const comprar = document.querySelector("#cardbutton")


const cerrarModal = document.querySelector("#close-modal")
cerrarModal.addEventListener("click", () =>{
    dcmodal.classList.remove("open-dcmodal")
    window.classList.remove("open-dcmodal")
})


comprar.addEventListener("click", () =>{
    dcmodal.classList.add("open-dcmodal")
})
