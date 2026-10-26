"""Commercial concrete pour animation for the N&P Services homepage hero.

Run headless:
  blender -b --factory-startup -P blender/commercial_pour.py -- OUT_DIR [WIDTH HEIGHT] [--still FRAME]

Story (240 frames @ 24 fps = 10 s): rebar mat + formwork on a graded pad ->
slab panels pour in a diagonal sweep, dark and wet -> they cure to light gray ->
curbs rise and parking stripes draw in. Renders a PNG sequence into OUT_DIR.
"""
import math
import sys

import bpy

argv = sys.argv[sys.argv.index("--") + 1:] if "--" in sys.argv else []
OUT_DIR = argv[0] if argv else "//render"
WIDTH = int(argv[1]) if len(argv) > 2 else 1600
HEIGHT = int(argv[2]) if len(argv) > 2 else 900
STILL = int(argv[argv.index("--still") + 1]) if "--still" in argv else None

FPS = 24
FRAMES = 240
LOT_W, LOT_D = 40.0, 24.0      # lot size in metres (x, y)
PANEL = 4.0                    # saw-cut panel size
SLAB_T = 0.15
WET = (0.16, 0.16, 0.17, 1.0)
CURED = (0.60, 0.59, 0.56, 1.0)

scene = bpy.context.scene
for obj in list(bpy.data.objects):
    bpy.data.objects.remove(obj, do_unlink=True)

scene.render.fps = FPS
scene.frame_start, scene.frame_end = 1, FRAMES
scene.render.resolution_x, scene.render.resolution_y = WIDTH, HEIGHT
scene.render.resolution_percentage = 100
scene.render.image_settings.file_format = "PNG"
scene.render.filepath = OUT_DIR.rstrip("/\\") + "/f_"
try:
    scene.render.engine = "BLENDER_EEVEE_NEXT"
except TypeError:
    scene.render.engine = "BLENDER_EEVEE"
try:
    scene.view_settings.view_transform = "AgX"
    scene.view_settings.look = "AgX - Medium High Contrast"
    scene.view_settings.exposure = -0.6
except TypeError:
    pass
eevee = scene.eevee
for attr, val in (("taa_render_samples", 48), ("use_shadows", True),
                  ("use_raytracing", True), ("use_gtao", True)):
    if hasattr(eevee, attr):
        setattr(eevee, attr, val)


def material(name, color, rough=0.8, metal=0.0):
    mat = bpy.data.materials.new(name)
    mat.use_nodes = True
    bsdf = mat.node_tree.nodes["Principled BSDF"]
    bsdf.inputs["Base Color"].default_value = color
    bsdf.inputs["Roughness"].default_value = rough
    bsdf.inputs["Metallic"].default_value = metal
    return mat


def concrete_material():
    """Colour comes from the object's own colour, so each panel can cure on its
    own schedule; darker (wet) panels are also glossier."""
    mat = bpy.data.materials.new("Concrete")
    mat.use_nodes = True
    nt = mat.node_tree
    bsdf = nt.nodes["Principled BSDF"]
    info = nt.nodes.new("ShaderNodeObjectInfo")
    noise = nt.nodes.new("ShaderNodeTexNoise")
    noise.inputs["Scale"].default_value = 40.0
    mix = nt.nodes.new("ShaderNodeMix")
    mix.data_type = "RGBA"
    mix.blend_type = "MULTIPLY"
    mix.inputs["Factor"].default_value = 0.12
    nt.links.new(info.outputs["Color"], mix.inputs[6])
    nt.links.new(noise.outputs["Color"], mix.inputs[7])
    nt.links.new(mix.outputs[2], bsdf.inputs["Base Color"])
    sep = nt.nodes.new("ShaderNodeSeparateColor")
    nt.links.new(info.outputs["Color"], sep.inputs["Color"])
    rng = nt.nodes.new("ShaderNodeMapRange")
    rng.inputs["From Min"].default_value = WET[0]
    rng.inputs["From Max"].default_value = CURED[0]
    rng.inputs["To Min"].default_value = 0.12
    rng.inputs["To Max"].default_value = 0.85
    nt.links.new(sep.outputs[0], rng.inputs["Value"])
    nt.links.new(rng.outputs["Result"], bsdf.inputs["Roughness"])
    return mat


