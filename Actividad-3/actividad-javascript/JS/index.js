//Zona de variables de la pagina 
const Counter = document.querySelector('titulo')
const mensajecontador = document.querySelector('#mensajecontador')



//Zona de variables de botones
const btnSumar = document.querySelector('#button-1')
const btnResetear = document.querySelector('#button-2')
const btnRestar = document.querySelector('#button-3')


let num = Number(mensajecontador.textContent)

// let sumar = () => {
//     num++; mensajecontador = num
// }

// let restar = () => {
//     num--; mensajecontador = num
// }

// let resetear = () => {
//     num = 0; mensajecontador = num
// }

btnSumar.addEventListener('click', () => { 
    num++; mensajecontador = num
})

btnResetear.addEventListener('click', () => {
    num = 0; mensajecontador = num
})

btnRestar.addEventListener('click', () => {
    num--; mensajecontador = num
})


// sumar ()
// restar ()
// reset ()