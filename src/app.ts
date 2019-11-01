import * as express from 'express';
import * as shell from 'shelljs';
import { Application, Request, Response, NextFunction } from 'express';

const app: Application = express();

app.get('/vray', (req: Request, res: Response, next: NextFunction) => {
    console.log("Rendering");
    shell.exec(`vray -sceneFile="${__dirname}/static/maxscript/vrscenes/scene2.vrscene" -imgFile="${__dirname}/static/output/scene2.jpg" -autoClose=1`, function (code, stdout, stderr) {
        console.log('Exit code:', code);
        console.log('Program output:', stdout);
        console.log('Program stderr:', stderr);
    });
    res.send("Hello world from vray");
})

app.get('/blender', (req: Request, res: Response, next: NextFunction) => {
    console.log("Rendering");

    var scene = "scene";
    var image = "image_render";

    shell.exec(`blender -b --python ${__dirname}/static/blender_control.py -- ${__dirname}/static/gltf_scene\\${scene}.gltf ${__dirname}/static/render_result\\${image}.png`, function (code, stdout, stderr) {
        console.log('Exit code:', code);
        console.log('Program output:', stdout);
        console.log('Program stderr:', stderr);
    });
    res.send("Hello world from blender");
})

app.listen(3000, () => {
    console.log("Server is running on port 3000");
})
