
const { writeAndRead } = require('./writeAndReadObject');

const { readConsole } = require('./readConsole');


readConsole(function (obj) {
    writeAndRead("objeto.json", obj)
});

