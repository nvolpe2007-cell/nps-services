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
M_REBAR = material("Rebar", (0.42, 0.20, 0.08, 1), 0.6, 0.5)  # rusty orange-brown
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
# Proportions follow real US ready-mix trucks: conventional hood + upright cab,
# a pear-shaped drum (fattest near the front, long taper to the rear) tilted up
# toward the back, hopper funnel + chute + ladder at the rear, and one steer
# axle plus tandem duals. Built along +x (cab at -x) around the origin, then
# parented to an empty that places it beside the lot with the chute toward it.
import bmesh

M_CAB = material("Cab white", (0.88, 0.88, 0.86, 1), 0.35, 0.1)
M_STEEL = material("Steel", (0.55, 0.56, 0.58, 1), 0.35, 0.9)
M_DARK = material("Dark trim", (0.05, 0.05, 0.06, 1), 0.6)


def drum_material():
    """White drum with a red spiral stripe in object space, so it turns with
    the drum and the spin reads on camera, like a real painted drum."""
    mat = bpy.data.materials.new("Drum paint")
    mat.use_nodes = True
    nt = mat.node_tree
    bsdf = nt.nodes["Principled BSDF"]
    bsdf.inputs["Roughness"].default_value = 0.4
    coord = nt.nodes.new("ShaderNodeTexCoord")
    sep = nt.nodes.new("ShaderNodeSeparateXYZ")
    nt.links.new(coord.outputs["Object"], sep.inputs["Vector"])
    ang = nt.nodes.new("ShaderNodeMath")
    ang.operation = "ARCTAN2"
    nt.links.new(sep.outputs["Z"], ang.inputs[0])
    nt.links.new(sep.outputs["Y"], ang.inputs[1])
    twist = nt.nodes.new("ShaderNodeMath")
    twist.operation = "MULTIPLY_ADD"
    twist.inputs[1].default_value = 1.6           # turns of the spiral per metre
    nt.links.new(sep.outputs["X"], twist.inputs[0])
    nt.links.new(ang.outputs[0], twist.inputs[2])
    wave = nt.nodes.new("ShaderNodeMath")
    wave.operation = "SINE"
    nt.links.new(twist.outputs[0], wave.inputs[0])
    band = nt.nodes.new("ShaderNodeMath")
    band.operation = "GREATER_THAN"
    band.inputs[1].default_value = 0.8
    nt.links.new(wave.outputs[0], band.inputs[0])
    mix = nt.nodes.new("ShaderNodeMix")
    mix.data_type = "RGBA"
    mix.inputs[6].default_value = (0.90, 0.90, 0.88, 1)
    mix.inputs[7].default_value = (0.70, 0.05, 0.05, 1)
    nt.links.new(band.outputs[0], mix.inputs["Factor"])
    nt.links.new(mix.outputs[2], bsdf.inputs["Base Color"])
    return mat


def lathe(name, profile, mat, segments=40):
    """Revolve (x, radius) profile points around the x axis into a closed mesh."""
    bm = bmesh.new()
    rings = []
    for x, r in profile:
        rings.append([bm.verts.new((x, r * math.cos(2 * math.pi * k / segments),
                                    r * math.sin(2 * math.pi * k / segments)))
                      for k in range(segments)])
    for a, b in zip(rings, rings[1:]):
        for k in range(segments):
            bm.faces.new((a[k], a[(k + 1) % segments], b[(k + 1) % segments], b[k]))
    bm.faces.new(list(reversed(rings[0])))
    bm.faces.new(rings[-1])
    me = bpy.data.meshes.new(name)
    bm.to_mesh(me)
    bm.free()
    for poly in me.polygons:
        poly.use_smooth = True
    obj = bpy.data.objects.new(name, me)
    scene.collection.objects.link(obj)
    obj.data.materials.append(mat)
    return obj


def cyl(name, r, depth, loc, rot, mat):
    bpy.ops.mesh.primitive_cylinder_add(vertices=32, radius=r, depth=depth,
                                        location=loc, rotation=rot)
    obj = bpy.context.active_object
    obj.name = name
    obj.data.materials.append(mat)
    return obj


truck = []
# chassis, bumper, hood with grille, cab with glass
truck.append(box("Frame rails", (9.6, 1.0, 0.35), (-0.3, 0, 0.95), M_DARK))
truck.append(box("Bumper", (0.3, 2.45, 0.35), (-5.15, 0, 0.75), M_STEEL))
truck.append(box("Hood", (1.5, 2.2, 1.1), (-4.25, 0, 1.6), M_CAB))
truck.append(box("Grille", (0.06, 1.3, 0.9), (-5.02, 0, 1.6), M_STEEL))
for side in (-1, 1):
    truck.append(box("Headlight", (0.06, 0.3, 0.18), (-5.02, side * 0.88, 1.45), M_PAINT))
    truck.append(box("Mirror", (0.08, 0.06, 0.45), (-3.55, side * 1.38, 2.6), M_DARK))
truck.append(box("Cab", (1.7, 2.45, 2.2), (-2.65, 0, 2.0), M_CAB))
truck.append(box("Windshield", (0.06, 2.15, 0.85), (-3.51, 0, 2.55), M_GLASS))
for side in (-1, 1):
    truck.append(box("Side window", (1.0, 0.06, 0.75), (-2.85, side * 1.23, 2.55), M_GLASS))
    truck.append(box("Step", (0.6, 0.25, 0.08), (-2.9, side * 1.3, 0.75), M_STEEL))
    truck.append(box("Fuel tank", (1.1, 0.5, 0.5), (-1.3, side * 1.05, 1.0), M_STEEL))
