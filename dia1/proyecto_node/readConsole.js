const readline = require('readline');
// const fs = require('fs');
const rl = readline.createInterface(process.stdin, process.stdout);


export function readConsole (callback) {
    let persona = {};
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
    
                callback(persona);
            })
        })
    })
    
}

readConsole(console.log);