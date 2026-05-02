function generarTablas(){

    let contenedor = document.getElementById("contenedorTabla");

    let contenido = "<table>";

    let numero = parseInt(document.getElementById("numero").value);

if(isNaN(numero)){
    contenedor.innerHTML = "<p>Ingresa un número válido</p>";
    return;
}

for(let i = 1; i <= 10; i++){
    contenido += "<p>" + numero + " x " + i + " = " + (numero * i) + "</p>";
}

    contenido += "</table>";

    contenedor.innerHTML = contenido;
}
function modoPractica(){

    let contenedor = document.getElementById("contenedorTabla");
    let numero = parseInt(document.getElementById("numero").value);

    if(isNaN(numero)){
        contenedor.innerHTML = "<p>Ingresa un número válido</p>";
        return;
    }

    let contenido = "<table>";

    for(let i = 1; i <= 10; i++){
        contenido += "<tr>";
        contenido += "<td>" + numero + " x " + i + "</td>";
        contenido += "<td>=</td>";
        contenido += "<td><input class='respuesta' data-valor='" + (numero*i) + "'></td>";
        contenido += "</tr>";
    }

    contenido += "</table>";

    contenedor.innerHTML = contenido;
}

function validarRespuestas(){

    let inputs = document.querySelectorAll(".respuesta");

    inputs.forEach(input => {
        let correcto = input.getAttribute("data-valor");
        let valor = input.value;

        if(valor == correcto){
            input.classList.add("correcto");
            input.classList.remove("incorrecto");
        }else{
            input.classList.add("incorrecto");
            input.classList.remove("correcto");
        }
    });
}