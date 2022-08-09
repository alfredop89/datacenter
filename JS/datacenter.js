// MODAL
const dcmodal = document.querySelector(".dc-modal-container")
const modal = document.querySelector(".dc-modal")
const modalbutton = document.querySelectorAll(".dc-banner-button")
const cerrar = document.querySelector("#close-modal")

modal.addEventListener("click", (e) =>{
    e.stopPropagation()
})
document.onclick = () =>{
    dcmodal.classList.remove("open-dcmodal")
}

for(let index = 1; index < 5; index++){
    modalbutton[index].addEventListener("click", (e) =>{
        dcmodal.classList.add("open-dcmodal")
        e.stopPropagation()
    })
}











// modalbutton[1].addEventListener("click", (e) =>{
//     dcmodal.classList.add("open-dcmodal")
//     e.stopPropagation()
// })
// modalbutton[2].addEventListener("click", (e) =>{
//     dcmodal.classList.add("open-dcmodal")
//     e.stopPropagation()
// })
// modalbutton[3].addEventListener("click", (e) =>{
//     dcmodal.classList.add("open-dcmodal")
//     e.stopPropagation()
// })
// modalbutton[4].addEventListener("click", (e) =>{
//     dcmodal.classList.add("open-dcmodal")
//     e.stopPropagation()
// })
cerrar.onclick = () =>{
    dcmodal.classList.remove("open-dcmodal")
}