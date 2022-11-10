
const fs = require('fs/promises');

const readline = require('readline');


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


let persona = {
    name : "",
    surname : "",
    age : "",
}
// // THEN / CATCH //////

// question("introduce tu nombre: ")
// .then((name) => {
//     persona.name = name;
//     return question("Introduce tu apellido: ")
// })
// .then((surname)=> {
//     persona.surname = surname;
//     return question("Introduce tu edad: ")
// })
// .then((age) => {
//     persona.age = age;
//     return fs.writeFile("reto3_R.json", JSON.stringify(persona))
// })
// .then(() => {
//     return fs.readFile("reto3_R.json", "utf-8")
// })
// .then((data) => {
//     console.log(JSON.parse(data));
// })
// .catch(err => {
//     console.log(err);
// })



// // CON ASYNC / AWAIT ///////

async function asyncAwait() {
    try{
        let name = await question("introduce tu nombre: ")
        persona.name = name;
        let surname = await question("Introduce tu apellido: ")    
        persona.surname = surname;
        let age = await question("Introduce tu edad: ")
        persona.age = age;
        await fs.writeFile("reto3_R.json", JSON.stringify(persona))

        const nuevo = await fs.readFile("reto3_R.json", "utf-8")

        console.log(JSON.parse(nuevo));

    } catch (error) {

        console.log(error);
    }

}

asyncAwait()