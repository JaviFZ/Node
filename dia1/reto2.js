const fs = require('fs');


let persona = {
    name : "Javier",
    surname : "Fernández",
    age : "30",
}


fs.writeFile("./reto2.json", JSON.stringify(persona), (any)=>           // // introducimos en parametros primero el archivo que vamos a crear, luego el objeto pasado a string, y luego una función que obliga a poner pero puee ser vacía.
            {
                fs.readFile("./reto2.json", "utf-8",(any, persona)=>{console.log(JSON.parse(persona))} );
            }, ); 




