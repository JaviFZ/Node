const express       = require("express");
const axios         = require("axios");
const app           = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

let usuario = null; //{nombre: "Jose", apellidos: "Garcia Garcia"}

app.get("/user", 
        function(request, response)
        {
            const url = "http://localhost:3000/usuario";

            axios.get(url)
            .then(function (data)
            {
                response.send(data.data)
            })
            .catch(function (error)
            {
                response.send(error)
            })
        }
        );

app.listen(5000);