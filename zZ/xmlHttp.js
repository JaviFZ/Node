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

    console.log(JSON.stringify(user));
    
    let xhttp = new XMLHttpRequest();

    xhttp.open("POST", "http://localhost:3000/usuario", true);
    xhttp.setRequestHeader("Content-type", "application/json")
    xhttp.send(JSON.stringify(user))
}

function getUser()
{
    let xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function (aEvt)
    {
        if (xhttp.readyState == 4 && xhttp.status == 200)
        {
            let dataJson = JSON.parse(xhttp.responseText);
            document.getElementById("mostrarNombre").value = dataJson.nombre;
            document.getElementById("mostrarApellidos").value = dataJson.apellidos;
        }
    }
    
    xhttp.open("GET", "http://localhost:3000/usuario", true)
    xhttp.send()
}