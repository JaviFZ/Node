
const {Professional} = require("../profesional")


let profesionales = [];

// let profesional1 = new Professional("Juan", 23, 70, 180);


function getProfesional(request, response) 
{
    let prof = request.query.id
    let respuesta;
    if (profesionales[prof] != null){
        respuesta = profesionales[prof];
    }
    else
        respuesta = {error: true, codigo: 200, mensaje: "El profesional no existe"}
        
    response.send(respuesta);
};


function getProfesionales(request, response) {
    let respuesta = profesionales;
    response.send(respuesta)
}


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
    let prof = request.query.id
    let newProf = new Professional
    (
        request.body.name,
        request.body.age,
        request.body.weight,
        request.body.height,
    )
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
    let prof = request.query.id
    if(profesionales[prof] != null)
    {
        profesionales[prof] = null;
        respuesta   = {error: false, codigo: 200, mensaje: 'Profesional borrado'};
    }    
    else
        respuesta   = {error: true, codigo: 200, mensaje: 'El profesional no existe', resultado: profesionales[prof]};

    response.send(respuesta);
};




module.exports = {getProfesional, postProfesional, putProfesional, deleteProfesional, getProfesionales};