// MODAL
const dcmodal = document.querySelector("#dc-modal-container")
const compra1 = document.querySelector(".btnbasico")
const compra2 = document.querySelector(".btnnegocios")
const compra3 = document.querySelector(".btnempresas")
const compra4 = document.querySelector(".btnpro")
const closeModal = document.querySelector("#close-modal")

compra1.onclick = () => {
    dcmodal.classList.add("open-dcmodal")
}

compra2.onclick = () => {
    dcmodal.classList.add("open-dcmodal")
}

compra3.onclick = () => {
    dcmodal.classList.add("open-dcmodal")
}

compra4.onclick = () => {
    dcmodal.classList.add("open-dcmodal")
}

closeModal.onclick = () =>{
    dcmodal.classList.remove("open-dcmodal")
}

window.addEventListener("click", () => {
    dcmodal.classList.remove(".open-dcmodal")
})