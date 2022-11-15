
const {Professional} = require("../profesional")


let profesionales = [];

// let profesional1 = new Professional("Juan", 23, 70, 180);





function getProfesionales(request, response) 
{
    let prof = request.body.id
    let respuesta;

    if(prof == null){
        respuesta = profesionales;
       
    }
    else if (profesionales[prof] != null){
        respuesta = profesionales[prof];
    }
    else{
        respuesta = {error: true, codigo: 200, mensaje: "El profesional no existe"}
    } 
    response.send(respuesta);
};


function postProfesional(request, response) 
{
    let newProf = new Professional 
    (
        request.body.name,
        request.body.age,
        request.body.weight,
        request.body.height
    );
    let respuesta;
    console.log(request.body);
    if (newProf !== null){
        profesionales.push(newProf);
        respuesta = {error: false, codigo: 200,mensaje: 'Profesional creado', resultado: newProf }; 
    } else {
        respuesta = { error: true, codigo: 200, mensaje: 'El Profesional ya existe', resultado: null };
    }    
    response.send(respuesta);          
};



function putProfesional(request, response)
{
    let respuesta;
    let prof = request.body.id
    let newProf = new Professional
    (
        request.body.name,
        request.body.age,
        request.body.weight,
        request.body.height,
    )
    // if(request.body.name == null ){
    //     return request.query.name;
    // }
    // else if(!request.body.age == null){
    //     return request.query.age;
    // }    
    // else if(!request.body.weight== null){
    //     return request.query.weight;
    // }
    // else if(!request.body.name== null){
    //     return request.query.height;
    // }
    if (profesionales[prof] != null)
    {
        profesionales[prof] = newProf
        respuesta          = {error: false, codigo: 200,
                            mensaje: 'Profesional actualizado', resultado: newProf};
    }
    else
        respuesta = {error: true, codigo: 200,
                    mensaje: 'El profesional no existe', resultado: newProf};
                    
    response.send(respuesta);
};



function deleteProfesional(request, response) 
{
    let respuesta
    let prof = request.body.id
    if(profesionales[prof] != null)
    {
        profesionales.splice([prof], 1);
        respuesta   = {error: false, codigo: 200, mensaje: 'Profesional borrado'};
    }    
    else
        respuesta   = {error: true, codigo: 200, mensaje: 'El profesional no existe', resultado: profesionales[prof]};

    response.send(respuesta);
};




module.exports = { postProfesional, putProfesional, deleteProfesional, getProfesionales};