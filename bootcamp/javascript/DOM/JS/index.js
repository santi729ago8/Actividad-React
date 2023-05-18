//Selectore
const etiquetaH1 = document.querySelector('h1')
// const parrafo = document.getElementById('parrafo')
const parrafo = document.querySelector('#parrafo')
const boton = document.querySelector('.boton')
const enlace = document.querySelector('.enlace')


//Añadir escuchador de eventos, evento click
boton.addEventListener('click', function(){
    etiquetaH1.innerHTML = "Nuevo valor"
    parrafo.innerHTML = "Nuevo contenido en el parrafo"
})