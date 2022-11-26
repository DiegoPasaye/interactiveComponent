const one = document.querySelector(".one")
const two = document.querySelector(".two")
const three = document.querySelector(".three")
const four = document.querySelector(".four")
const five = document.querySelector(".five")

const container1 = document.querySelector(".container")
const tycontainer = document.querySelector(".thankyoucontainer")
const imgtycontainer = document.querySelector(".tyimg")
const thankyou = document.querySelector(".h1ty")
const apreciacion = document.querySelector(".thankyou")


const calificacionfinal =  document.querySelector(".calificacion")


let calificacion = 0
one.addEventListener("click", (e) => {
    calificacion = 1
    one.backgroundcolor = "red"
    console.log(calificacion)
})

two.addEventListener("click", (e) => {
    calificacion = 2
    console.log(calificacion)
})

three.addEventListener("click", (e) => {
    calificacion = 3
    console.log(calificacion)
})

four.addEventListener("click", (e) => {
    calificacion = 4
    console.log(calificacion)
})

five.addEventListener("click", (e) => {
    calificacion = 5
    console.log(calificacion)
})

const enviar = () => {
    window.location.href = "thankyou.html"
    console.log("moviendose")
    calificacionfinal.innerHTML = "You selected " + calificacionfinal + " of 5"
    document.getElementsByClassName("calificacion").innerHTML = "hola"
    thankyou.className = "ocultar"
    console.log(calificacionfinal)
}