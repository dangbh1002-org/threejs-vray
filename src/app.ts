
import * as express from 'express';
import * as shell from 'shelljs';
import { Application, Request, Response, NextFunction } from 'express';

const app: Application = express();

app.get('/', (req: Request, res: Response, next: NextFunction) => {
    console.log("Rendering");
    shell.exec(`vray -sceneFile="${__dirname}/static/maxscript/vrscenes/scene2.vrscene" -imgFile="${__dirname}/static/output/scene2.jpg" -autoClose=1`, function (code, stdout, stderr) {
        console.log('Exit code:', code);
        console.log('Program output:', stdout);
        console.log('Program stderr:', stderr);
    });
    res.send("Hello world");
})

app.listen(3000, () => {
    console.log("Server is running on port 3000");
})
