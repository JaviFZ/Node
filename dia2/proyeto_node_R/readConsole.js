const readline = require('readline');

const fs = require('fs/promises');

// // funcion para utilizar readline como promesa ya que su modulo no tiene la opción//
function question(pregunta) {
    const question = new Promise((resolve, reject) => {
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
        rl.question(pregunta, (respuesta) => {
            resolve(respuesta);
            rl.close();
        });
    });
    return question;
}



function readConsoleThenCatch(callback) {
    let persona = {};
    question("Introduce el nombre: ")

        .then((name) => {
            persona.name = name;
            return question("Introduce el apellido: ")
        })
        .then((surname) => {
            persona.surname = surname;
            return question("Introduce la edad: ")
        })
        .then((age) => {
            persona.age = age;
            return callback(persona);
        })
        .catch((err) => {
            console.log(err);
        })
}

// readConsoleThenCatch(console.log)

async function readConsoleAsyncAwait(callback) {
    try {
        let persona = {};
        let preguntaName = await question("Introduce el nombre: ")
        persona.name = preguntaName;
        let preguntaSurname = await question("Introduce el apellido: ")
        persona.surname = preguntaSurname;
        let preguntaAge = await question("Introduce la edad: ")
        persona.age = preguntaAge;
        await callback(persona)
    } catch (err) {
        console.log(err);
    }
}

// readConsoleAsyncAwait(console.log)

module.exports = { readConsoleThenCatch, readConsoleAsyncAwait };
