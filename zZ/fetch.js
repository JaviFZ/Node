class User
{
    constructor(nombre, apellidos)
    {
        this.nombre1 = nombre;
        this.apellido1 = apellidos
    }
}

function postUser()
{
    let user = new User(document.getElementById("nombre").value,
                        document.getElementById("apellidos").value)
    
    const url = "http://localhost:3000/usuario";

    if (validar(user))
    {
        let param = 
            {
                headers: {"Content-type": "application/json; charset= UTF-8"},
                body: JSON.stringify(user),
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

function getUser()
{
    let url = "http://localhost:3000/usuario";

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
            document.getElementById("mostrarNombre").value = result.nombre;
            document.getElementById("mostrarApellidos").value = result.apellidos;
        }
        else
            showToast("ERROR: " +  result.mensaje, "bg-danger")

    })
    .catch(function(error)
    {
        console.log(error)
    })
}


function validar(user)
{
    resultado = false
    if (user.nombre1 == "" || user.nombre1 == "null")
    {
        showToast("AVISO: Campo nombre no informado", "bg-warning")
    }
    else if (user.apellido1 == "" || user.apellido1 == "null")
    {
        showToast("AVISO: Campo apellido no informado", "bg-warning")
    }
    else
        resultado = true

    return resultado;
}

function showToast(message, color)
{
    document.getElementById("toastText").innerText=message;
    let toastElement  = document.getElementById('toast')

    toastElement.className = toastElement.className.replace("bg-warning").replace("bg-danger") + " "  + color;

    let toast = new bootstrap.Toast(toastElement)
    toast.show()
}



// async function postUser()
// {
//     try
//     {    
//         let user = new User(document.getElementById("nombre").value,
//                             document.getElementById("apellidos").value)
        
//         let url = "http://localhost:3000/usuario";

//         let param = 
//             {
//                 headers: {"Content-type": "application/json; charset= UTF-8"},
//                 body: JSON.stringify(user),
//                 method: "POST"
//             }

//         let data    = await fetch(url, param);
//         let result  = await data.json();
        
//         console.log(result)
//     }    
//     catch(error)
//     {
//         console.log(error)
//     }
// }


// async function getUser()
// {
//     let url = "http://localhost:3000/usuario";

//     let param = 
//     {
//         headers: {"Content-type": "application/json; charset= UTF-8"},
//         method: "GET"
//     }

//     try
//     {
//         let data = await fetch(url, param);
//         let result = await data.json();
//         document.getElementById("mostrarNombre").value = result.nombre;
//         document.getElementById("mostrarApellidos").value = result.apellidos;
//     }
//     catch(error)
//     {
//         console.log(error)
//     }

// }




