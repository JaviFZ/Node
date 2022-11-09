const fs = require('fs');



export function writeAndRead(path, obj) {
    fs.writeFile(path, JSON.stringify(obj), (any)=>      
                {
                fs.readFile(path, "utf-8",(any, obj)=>{console.log(JSON.parse(obj))} );
                }, ); 

};


writeAndRead("./persona.json", {calle: "Teruel", numero: 8});