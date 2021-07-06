scene.setBackgroundColor(4)
scene.setBackgroundImage(assets.image`1`)
let mySprite = sprites.create(assets.image`2`, SpriteKind.Player)
controller.moveSprite(mySprite)
