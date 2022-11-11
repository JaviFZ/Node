
const {Professional} = require("../profesional")


let profesional = null;

// let profesional1 = new Professional("Juan", 23, 70, 180);

function getStart(request, response) 
{
    let respuesta = {error: true, codigo:200, mensaje: 'punto de inicio'};
    response.send(respuesta);    
};



function getProfesional(request, response) 
{
    let respuesta;
    if (profesional != null)
        respuesta = profesional;
    else
        respuesta = {error: true, codigo: 200, mensaje: "El profesional no existe"}
        
    response.send(respuesta);
};



function postProfesional(request, response) 
{
    let respuesta;
    console.log(request.body)
    if (profesional === null)
    {
        profesional = {nombre: request.body.name,
                        edad: request.body.age,
                        peso: request.body.weight,
                        altura: request.body.height}
        respuesta = {error: false, codigo: 200,
                    mensaje: 'Profesional creado', resultado: profesional};                
    }    
    else 
        respuesta = {error: true, codigo: 200,
                    mensaje: 'El profesional ya existe', resultado: null};
               
    response.send(respuesta);                
};



function putProfesional(request, response)
{
    let respuesta
    if (profesional != null)
    {
        profesional.nombre = request.body.name;
        profesional.edad   = request.body.age;
        profesional.peso   = request.body.weight;
        profesional.altura = request.body.height;
        respuesta          = {error: false, codigo: 200,
                            mensaje: 'Profesional actualizado', resultado: profesional};
    }
    else
        respuesta = {error: true, codigo: 200,
                    mensaje: 'El profesional no existe', resultado: profesional};
                    
    response.send(respuesta);
};



function deleteProfesional(request, response) 
{
    let respuesta
    if(profesional != null)
    {
        profesional = null;
        respuesta   = {error: false, codigo: 200,
                    mensaje: 'Profesional borrado', resultado: profesional};
    }    
    else
        respuesta   = {error: true, codigo: 200,
                    mensaje: 'El profesional no existe', resultado: profesional};

    response.send(respuesta);
};



module.exports = {getStart, getProfesional, postProfesional, putProfesional, deleteProfesional};