truck.append(cyl("Exhaust stack", 0.09, 2.4, (-1.7, 0.95, 2.6), (0, 0, 0), M_STEEL))
truck.append(cyl("Water tank", 0.38, 1.1, (-1.35, -0.2, 2.35), (0, math.pi / 2, 0), M_CAB))
# drum pedestals (front low, rear high) and the rear stand
truck.append(box("Front pedestal", (0.4, 1.0, 1.0), (-1.05, 0, 1.55), M_DARK))
truck.append(box("Rear stand", (0.35, 1.5, 2.6), (3.85, 0, 2.2), M_STEEL))
# wheels: one steer axle, tandem duals at the rear
for wx, width in ((-4.2, 0.35), (1.7, 0.65), (3.05, 0.65)):
    for side in (-1, 1):
        truck.append(cyl("Tire", 0.53, width, (wx, side * 1.0, 0.53),
                         (math.pi / 2, 0, 0), M_TIRE))
        truck.append(cyl("Hub", 0.27, width + 0.02, (wx, side * 1.0, 0.53),
                         (math.pi / 2, 0, 0), M_STEEL))
    truck.append(box("Fender", (1.2 if wx < 0 else 2.6, 2.5, 0.08),
                     (wx if wx < 0 else 2.38, 0, 1.15), M_DARK))

# pear-shaped drum: x from front cap (0) to rear mouth (5.4), radius in metres
DRUM_PROFILE = [(0.0, 0.25), (0.15, 0.7), (0.5, 1.0), (1.3, 1.2), (2.2, 1.2),
                (3.6, 0.95), (4.8, 0.62), (5.4, 0.42)]
drum = lathe("Drum", DRUM_PROFILE, drum_material())
DRUM_TILT = math.radians(-12)              # rear end up
drum.location = (-1.25, 0, 2.15)
drum.rotation_mode = "XYZ"                 # X (local axis) first = spin in place
drum.rotation_euler = (0, DRUM_TILT, 0)
edit_prefs = bpy.context.preferences.edit
edit_prefs.keyframe_new_interpolation_type = "LINEAR"  # steady spin, no ease
drum.keyframe_insert("rotation_euler", frame=1)
drum.rotation_euler.x += math.radians(360 * 4)
drum.keyframe_insert("rotation_euler", frame=FRAMES)
edit_prefs.keyframe_new_interpolation_type = "BEZIER"
truck.append(drum)
mouth_x = -1.25 + 5.4 * math.cos(DRUM_TILT)
mouth_z = 2.15 - 5.4 * math.sin(DRUM_TILT)
truck.append(cyl("Drum mouth", 0.36, 0.05, (mouth_x + 0.02, 0, mouth_z),
                 (0, math.pi / 2 + DRUM_TILT, 0), M_DARK))

# hopper funnel above the mouth, chute angled down and back, ladder
bpy.ops.mesh.primitive_cone_add(vertices=24, radius1=0.18, radius2=0.6, depth=0.7,
                                end_fill_type="NOTHING",
                                location=(mouth_x + 0.2, 0, mouth_z + 0.55))
hopper = bpy.context.active_object
hopper.name = "Hopper"
hopper.data.materials.append(M_STEEL)
truck.append(hopper)
chute = box("Chute", (1.8, 0.45, 0.08), (0, 0, 0), M_STEEL)
chute.location = (mouth_x + 1.05, 0, mouth_z - 0.75)
chute.rotation_euler = (0, math.radians(28), 0)
truck.append(chute)
for side in (-1, 1):
    truck.append(box("Ladder rail", (0.05, 0.05, 2.8), (4.25, side * 0.3, 2.2), M_STEEL))
for k in range(7):
    truck.append(box("Ladder rung", (0.05, 0.6, 0.04), (4.25, 0, 1.1 + k * 0.38), M_STEEL))

# concrete stream falling from the chute end while the slab is being poured
chute_end_x = chute.location.x + 0.9 * math.cos(math.radians(28))
chute_end_z = chute.location.z - 0.9 * math.sin(math.radians(28))
stream = cyl("Concrete stream", 0.16, chute_end_z, (chute_end_x, 0, chute_end_z / 2),
             (0, 0, 0), M_CONC)
stream.color = WET
key_scale(stream, 1, (0.001, 0.001, 0.001))
key_scale(stream, POUR_START, (0.001, 0.001, 0.001))
key_scale(stream, POUR_START + 4, (1, 1, 1))
key_scale(stream, POUR_END, (1, 1, 1))
key_scale(stream, POUR_END + 4, (0.001, 0.001, 0.001))
truck.append(stream)

# the truck backs up to the west forms like a real pour, chute over the slab;
# the west side stays in frame for the whole camera move
bpy.ops.object.empty_add(location=(0, 0, 0))
truck_rig = bpy.context.active_object
truck_rig.name = "Ready-mix truck"
for part in truck:
    part.parent = truck_rig
truck_rig.location = (-LOT_W / 2 - 4.9, -3.0, 0)

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

bpy.ops.object.empty_add(location=(-4, 1, 0))  # left of centre keeps the truck in frame
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
