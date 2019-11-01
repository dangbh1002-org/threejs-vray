const { exec } = require('child_process');

var scene = "scene_render";
var image = "image_render";

exec(`blender -b --python ${__dirname}\\static/blender_control.py -- ${__dirname} \\static/gltf_scene\\${scene}.gltf \\static/render_result\\${image}.png`, (err, stdout, stderr) => {
  if (err) {
    console.log(err)
    return;
  }
  console.log(`stdout: ${stdout}`);
  console.log(`stderr: ${stderr}`);
});