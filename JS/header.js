// BARRA DE PROGRESO

const barraProgreso = document.querySelector('.barra-progreso')

function loadScroll () {

   let windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
   let load = document.documentElement.scrollTop / windowHeight * 100

   barraProgreso.style.width = load + '%'

}

window.addEventListener('scroll', loadScroll)

// HEADER

const header = document.querySelector("#dc-header")
    window.addEventListener("scroll", () => {
    window.scrollY >= 50 ? header.classList.add("color-bg") : header.classList.remove("color-bg")
})


