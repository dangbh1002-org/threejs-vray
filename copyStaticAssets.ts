import * as shell from 'shelljs';

shell.rm('-rf', 'dist/static');
shell.mkdir('-p', 'dist/static');
shell.cp("-R", "src/static", "dist");
