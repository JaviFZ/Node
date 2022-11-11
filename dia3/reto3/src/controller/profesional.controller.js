
const {Professional} = require("../profesional")


let profesionales = [];



function getStart(request, response) 
{
    let respuesta = {error: true, codigo:200, mensaje: 'punto de inicio'};
    response.send(respuesta);    
};



function getProfesionales(request, response) 
{
    let respuesta;
    if (profesionales != null)
        respuesta = profesionales;
    else
        respuesta = {error: true, codigo: 200, mensaje: "El profesional no existe"}
        
    response.send(respuesta);
};



function postProfesionales(request, response) 
{
    let profesional = request.query.id;
    let respuesta;

    if (profesional != null && (!id || id === profesional.id))
    {
        profesional = {nombre: request.query.name,
                        edad: request.query.age,
                        peso: request.query.weight,
                        altura: request.query.height}
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



module.exports = {getStart, getProfesionales, postProfesionales, putProfesional, deleteProfesional};