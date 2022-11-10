const fs = require("fs/promises");

function writeAndReadThenCatch(path, obj) {
    fs.writeFile(path, JSON.stringify(obj))

        .then(() => {
            return fs.readFile(path, "utf-8")

        })
        .then(data => {
            console.log(JSON.parse(data));
        })
        .catch(err => {
            console.log(err);
        })

}
writeAndReadThenCatch("./direccion.json", { calle: "Teruel", numero: 8 })


// let persona = {
//     nombre: "Javi",
//     apellido: "Fdez"
// }

function writeAndReadAsyncAwait(path, obj) {

    async function asyncAwait() {
        await fs.writeFile(path, JSON.stringify(obj))
        const guardBox = await fs.readFile(path, "utf8")
        console.log(JSON.parse(guardBox));

    }
    asyncAwait()

}

writeAndReadAsyncAwait("./miFichero-b.json", { calle: "Paz", numero: 2 })

module.exports = { writeAndReadAsyncAwait,  writeAndReadThenCatch};