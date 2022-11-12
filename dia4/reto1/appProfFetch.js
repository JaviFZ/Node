
const {Professional} = require("../reto1/profesional")


// FUNCION VALIDAR PARA QUE LOS PROFESIONALES SE CREEN CON TODOS LOS CAMPOS


function validar(profesional)
{
    resultado = false
    if (profesional.name == "" || profesional.name == "null")
    {
        alert("AVISO: Campo nombre no informado", "bg-warning")
    }
    else if (profesional.age == "" || profesional.age == "null")
    {
        showToast("AVISO: Campo edad no informado", "bg-warning")
    }
    else if (profesional.height == "" || profesional.height == "null")
    {
        showToast("AVISO: Campo altura no informado", "bg-warning")
    }
    else if (profesional.weight == "" || profesional.weight == "null")
    {
        showToast("AVISO: Campo peso no informado", "bg-warning")
    }
    else
        resultado = true

    return resultado;
}

// // FUNCION PARA MOSTRAR EL TOAST (UNA ESPECIE DE ALERT)

function showToast(message, color)
{
    document.getElementById("toastText").innerText=message;
    let toastElement  = document.getElementById('toast')

    toastElement.className = toastElement.className.replace("bg-warning").replace("bg-danger") + " "  + color;

    let toast = new bootstrap.Toast(toastElement)
    toast.show()
}




function postProfesional()
{
    let profesional = new Professional(document.getElementById("nombre").value,
                        document.getElementById("edad").value,
                        document.getElementById("altura").value,
                        document.getElementById("peso").value,)
    
    const url = "http://localhost:3000/profesional";

    if (validar(profesional))
    {
        let param = 
            {
                headers: {"Content-type": "application/json; charset= UTF-8"},
                body: JSON.stringify(profesional),
                method: "POST"
            }

        fetch(url, param)
        .then(function(data)
        {
            return data.json()
        })
        .then(function(result)
        {
            if (result.error)
                showToast("ERROR: " +  result.mensaje, "bg-danger")
            else
                showToast("Usuario Creado Correctamente", "bg-success")

            console.log(result)
        })
        .catch(function(error)
        {
            console.log(error)
        })
    }
}



function getProfesionales()
{
    let url = "http://localhost:3000/profesional";

    let param = 
    {
        headers: {"Content-type": "application/json; charset= UTF-8"},
        method: "GET"
    }

    fetch(url, param)
    .then(function(data)
    {
        return data.json()
    })
    .then(function(result)
    {      
        if (!result.error)
        {
            document.getElementById("muestra").value = result;
        }
        else
            showToast("ERROR: " +  result.mensaje, "bg-danger")

    })
    .catch(function(error)
    {
        console.log(error)
    })
}


module.exports = {postProfesional, getProfesionales}