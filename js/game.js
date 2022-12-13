let gameScene = new Phaser.Scene('Game')
gameScene.preload = function () {
    this.load.image('background', 'assets/images/background.png')
    this.load.image('player', 'assets/images/player.png')
    this.load.image('enemy', 'assets/images/enemy.png')
    this.load.image('treasure', 'assets/images/treasure.png')
    this.load.audio('start', 'assets/sounds/cat_start.mp3')
    this.load.atlas('sparkles', 'assets/images/sparkles.png', 'assets/images/new_atlas.json');
}
gameScene.init = function () {

}

gameScene.create = function () {
    var particles = this.add.particles('sparkles').setDepth(3);
    this.startingCat = this.sound.add('start')
    this.startingCat.play()
    this.bg = this.add.sprite(0, 0, 'background')
    this.player = this.physics.add.sprite(0, 0, 'player').setPosition(50, 180).setScale(1)
    this.enemy = this.physics.add.sprite(0, 0, 'enemy').setPosition(350, 180).setScale(1)
    this.star = this.physics.add.sprite(0, 0, 'treasure').setPosition(600, 180).setScale(1)
    this.player.body.allowGravity = false
    let gameWidth = this.sys.game.config.width
    let gameHeight = this.sys.game.config.height
    this.bg.setPosition(gameWidth / 2, gameHeight / 2)
    var emitter = particles.createEmitter({
        frame: ['sparkle_2', 'sparkle_1', 'sparkle_3'],
        x: 400,
        y: 400,
        lifespan: 4000,
        angle: { min: 225, max: 315 },
        speed: { min: 300, max: 500 },
        scale: { start: 0.6, end: 0 },
        gravityY: 300,
        bounce: 0.9,
        bounds: { x: 0, y: 0, w: 600, h: 0 },
        collideTop: false,
        collideBottom: false,
        blendMode: 'ADD'
    });
    console.log(emitter);
}
gameScene.update = function () {
    // this.enemy.angle += 1
    // if (this.enemy.scale <= 2) {
    //     this.enemy.scale += 0.01
    // }
}
let config = {
    type: Phaser.AUTO,
    width: 640,
    height: 360,
    scene: gameScene,
    pixelArt: false,
    title: 'Crossing',
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 20 },
            debug: true
        }
    }

}
let game = new Phaser.Game(config)