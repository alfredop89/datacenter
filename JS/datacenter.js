// MODAL
const dcmodal = document.querySelector("#dc-modal-container")
const compra1 = document.querySelector("#basico")
const compra2 = document.querySelector("#negocios")
const compra3 = document.querySelector("#empresas")
const compra4 = document.querySelector("#pro")
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



