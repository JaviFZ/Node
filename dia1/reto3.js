
const fs = require('fs');

const readline = require('readline');

const rl = readline.createInterface(process.stdin, process.stdout);

let persona = {
    name : "",
    surname : "",
    age : "",
}

rl.question("introduce tu nombre: ", (name) => {
    persona.name = name;
    // console.log(persona);

    rl.question("Introduce tu apellido: ", (surname) => {
        persona.surname = surname;
        // console.log(persona);

        rl.question("Introduce tu edad: ", (age) => {
            persona.age = age;
            // console.log(persona);

            rl.close();

            fs.writeFile("./reto3.json", JSON.stringify(persona), (any)=>          
            {
                fs.readFile("./reto3.json", "utf-8",(any, persona)=>{console.log(JSON.parse(persona))} );
            }, ); 
        })
    })
})

