//Añadiendo y eliminando propiedades 
const estudiantes = {
    nombre: 'Liber',
    apellido: 'Zapata',
    email: 'liber@liber.com',
    "Codigo estudiante": 4
}

liber.nombre = 'Carlos'
liber.apellido = 'Quintero'
liber.telefono = "12387238658634"
console.log(liber)
delete liber.telefono
console.log(liber)