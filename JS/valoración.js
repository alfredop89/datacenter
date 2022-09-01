const valBtn = document.querySelector(".val-btn")
const valContainer = document.querySelector('.val-container')
const valIcon = document.querySelector('.val-icon')

window.addEventListener("scroll", () => {
    window.scrollY >= 800 ? valBtn.classList.add("open-valbtn") : valBtn.classList.remove("open-valbtn")
    if(window.scrollY <= 800){
        valContainer.classList.remove('open-valbtn')
    }
    else if(window.scrollY >= 5550){
        valBtn.classList.remove('open-valbtn')
    }
})

window.onclick = () =>{
    valContainer.classList.remove('open-valbtn')
    valBtn.classList.remove('val-icon-red')

}

valContainer.onclick = (e) =>{
    e.stopPropagation()
}

valBtn.onclick = (e) =>{
    e.stopPropagation()
    valContainer.classList.toggle('open-valbtn')
    valBtn.classList.toggle('val-icon-red')
}

const icon1 = document.querySelector('#val-1')
const icon2 = document.querySelector('#val-2')
const icon3 = document.querySelector('#val-3')
const icon4 = document.querySelector('#val-4')

const arrayIcons = [icon1, icon2, icon3, icon4].forEach((e) =>{
    e.onclick = () =>{
        valContainer.classList.remove('open-valbtn')
        valBtn.classList.remove('val-icon-red')
        Toastify({
            style: {
                background: 'green'
            },
            gravity: "bottom",
            position: 'center',
            text: 'Gracias por tu valoración',
            duration: 6000
            
            }).showToast();
    }

})





