function agregar_dato(nombre, apellido) {
    document.getElementById('div_listado').style.display = "none"

    nombre = nombre,
        apellido = apellido


    console.log(nombre)
    console.log(apellido)
    datos.push({ nombre, apellido })

}


function listar_datos() {
    document.getElementById('div_listado').style.display = "block"
    document.getElementById("tabla_listado").innerHTML = ""
    for (let i = 0; i < datos.length; i++) {
        document.getElementById("tabla_listado").innerHTML += '<tr> <td>' + datos[i].nombre + '</td> <td>' + datos[i].apellido + '</td> </tr>'
        console.log(datos)
    }
}






function limpiar_formulario() {
    document.querySelector("#nombre").value = "";
    document.querySelector("#apellido").value = "";
}





function eliminar_datos() {
    document.querySelector("#div_listado").innerHTML = "";
}

//function actualizar_datos(){
//datos[i].nombre = document.querySelector("#nombre").value;
//datos[i].apellido = document.querySelector("#apellido").value;
//}
