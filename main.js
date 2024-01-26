let body = document.querySelector("body")
let circle = document.querySelector(".circle")

circle.addEventListener("click" , () => {
    body.classList.toggle("active")
    circle.classList.toggle("active")
})