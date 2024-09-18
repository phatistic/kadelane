namespace SpriteKind {
    export const Playerhitbox = SpriteKind.create()
    export const Item = SpriteKind.create()
}
namespace NumArrayProp {
    export const NumResult = NumArrayProp.create()
}
namespace AnyProp {
    export const AnyResult = AnyProp.create()
}
let LeaderBoardRankList: string[] = []
spriteutils.createRenderable(10, function (screen2) {
    if (!(StartSetup || Start)) {
        let select_maximum = 0
        screen2.fillRect(0, 0, scene.screenWidth(), scene.screenHeight(), 15)
        if (!(select_maximum)) {
            images.printCenter(screen2, "Loading...", 56, 1)
        }
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (!(InGame)) {
        ResetGame(false)
    } else {
        if (!(Start)) {
            PlacePlayer()
        }
    }
})
function AIthinkingIsTrue (MnMin: number, MnMax: number, RnMin: number, RnMax: number, OutPutID: number, None: number) {
    AItickList = 0
}
sprites.onDestroyed(SpriteKind.Player, function (sprite) {
    if (InGame) {
        let PlayerDiceStart: number[] = []
        let PlayerDice: number[] = []
        J = PlayerDice.indexOf(sprites.readDataNumber(sprite, "P#"))
        PlayerDice.removeAt(J)
        PlayerDiceStart.removeAt(J)
        if (Start) {
            let PlayerKilledList: number[] = []
            if (sprites.allOfKind(SpriteKind.Player).length <= 1) {
                Trun = sprites.allOfKind(SpriteKind.Player).length - 1
                My_player = Get_player_on_trun(Trun)
                LeaderBoardCapture(My_player, true, 1)
            } else {
            	
            }
            timer.after(50, function () {
                LeaderBoardCapture(sprite, PlayerKilledList.indexOf(sprites.readDataNumber(sprite, "P#")) >= 0, 1)
            })
            if (My_player) {
                if (!(sprites.readDataBoolean(My_player, "HasPlay"))) {
                    if (LeaderBoardColorList.indexOf(8) < 0) {
                        LeaderBoardColorList.unshift(8)
                    }
                }
                PlayerKilledList.push(sprites.readDataNumber(My_player, "P#"))
                GetPlayed = true
            }
            if (sprites.allOfKind(SpriteKind.Player).length == 1) {
                timer.after(1000, function () {
                    color.startFadeFromCurrent(color.White, 500)
                    timer.after(500, function () {
                        StGame = false
                        WinIntro = true
                        InGame = false
                        timer.after(500, function () {
                            color.startFadeFromCurrent(color.originalPalette, 500)
                            timer.after(500, function () {
                                color.clearFadeEffect()
                            })
                        })
                    })
                })
            }
        }
    }
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Start) {
        GetMovement(1, 3)
    } else if (StartSetup) {
        OptionPlayer(1, 1, 0)
    }
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (!(InGame)) {
        ResetGame(true)
    }
})
spriteutils.createRenderable(20, function (screen2) {
    if (!(InGame)) {
        screen2.fillRect(0, 0, scene.screenWidth(), scene.screenHeight(), 15)
        screen2.fillRect(0, scene.screenHeight() - 22, scene.screenWidth(), 1, 1)
        images.print(screen2, "A To Rematch", 62, scene.screenHeight() - 20, 1)
        images.print(screen2, "B To Restart", 62, scene.screenHeight() - 10, 1)
        if (My_player) {
            images.print(screen2, "Player" + convertToText(sprites.readDataNumber(My_player, "P#") + 1) + "WIN!", 70, 40, 1)
        }
        index = 0
        screen2.fillRect(0, 0, 60, scene.screenHeight(), 11)
        screen2.fillRect(60, 0, 1, scene.screenHeight(), 1)
        for (let value of LeaderBoardRankList) {
            let LeaderBoardList: number[] = []
            if (index < LeaderBoardList.length) {
                let PlayerIconList: Image[] = []
                Img = image.create(60, 20)
                Img.fill(LeaderBoardColorList[index])
                Img.drawRect(-1, -1, 62, 21, 1)
                spriteutils.drawTransparentImage(PlayerIconList[LeaderBoardList[index]], Img, 5, 5)
                images.print(Img, value, 16, 6, 1)
                spriteutils.drawTransparentImage(Img, screen2, 0, index * 20)
            }
            index += 1
        }
    }
})
spriteutils.createRenderable(1, function (screen2) {
    if (StartSetup || Start) {
        screen2.fillRect(0, 0, 72, scene.screenHeight(), 15)
        spriteutils.drawTransparentImage(RenderStatus(72, 20, true), screen2, 0, 0)
    }
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Start) {
        GetMovement(3, 1)
    } else if (StartSetup) {
        OptionPlayer(3, -1, 0)
    }
})
function MyPlayerAIMainTick () {
    if (My_player) {
        if (sprites.readDataBoolean(My_player, "Ai")) {
            timer.background(function () {
                if (Start) {
                    if (AIthinkingIsTrue(55, 48, 50, 40, 1, 0)) {
                        GetMovement(3, 1)
                    }
                    if (AIthinkingIsTrue(55, 48, 50, 40, 2, 0)) {
                        GetMovement(4, 2)
                    }
                    if (AIthinkingIsTrue(55, 48, 50, 40, 3, 0)) {
                        GetMovement(1, 3)
                    }
                    if (AIthinkingIsTrue(55, 48, 50, 40, 4, 0)) {
                        GetMovement(2, 4)
                    }
                } else {
                    if (AIthinkingIsTrue(55, 48, 50, 40, 5, 0)) {
                        PlacePlayer()
                    }
                    if (AIthinkingIsTrue(55, 48, 50, 40, 6, 0)) {
                        OptionPlayer(3, -1, 0)
                    }
                    if (AIthinkingIsTrue(55, 48, 50, 40, 7, 0)) {
                        OptionPlayer(4, 0, -1)
                    }
                    if (AIthinkingIsTrue(55, 48, 50, 40, 8, 0)) {
                        OptionPlayer(1, 1, 0)
                    }
                    if (AIthinkingIsTrue(55, 48, 50, 40, 9, 0)) {
                        OptionPlayer(2, 0, 1)
                    }
                }
            })
        }
    }
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Start) {
        GetMovement(4, 2)
    } else if (StartSetup) {
        OptionPlayer(4, 0, -1)
    }
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Start) {
        GetMovement(2, 4)
    } else if (StartSetup) {
        OptionPlayer(2, 0, 1)
    }
})
let TextNameSprite: Sprite = null
let Img: Image = null
let index = 0
let WinIntro = false
let StGame = false
let GetPlayed = false
let LeaderBoardColorList: number[] = []
let My_player: Sprite = null
let Trun = 0
let J = 0
let AItickList = 0
let InGame = false
let Start = 0
let StartSetup = 0
ResetGame(true)
game.onUpdate(function () {
    if (InGame) {
        if (Start) {
            MyPlayerTick()
            PlayersrpiteTick()
        }
    }
})
game.onUpdate(function () {
    if (InGame) {
        MyPlayerAIMainTick()
    }
})
game.onUpdate(function () {
    if (InGame) {
        if (StartSetup == Start) {
            if (TextNameSprite) {
                sprites.destroy(TextNameSprite)
                TextNameSprite = spriteutils.nullConsts(spriteutils.NullConsts.Undefined)
            }
        }
        if (TextNameSprite) {
            TextStateUpdate()
        }
    }
})
