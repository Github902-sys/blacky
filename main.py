@namespace
class SpriteKind:
    coin = SpriteKind.create()
    flower = SpriteKind.create()

def on_overlap_tile(sprite, location):
    global current_level
    current_level += 1
    startLevel()
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        myTile1
    """),
    on_overlap_tile)

def on_a_pressed():
    if plr.vy == 0:
        plr.vy = -155
controller.A.on_event(ControllerButtonEvent.PRESSED, on_a_pressed)

def on_on_overlap(sprite2, otherSprite):
    info.change_score_by(1)
    sprites.destroy(otherSprite)
sprites.on_overlap(SpriteKind.player, SpriteKind.coin, on_on_overlap)

def on_on_overlap2(sprite3, otherSprite2):
    global bee
    sprites.destroy(otherSprite2)
    bee = sprites.create(img("""
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
        """),
        SpriteKind.enemy)
    animation.run_image_animation(bee, assets.animation("""
        bee
    """), 100, True)
    bee.set_position(plr.x + 80, plr.y - 80)
    bee.follow(plr)
sprites.on_overlap(SpriteKind.player, SpriteKind.flower, on_on_overlap2)

def on_overlap_tile2(sprite4, location2):
    game.game_over(False)
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        kill block
    """),
    on_overlap_tile2)

def startLevel():
    global coin2, flower2
    if current_level == 0:
        tiles.set_current_tilemap(tilemap("""
            level11
        """))
    elif current_level == 1:
        tiles.set_current_tilemap(tilemap("""
            level3
        """))
    elif current_level == 2:
        tiles.set_current_tilemap(tilemap("""
            level4
        """))
    elif current_level == 3:
        tiles.set_current_tilemap(tilemap("""
            level5
        """))
    elif current_level == 4:
        tiles.set_current_tilemap(tilemap("""
            level6
        """))
    elif current_level == 5:
        tiles.set_current_tilemap(tilemap("""
            level7
        """))
    elif current_level == 6:
        tiles.set_current_tilemap(tilemap("""
            level8
        """))
    elif current_level == 7:
        tiles.set_current_tilemap(tilemap("""
            level9
        """))
    elif current_level == 8:
        tiles.set_current_tilemap(tilemap("""
            level10
        """))
    elif current_level == 9:
        tiles.set_current_tilemap(tilemap("""
            level1
        """))
    else:
        pass
    tiles.place_on_random_tile(plr, assets.tile("""
        portal
    """))
    for value in tiles.get_tiles_by_type(assets.tile("""
        portal
    """)):
        tiles.set_tile_at(value, assets.tile("""
            transparency16
        """))
    scene.camera_follow_sprite(plr)
    scene.set_background_image(assets.image("""
        background
    """))
    plr.ay = 350
    info.set_life(3)
    for value2 in sprites.all_of_kind(SpriteKind.coin):
        sprites.destroy(value2)
    for value3 in sprites.all_of_kind(SpriteKind.enemy):
        sprites.destroy(value3)
    for value4 in sprites.all_of_kind(SpriteKind.flower):
        sprites.destroy(value4)
    for value5 in tiles.get_tiles_by_type(assets.tile("""
        yellow
    """)):
        coin2 = sprites.create(assets.image("""
            coin
        """), SpriteKind.coin)
        animation.run_image_animation(coin2, assets.animation("""
            AnimatedCoin
        """), 50, True)
        tiles.place_on_tile(coin2, value5)
        tiles.set_tile_at(value5, assets.tile("""
            transparency16
        """))
    for value6 in tiles.get_tiles_by_type(assets.tile("""
        enemySpawner
    """)):
        flower2 = sprites.create(assets.image("""
            flower
        """), SpriteKind.flower)
        tiles.place_on_tile(flower2, value6)
        tiles.set_tile_at(value6, assets.tile("""
            transparency16
        """))

def on_on_overlap3(sprite5, otherSprite3):
    sprites.destroy(otherSprite3)
    if plr.y < otherSprite3.y:
        info.change_score_by(3)
    else:
        info.change_life_by(-1)
sprites.on_overlap(SpriteKind.player, SpriteKind.enemy, on_on_overlap3)

flower2: Sprite = None
coin2: Sprite = None
bee: Sprite = None
current_level = 0
plr: Sprite = None
plr = sprites.create(assets.image("""
    enemy
"""), SpriteKind.player)
controller.move_sprite(plr, 100, 0)
current_level = 0
startLevel()