def box(name, size, loc, mat):
    bpy.ops.mesh.primitive_cube_add(size=1, location=loc)
    obj = bpy.context.active_object
    obj.name = name
    obj.scale = size
    bpy.ops.object.transform_apply(scale=True)
    obj.data.materials.append(mat)
    return obj


def key_scale(obj, frame, scale):
    obj.scale = scale
    obj.keyframe_insert("scale", frame=frame)


M_DIRT = material("Graded base", (0.33, 0.27, 0.20, 1), 0.95)
M_GRASS = material("Grass", (0.13, 0.22, 0.08, 1), 0.9)
M_WOOD = material("Form boards", (0.52, 0.36, 0.20, 1), 0.7)
M_REBAR = material("Rebar", (0.30, 0.15, 0.08, 1), 0.5, 0.6)
M_CONC = concrete_material()
M_CURB = material("Curb", (0.72, 0.71, 0.68, 1), 0.8)
M_PAINT = material("Stripe paint", (0.95, 0.95, 0.92, 1), 0.5)
M_YELLOW = material("Truck yellow", (0.85, 0.55, 0.05, 1), 0.4)
M_DRUM = material("Drum", (0.80, 0.80, 0.80, 1), 0.3, 0.8)
M_TIRE = material("Tire", (0.03, 0.03, 0.03, 1), 0.9)
M_BLDG = material("Building", (0.82, 0.80, 0.76, 1), 0.85)
M_GLASS = material("Glass", (0.08, 0.13, 0.18, 1), 0.05, 0.9)
M_RED = material("N&P red", (0.70, 0.05, 0.05, 1), 0.5)

# --- ground: grass field with a graded pad under the lot ------------------
box("Field", (220, 220, 0.2), (0, 0, -0.2), M_GRASS)
box("Pad", (LOT_W + 6, LOT_D + 6, 0.1), (0, 0, -0.05), M_DIRT)

# --- formwork around the lot (gone once the curbs go in) -------------------
forms = [
    box("Form N", (LOT_W + 0.1, 0.05, 0.3), (0, LOT_D / 2 + 0.05, 0.15), M_WOOD),
    box("Form S", (LOT_W + 0.1, 0.05, 0.3), (0, -LOT_D / 2 - 0.05, 0.15), M_WOOD),
    box("Form E", (0.05, LOT_D + 0.1, 0.3), (LOT_W / 2 + 0.05, 0, 0.15), M_WOOD),
    box("Form W", (0.05, LOT_D + 0.1, 0.3), (-LOT_W / 2 - 0.05, 0, 0.15), M_WOOD),
]

# --- rebar mat, joined into one object for speed --------------------------
bars = []
step = 0.6
x = -LOT_W / 2 + 0.3
while x < LOT_W / 2:
    bars.append(box("bar", (0.025, LOT_D - 0.4, 0.025), (x, 0, 0.06), M_REBAR))
    x += step
y = -LOT_D / 2 + 0.3
while y < LOT_D / 2:
    bars.append(box("bar", (LOT_W - 0.4, 0.025, 0.025), (0, y, 0.08), M_REBAR))
    y += step
bpy.ops.object.select_all(action="DESELECT")
for b in bars:
    b.select_set(True)
bpy.context.view_layer.objects.active = bars[0]
bpy.ops.object.join()
rebar = bpy.context.active_object
rebar.name = "Rebar mat"

