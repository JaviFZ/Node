const fs = require('fs/promises');


let persona = {
    name : "Javier",
    surname : "Fernández",
    age : "32",
}

// // CON THEN / CATCH

fs.writeFile("./reto2_R.json", JSON.stringify(persona))
.then( () => {
    return fs.readFile("./reto2_R.json", "utf-8")
})
.then( persona => {
    console.log(JSON.parse(persona));
})
.catch(err => {
    console.log(err);
})



// // CON ASYNC / AWAIT

async function asyncAwait() {
    await fs.writeFile("reto2_R.json", JSON.stringify(persona))

    const nuevo = await fs.readFile("reto2_R.json", "utf8")

    console.log(JSON.parse(nuevo));
}

asyncAwait();
