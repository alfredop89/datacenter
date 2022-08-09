// MODAL
const dcmodal = document.querySelector(".dc-modal-container")
const modal = document.querySelector(".dc-modal")
const modalbutton = document.querySelectorAll(".dc-banner-button")
const cerrar = document.querySelector("#close-modal")

modal.addEventListener("click", (e) =>{
    e.stopPropagation
})

modalbutton[1].addEventListener("click", () =>{
    dcmodal.classList.add("open-dcmodal")
})
modalbutton[2].addEventListener("click", () =>{
    dcmodal.classList.add("open-dcmodal")
})
modalbutton[3].addEventListener("click", () =>{
    dcmodal.classList.add("open-dcmodal")
})
modalbutton[4].addEventListener("click", () =>{
    dcmodal.classList.add("open-dcmodal")
})
cerrar.onclick = () =>{
    dcmodal.classList.remove("open-dcmodal")
}