# --- slab panels pour in a diagonal sweep, then cure ----------------------
cols, rows = int(LOT_W / PANEL), int(LOT_D / PANEL)
POUR_START, POUR_END, POUR_LEN, CURE_LEN = 18, 150, 14, 40
max_order = (cols - 1) + (rows - 1)
for i in range(cols):
    for j in range(rows):
        cx = -LOT_W / 2 + PANEL * (i + 0.5)
        cy = -LOT_D / 2 + PANEL * (j + 0.5)
        # pivot at the panel's base so it fills upward
        bpy.ops.mesh.primitive_cube_add(size=1, location=(cx, cy, 0))
        p = bpy.context.active_object
        p.name = f"Panel {i}-{j}"
        p.scale = (PANEL - 0.03, PANEL - 0.03, SLAB_T)
        bpy.ops.object.transform_apply(scale=True)
        for v in p.data.vertices:
            v.co.z += SLAB_T / 2
        p.data.materials.append(M_CONC)
        order = (i + (rows - 1 - j)) / max_order
        start = int(POUR_START + order * (POUR_END - POUR_LEN - POUR_START))
        key_scale(p, 1, (1, 1, 0.001))
        key_scale(p, start, (1, 1, 0.001))
        key_scale(p, start + POUR_LEN, (1, 1, 1))
        p.color = WET
        p.keyframe_insert("color", frame=start + POUR_LEN)
        p.color = CURED
        p.keyframe_insert("color", frame=start + POUR_LEN + CURE_LEN)

# --- curbs rise and forms drop as the pour finishes ------------------------
CURB_AT = 168
curbs = [
    box("Curb N", (LOT_W + 0.6, 0.3, 0.35), (0, LOT_D / 2 + 0.15, 0), M_CURB),
    box("Curb S", (LOT_W + 0.6, 0.3, 0.35), (0, -LOT_D / 2 - 0.15, 0), M_CURB),
    box("Curb E", (0.3, LOT_D, 0.35), (LOT_W / 2 + 0.15, 0, 0), M_CURB),
    box("Curb W", (0.3, LOT_D, 0.35), (-LOT_W / 2 - 0.15, 0, 0), M_CURB),
]
for c in curbs:
    c.location.z = -0.2
    c.keyframe_insert("location", frame=CURB_AT)
    c.location.z = 0.17
    c.keyframe_insert("location", frame=CURB_AT + 14)
for f in forms:
    f.keyframe_insert("location", frame=CURB_AT)
    f.location.z = -0.4
    f.keyframe_insert("location", frame=CURB_AT + 14)

# --- parking stripes draw in, stall by stall -------------------------------
STRIPE_START, STALL_W, STALL_L = 176, 2.75, 5.5
n = int((LOT_W - 2) / STALL_W)
stripes = []
for side in (1, -1):
    y_edge = side * (LOT_D / 2 - 0.3)
    for k in range(n + 1):
        sx = -LOT_W / 2 + 1 + k * STALL_W
        bpy.ops.mesh.primitive_plane_add(size=1, location=(sx, y_edge, SLAB_T + 0.005))
        s = bpy.context.active_object
        s.scale = (0.12, STALL_L, 1)
        bpy.ops.object.transform_apply(scale=True)
        # pivot at the curb end so the line draws away from the curb
        for v in s.data.vertices:
            v.co.y -= side * STALL_L / 2
        s.data.materials.append(M_PAINT)
        stripes.append((k, s))
for k, s in stripes:
    t = STRIPE_START + k * 2
    key_scale(s, 1, (1, 0.001, 1))
    key_scale(s, t, (1, 0.001, 1))
    key_scale(s, t + 8, (1, 1, 1))

# --- ready-mix truck with a turning drum -----------------------------------
TX, TY = -LOT_W / 2 + 6, -LOT_D / 2 - 5.5
box("Chassis", (8.5, 2.4, 0.5), (TX, TY, 1.0), M_TIRE)
box("Cab", (2.4, 2.4, 2.4), (TX - 3.3, TY, 2.3), M_YELLOW)
box("Windshield", (0.05, 2.0, 0.9), (TX - 4.52, TY, 2.9), M_GLASS)
for wx in (-3.3, 0.8, 2.6):
    for wy in (-1.15, 1.15):
        bpy.ops.mesh.primitive_cylinder_add(radius=0.55, depth=0.4,
                                            location=(TX + wx, TY + wy, 0.55),
                                            rotation=(math.pi / 2, 0, 0))
        bpy.context.active_object.data.materials.append(M_TIRE)
