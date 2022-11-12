const {aplication} = require('express');

const express = require('express');

const app = express();


app.get("/", function (request, response)
{
    console.log(request.url)
    console.log(request.method)
    console.log(request.headers["user-agent"])
    response.send("Petición recibida por el cliente")
    response.status(200).json({ok: true, message: 'Recibido!'})
})


app.get("/bye", function (request, response)
{
    response.status(200).json({ok: true, message: 'Adiós!'})
})

app.listen(3000)