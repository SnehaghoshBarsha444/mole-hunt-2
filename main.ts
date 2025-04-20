scene.setBackgroundImage(assets.image`grid`)
let myMole = sprites.create(assets.image`mole`, SpriteKind.Enemy)
game.onUpdateInterval(1000, function () {
    simplified.moveToRandomHoleOnGrid(myMole)
})
