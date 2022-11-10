const { readConsoleThenCatch } = require("./readConsole.js");
const { writeAndReadAsyncAwait, writeAndReadThenCatch } = require("./writeAndReadObject.js");


readConsoleThenCatch(function (obj) {
    writeAndReadAsyncAwait("objeto.json", obj)
});



