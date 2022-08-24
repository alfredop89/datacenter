// HEADER

const header = document.querySelector("#dc-header")
    window.addEventListener("scroll", () => {
    window.scrollY >= 50 ? header.classList.add("color-bg") : header.classList.remove("color-bg")
})