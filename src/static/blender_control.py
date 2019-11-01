
import bpy
import os
import sys

try:
    argv = sys.argv

    # get all args after "--"
    if "--" in argv:
        argv = argv[argv.index("--") + 1:]
    else:
        argv = []

    # import model
    bpy.ops.wm.read_factory_settings(use_empty=True)
    bpy.ops.import_scene.gltf(filepath=argv[0])

    #render and save
    camera = bpy.context.scene.objects["PerspectiveCamera"]
    scene = bpy.context.scene
    scene.camera = camera
    scene.render.image_settings.file_format = 'PNG'
    scene.render.filepath = argv[1]
    bpy.ops.render.render(write_still = 1)

except Exception as err:
    print(err, file=sys.stderr)
    sys.exit(1)