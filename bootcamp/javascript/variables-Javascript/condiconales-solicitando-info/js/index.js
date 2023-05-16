// console.log("funciona")
let datosCompletos = false
let nombre = prompt("Ingrese su nombre")
if (nombre != '') {
    let apellido = prompt("Ingrese el apellido")
    if (apellido != "") {
        // alert(apellido)
        let textoEdad = prompt("Ingrese su edad")
        if(textoEdad !=''){
            let edad = Number(textoEdad)
            //alert (typeof edad)
            if (edad >= 18){
                document.write("Bienvenido a el bar BIT")
            } else{
                alert("Eres menor de edad No puedes ingresar al sitio")
            }
        }else{
            alert("Hey la edad es requerido")
            window.location.reload()
        }
        
    }else{
        alert("Hey el apellido es requerido")
        window.location.reload()
    }
    
} else{
    alert("Hey el nombre es requerido")
    window.location.reload()
}
// alert(nombre)



