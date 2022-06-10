
const _scene = new Entity('_scene')
engine.addEntity(_scene)
const transform = new Transform({
  position: new Vector3(0, 0, 0),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
_scene.addComponentOrReplace(transform)

const entity = new Entity('entity')
engine.addEntity(entity)
entity.setParent(_scene)
const gltfShape = new GLTFShape("c9b17021-765c-4d9a-9966-ce93a9c323d1/FloorBaseGrass_01/FloorBaseGrass_01.glb")
gltfShape.withCollisions = true
gltfShape.isPointerBlocker = true
gltfShape.visible = true
entity.addComponentOrReplace(gltfShape)
const transform2 = new Transform({
  position: new Vector3(8, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity.addComponentOrReplace(transform2)

const grassSprout = new Entity('grassSprout')
engine.addEntity(grassSprout)
grassSprout.setParent(_scene)
const transform3 = new Transform({
  position: new Vector3(8, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grassSprout.addComponentOrReplace(transform3)
const gltfShape2 = new GLTFShape("43ab9bc6-bc2a-4ee1-815a-e12f60a709ae/Grass_03/Grass_03.glb")
gltfShape2.withCollisions = true
gltfShape2.isPointerBlocker = true
gltfShape2.visible = true
grassSprout.addComponentOrReplace(gltfShape2)

const grassSprout2 = new Entity('grassSprout2')
engine.addEntity(grassSprout2)
grassSprout2.setParent(_scene)
const transform4 = new Transform({
  position: new Vector3(12, 0, 3),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grassSprout2.addComponentOrReplace(transform4)
grassSprout2.addComponentOrReplace(gltfShape2)

const grassSprout3 = new Entity('grassSprout3')
engine.addEntity(grassSprout3)
grassSprout3.setParent(_scene)
const transform5 = new Transform({
  position: new Vector3(8, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grassSprout3.addComponentOrReplace(transform5)
grassSprout3.addComponentOrReplace(gltfShape2)

const grassSprout4 = new Entity('grassSprout4')
engine.addEntity(grassSprout4)
grassSprout4.setParent(_scene)
const transform6 = new Transform({
  position: new Vector3(12, 0, 11.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grassSprout4.addComponentOrReplace(transform6)
grassSprout4.addComponentOrReplace(gltfShape2)

const grassSprout5 = new Entity('grassSprout5')
engine.addEntity(grassSprout5)
grassSprout5.setParent(_scene)
const transform7 = new Transform({
  position: new Vector3(4, 0, 4),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grassSprout5.addComponentOrReplace(transform7)
grassSprout5.addComponentOrReplace(gltfShape2)

const grassSprout6 = new Entity('grassSprout6')
engine.addEntity(grassSprout6)
grassSprout6.setParent(_scene)
const transform8 = new Transform({
  position: new Vector3(3.5, 0, 13),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grassSprout6.addComponentOrReplace(transform8)
grassSprout6.addComponentOrReplace(gltfShape2)

const birdSNestFern = new Entity('birdSNestFern')
engine.addEntity(birdSNestFern)
birdSNestFern.setParent(_scene)
const transform9 = new Transform({
  position: new Vector3(8.5, 0, 4.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
birdSNestFern.addComponentOrReplace(transform9)
const gltfShape3 = new GLTFShape("f17f4ed8-f0a2-48f0-a461-95d426b58d54/Plant_01/Plant_01.glb")
gltfShape3.withCollisions = true
gltfShape3.isPointerBlocker = true
gltfShape3.visible = true
birdSNestFern.addComponentOrReplace(gltfShape3)

const dandelion = new Entity('dandelion')
engine.addEntity(dandelion)
dandelion.setParent(_scene)
const transform10 = new Transform({
  position: new Vector3(7, 0, 13.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
dandelion.addComponentOrReplace(transform10)
const gltfShape4 = new GLTFShape("009be9a4-294f-4ff4-88b6-04d13a51af0d/Grass_04/Grass_04.glb")
gltfShape4.withCollisions = true
gltfShape4.isPointerBlocker = true
gltfShape4.visible = true
dandelion.addComponentOrReplace(gltfShape4)

const flatPebble = new Entity('flatPebble')
engine.addEntity(flatPebble)
flatPebble.setParent(_scene)
const transform11 = new Transform({
  position: new Vector3(12.5, 0, 6.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
flatPebble.addComponentOrReplace(transform11)
const gltfShape5 = new GLTFShape("84d95b24-0f10-42e8-8210-9bb9665b72de/Pebble_03/Pebble_03.glb")
gltfShape5.withCollisions = true
gltfShape5.isPointerBlocker = true
gltfShape5.visible = true
flatPebble.addComponentOrReplace(gltfShape5)

const flowerSprouts = new Entity('flowerSprouts')
engine.addEntity(flowerSprouts)
flowerSprouts.setParent(_scene)
const transform12 = new Transform({
  position: new Vector3(4, 0, 9),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
flowerSprouts.addComponentOrReplace(transform12)
const gltfShape6 = new GLTFShape("bf0962d5-8904-4f4a-b2b6-9f4607ba1e0d/Plant_03/Plant_03.glb")
gltfShape6.withCollisions = true
gltfShape6.isPointerBlocker = true
gltfShape6.visible = true
flowerSprouts.addComponentOrReplace(gltfShape6)

const flowerSprouts2 = new Entity('flowerSprouts2')
engine.addEntity(flowerSprouts2)
flowerSprouts2.setParent(_scene)
const transform13 = new Transform({
  position: new Vector3(14, 0, 11.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
flowerSprouts2.addComponentOrReplace(transform13)
flowerSprouts2.addComponentOrReplace(gltfShape6)
