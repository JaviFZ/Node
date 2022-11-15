
// const {Professional} = require("./profesional")
class Professional {
    
    constructor(name, age, height ,weight){
        this.name = name;
        this.age = age;
        this.height = height;
        this.weight = weight;
        
    }
}    


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
    
    const url = "http://localhost:3000/profesionales";

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
                showToast("Profesional Creado Correctamente", "bg-success")

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

    let lista = document.getElementById("profesionales");  
    lista.innerHTML=""
    let id = document.getElementById("id").value;
    if(id){

        let url = "http://localhost:3000/profesionales?id="+id;

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
              
        // console.log(solicitud);                                
        lista.innerHTML += `<p>Nombre: ${result[id].name} <br>  
                            Edad: ${result[id].age}<br>
                            Altura: ${result[id].height}<br>
                            Peso: ${result[id].weight}<br>
                            </p>`
                                                        
        }
        else
            showToast("ERROR: " +  result.mensaje, "bg-danger")

    })
    .catch(function(error)
    {
        console.log(error)
    })
    } else {
        let url = "http://localhost:3000/profesionales";

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

    result.forEach(function (profesional) {               
        // console.log(solicitud);                                
        lista.innerHTML += `<p>Nombre: ${profesional.name} <br>  
                            Edad: ${profesional.age}<br>
                            Altura: ${profesional.height}<br>
                            Peso: ${profesional.weight}<br>
                            </p>`
    })                                                       
        }
        else
            showToast("ERROR: " +  result.mensaje, "bg-danger")

    })
    .catch(function(error)
    {
        console.log(error)
    })
    }

    
}

function putProfesional() {
    let newName = document.getElementById("nombre").value;
    let newAge = document.getElementById("edad").value;
    let newHeight = document.getElementById("altura").value;  
    let newWeight = document.getElementById("peso").value;
    let id = document.getElementById("id").value;
    
    let param = {headers: {"Content-type": "application/json; charset= UTF-8",},
        method: "PUT",
        body: JSON.stringify({name: newName, age: newAge, height: newHeight, weight: newWeight})
            
    };
    // if(newName == null || newName == ""){
    //     return newName = name;
    // }
    
    let url = "http://localhost:3000/profesionales?id="+ id
    
    if (id != "") {
        fetch(url, param)
        .then((data) => {
        return data.json();
        })
        .then((data) => {
          console.log(data);
          showToast("Profesional Modificado Correctamente", "bg-success")
        })
        .catch((error) => {
          console.log(error);
          showToast("ERROR: " +  result.mensaje, "bg-danger")
        })
    
    } else {
        showToast("Rellena el campo Id", "bg-danger");
    }
}




function deleteProfesional() {
    let id = document.getElementById("id").value;
  
    let param = {headers: {"Content-type": "application/json; charset= UTF-8",},
      method: "DELETE",
  
    };
  
    let url = "http://localhost:3000/profesionales?id="+id
  
    if (id) {
        fetch(url,param)
        .then((data) =>{
        return data.json()
        })
        .then((data) => {
        console.log(data);
        showToast("Profesional eliminado", "bg-success")
        })
        .catch((error) => {
        console.log(error);
        })
    } else {
        showToast("Rellena el campo id", "bg-danger");
    }
}

