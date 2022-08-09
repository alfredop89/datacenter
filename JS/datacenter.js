// MODAL
const dcmodal = document.querySelector("#dc-modal-container")

// dcmodal,addEventListener("submit", (Event) =>{
//     Event.preventDefault()
// })
dcmodal.addEventListener("click", () =>{
    dcmodal.classList.remove(".open-dcmodal")
})
const compra1 = document.querySelector(".btnbasico")
compra1.onclick = () => {
    dcmodal.classList.add("open-dcmodal")
}
const compra2 = document.querySelector(".btnnegocios")
compra2.onclick = () => {
    dcmodal.classList.add("open-dcmodal")
}
const compra3 = document.querySelector(".btnempresas")
compra3.onclick = () => {
    dcmodal.classList.add("open-dcmodal")
}
const compra4 = document.querySelector(".btnpro")
compra4.onclick = () => {
    dcmodal.classList.add("open-dcmodal")
}
const closeModal = document.querySelector("#close-modal")
closeModal.onclick = () =>{
    dcmodal.classList.remove("open-dcmodal")
}





