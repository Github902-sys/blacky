namespace SpriteKind {
    export const coin = SpriteKind.create()
    export const flower = SpriteKind.create()
    export const fireball = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile1`, function (sprite, location) {
    current_level += 1
    startLevel()
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (plr.vy == 0) {
        plr.vy = -155
    }
})
info.onScore(300, function () {
    tiles.setCurrentTilemap(tilemap`level15`)
    pause(2000)
    game.gameOver(true)
    for (let value of sprites.allOfKind(SpriteKind.coin)) {
        sprites.destroy(value)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite5, otherSprite3) {
    sprites.destroy(otherSprite3)
    if (plr.y < otherSprite3.y) {
        info.changeScoreBy(3)
    } else {
        info.changeLifeBy(-1)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.flower, function (sprite3, otherSprite2) {
    sprites.destroy(otherSprite2)
    bee = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    animation.runImageAnimation(
    bee,
    assets.animation`bee`,
    100,
    true
    )
    bee.setPosition(plr.x + 80, plr.y - 80)
    bee.follow(plr)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.coin, function (sprite2, otherSprite) {
    info.changeScoreBy(1)
    sprites.destroy(otherSprite)
    music.play(music.createSong(assets.song`coinSound0`), music.PlaybackMode.UntilDone)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`kill block`, function (sprite4, location2) {
    game.gameOver(false)
})
function startLevel () {
    if (current_level == 0) {
        game.showLongText("level 1", DialogLayout.Bottom)
        tiles.setCurrentTilemap(tilemap`level1`)
    } else if (current_level == 1) {
        game.showLongText("level 2", DialogLayout.Bottom)
        tiles.setCurrentTilemap(tilemap`level3`)
    } else if (current_level == 2) {
        game.showLongText("level 3", DialogLayout.Bottom)
        tiles.setCurrentTilemap(tilemap`level4`)
    } else if (current_level == 3) {
        game.showLongText("level 4", DialogLayout.Bottom)
        tiles.setCurrentTilemap(tilemap`level5`)
    } else if (current_level == 4) {
        game.showLongText("level 5", DialogLayout.Bottom)
        tiles.setCurrentTilemap(tilemap`level6`)
    } else if (current_level == 5) {
        game.showLongText("level 6", DialogLayout.Bottom)
        tiles.setCurrentTilemap(tilemap`level7`)
    } else if (current_level == 6) {
        game.showLongText("level 7", DialogLayout.Bottom)
        tiles.setCurrentTilemap(tilemap`level8`)
    } else if (current_level == 7) {
        game.showLongText("level 8", DialogLayout.Bottom)
        tiles.setCurrentTilemap(tilemap`level9`)
    } else if (current_level == 8) {
        game.showLongText("level 9", DialogLayout.Bottom)
        tiles.setCurrentTilemap(tilemap`level10`)
    } else if (current_level == 9) {
        game.showLongText("level 10", DialogLayout.Bottom)
        tiles.setCurrentTilemap(tilemap`level12`)
    } else if (current_level == 10) {
        game.showLongText("level 11", DialogLayout.Bottom)
        tiles.setCurrentTilemap(tilemap`level13`)
    } else if (current_level == 11) {
        game.showLongText("level 12", DialogLayout.Bottom)
        tiles.setCurrentTilemap(tilemap`level14`)
    } else if (current_level == 12) {
        game.showLongText("level 13", DialogLayout.Bottom)
        tiles.setCurrentTilemap(tilemap`level16`)
    } else if (current_level == 13) {
        game.showLongText("level 14", DialogLayout.Bottom)
        tiles.setCurrentTilemap(tilemap`level17`)
    } else {
        game.gameOver(true)
    }
    tiles.placeOnRandomTile(plr, assets.tile`portal`)
    for (let value of tiles.getTilesByType(assets.tile`portal`)) {
        tiles.setTileAt(value, assets.tile`transparency16`)
    }
    scene.cameraFollowSprite(plr)
    scene.setBackgroundImage(assets.image`background`)
    plr.ay = 350
    info.setLife(3)
    for (let value2 of sprites.allOfKind(SpriteKind.coin)) {
        sprites.destroy(value2)
    }
    for (let value3 of sprites.allOfKind(SpriteKind.Enemy)) {
        sprites.destroy(value3)
    }
    for (let value4 of sprites.allOfKind(SpriteKind.flower)) {
        sprites.destroy(value4)
    }
    for (let value5 of tiles.getTilesByType(assets.tile`yellow`)) {
        coin2 = sprites.create(assets.image`coin`, SpriteKind.coin)
        animation.runImageAnimation(
        coin2,
        assets.animation`AnimatedCoin`,
        50,
        true
        )
        tiles.placeOnTile(coin2, value5)
        tiles.setTileAt(value5, assets.tile`transparency16`)
    }
    for (let value6 of tiles.getTilesByType(assets.tile`enemySpawner`)) {
        flo = sprites.create(assets.image`flo`, SpriteKind.flower)
        tiles.placeOnTile(flo, value6)
        tiles.setTileAt(value6, assets.tile`transparency16`)
    }
}
let flo: Sprite = null
let coin2: Sprite = null
let bee: Sprite = null
let current_level = 0
let plr: Sprite = null
plr = sprites.create(assets.image`enemy`, SpriteKind.Player)
controller.moveSprite(plr, 100, 0)
current_level = 0
startLevel()