bpy.ops.mesh.primitive_cone_add(vertices=32, radius1=1.4, radius2=0.7, depth=5.2,
                                location=(TX + 1.4, TY, 2.75),
                                rotation=(0, math.radians(-78), 0))
drum = bpy.context.active_object
drum.name = "Drum"
drum.data.materials.append(M_DRUM)
# a red stripe on the drum's skin, so the turning reads on camera
bpy.ops.mesh.primitive_cube_add(size=1, location=(TX + 1.4, TY, 2.75),
                                rotation=(0, math.radians(-78), 0))
fin = bpy.context.active_object
fin.scale = (0.6, 0.08, 3.6)
bpy.ops.object.transform_apply(scale=True, rotation=True)
for v in fin.data.vertices:
    v.co.z += 0.95
    v.co.x += 0.2
fin.parent = drum
fin.matrix_parent_inverse = drum.matrix_world.inverted()
fin.data.materials.append(M_RED)
drum.rotation_mode = "ZYX"  # Z applied first = spin about the drum's own axis
edit_prefs = bpy.context.preferences.edit
edit_prefs.keyframe_new_interpolation_type = "LINEAR"  # steady spin, no ease
drum.keyframe_insert("rotation_euler", frame=1)
drum.rotation_euler.z += math.radians(360 * 5)
drum.keyframe_insert("rotation_euler", frame=FRAMES)
edit_prefs.keyframe_new_interpolation_type = "BEZIER"

# --- the customer's building behind the lot --------------------------------
BY = LOT_D / 2 + 14
box("Building", (34, 16, 7), (0, BY, 3.5), M_BLDG)
box("Glass band", (30, 0.1, 2.2), (0, BY - 8.02, 4.2), M_GLASS)
box("Entry", (6, 0.12, 3.2), (0, BY - 8.03, 1.6), M_GLASS)
box("Canopy", (8, 1.6, 0.25), (0, BY - 8.8, 3.4), M_RED)
box("Sidewalk", (40, 4, 0.12), (0, LOT_D / 2 + 3.6, 0.06), M_CURB)

# --- light, sky, camera -----------------------------------------------------
bpy.ops.object.light_add(type="SUN", rotation=(math.radians(52), 0, math.radians(35)))
sun = bpy.context.active_object
sun.data.energy = 2.6
sun.data.angle = math.radians(1.5)
world = scene.world or bpy.data.worlds.new("World")
scene.world = world
world.use_nodes = True
bg = world.node_tree.nodes["Background"]
try:
    sky = world.node_tree.nodes.new("ShaderNodeTexSky")
    world.node_tree.links.new(sky.outputs["Color"], bg.inputs["Color"])
    bg.inputs["Strength"].default_value = 0.12
except RuntimeError:
    bg.inputs["Color"].default_value = (0.55, 0.70, 0.90, 1)
    bg.inputs["Strength"].default_value = 1.0

bpy.ops.object.empty_add(location=(0, 2, 0))
target = bpy.context.active_object
bpy.ops.object.camera_add()
cam = bpy.context.active_object
scene.camera = cam
cam.data.lens = 30
track = cam.constraints.new("TRACK_TO")
track.target = target
track.track_axis = "TRACK_NEGATIVE_Z"
track.up_axis = "UP_Y"
R, H = 40.0, 19.0
for frame, ang, h in ((1, -128, H + 3), (FRAMES, -92, H - 2)):
    a = math.radians(ang)
    cam.location = (R * math.cos(a), R * math.sin(a), h)
    cam.keyframe_insert("location", frame=frame)

if STILL is not None:
    scene.frame_set(STILL)
    scene.render.filepath = OUT_DIR.rstrip("/\\") + f"/still_{STILL:04d}.png"
    bpy.ops.render.render(write_still=True)
else:
    bpy.ops.render.render(animation=True)
