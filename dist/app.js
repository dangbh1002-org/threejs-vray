"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const shell = require("shelljs");
console.log(__dirname);
const app = express();
app.get('/', (req, res, next) => {
    console.log("Rendering");
    shell.exec(`vray -sceneFile="${__dirname}/static/scenes/cornell.vrscene" -imgFile="${__dirname}/static/output/fileName.jpg" -autoClose=1`, function (code, stdout, stderr) {
        console.log('Exit code:', code);
        console.log('Program output:', stdout);
        console.log('Program stderr:', stderr);
    });
    res.send("Hello world");
});
app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
