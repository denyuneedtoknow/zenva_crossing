let gameScene = new Phaser.Scene('Game')
gameScene.preload = function () {
    this.load.image('background', 'assets/background.png')
    this.load.image('player', 'assets/player.png')
    this.load.image('enemy', 'assets/enemy.png')
}
gameScene.create = function () {
    this.bg = this.add.sprite(0, 0, 'background')
    // bg.setOrigin(0, 0)
    let gameWidth = this.sys.game.config.width
    let gameHeight = this.sys.game.config.height
    this.bg.setPosition(gameWidth / 2, gameHeight / 2)
    this.player = this.add.sprite(0, 0, 'player').setPosition(50, 180).setScale(1)
    this.enemy = this.add.sprite(0, 0, 'enemy').setPosition(350, 180).setScale(1.5)
}
gameScene.update = function () {
    this.enemy.angle += 1
    if (this.enemy.scale <= 2) {
        this.enemy.scale += 0.01
    }
}
let config = {
    type: Phaser.AUTO,
    width: 640,
    height: 360,
    scene: gameScene
}
let game = new Phaser.Game(config)