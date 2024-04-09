import Phaser from 'phaser';

const DINOSAUR_KEY = 'dinosaur';
const GROUND_KEY = 'ground';
const CLOUD_KEY = 'cloud';
const START_KEY = 'start';
const GAME_OVER_KEY = 'game over';
const START_OVER_KEY = 'start over';
const LETTERING_KEY = 'lettering';
const PTERODACTYL_KEY = 'pterodactyl';
const SMALL_CACTUS_KEY = 'small cactus';
const BIG_CACTUS_KEY = 'big cactus';

export default class RunningScene extends Phaser.Scene {
    constructor() {
        super('running-scene');
        this.dinosaur = undefined;
        this.cursors = undefined;
    }

    preload() {
        this.load.spritesheet(DINOSAUR_KEY,
            'assets/dinosaur-sprite.png', 
            { frameWidth: 86, frameHeight: 94 }
        );

        this.load.spritesheet(SMALL_CACTUS_KEY,
            'assets/small-cacti-sprite.png', 
            { frameWidth: 34, frameHeight: 70 }
        );

        this.load.spritesheet(BIG_CACTUS_KEY,
            'assets/big-cacti-sprite.png', 
            { frameWidth: 50, frameHeight: 98 }
        );

        this.load.spritesheet(PTERODACTYL_KEY,
            'assets/pterodactyl-sprite.png', 
            { frameWidth: 92, frameHeight: 79 }
        );

        this.load.image(GROUND_KEY, 'assets/ground.png');
        this.load.image(CLOUD_KEY, 'assets/cloud.png');

        this.load.image(START_KEY, 'assets/start-dinosaur-image.png');
        this.load.image(GAME_OVER_KEY, 'assets/game-over.png');
        this.load.image(START_OVER_KEY, 'assets/start-over.png');

        this.load.spritesheet(LETTERING_KEY,
            'assets/lettering-sprite.png',
            { frameWidth: 20, frameHeight: 21 }
        );
    }

    create() {
        const platforms = this.createPlatforms();
        this.dinosaur = this.createDinosaur();

        // this.physics.add.collider(this.dinosaur, platforms);
        this.cursors = this.input.keyboard.createCursorKeys();
    }

    createDinosaur() {
        const dinosaur = this.physics.add.sprite(100, 200, DINOSAUR_KEY);
        // dinosaur.setBounce(0.2);
        dinosaur.setCollideWorldBounds(true);

        this.anims.create({
            key: 'jump',
            frames: [ { key: DINOSAUR_KEY, frame: 0} ],
            frameRate: 10
        });

        this.anims.create({
            key: 'run',
            frames: this.anims.generateFrameNumbers(DINOSAUR_KEY, {start: 2, end: 3}),
            frameRate: 10,
            repeat: -1
        });

        this.anims.create({
            key: 'duck',
            frames: this.anims.generateFrameNumbers(DINOSAUR_KEY, {start: 6, end: 7}),
            frameRate: 10,
            repeat: -1
        });

        this.anims.create({
            key: 'blink',
            frames: this.anims.generateFrameNumbers(DINOSAUR_KEY, { start: 0, end: 1}),
            frameRate: 10,
            repeat: -1
        });

        this.anims.create({
            key: 'die',
            frames: this.anims.generateFrameNames(DINOSAUR_KEY, {start: 4, end: 5}),
            fmraRate: 10,
            repeat: -1
        });

        dinosaur.anims.play('run');

        return dinosaur;
    }

    update() {
        if (this.cursors.space.isDown) { 
            this.dinosaur.setVelocityY(-300);
            this.dinosaur.anims.play('jump', true);
        }
    }

    createPlatforms() {
        const platforms = this.physics.add.staticGroup();

        platforms.create(1202, 374, GROUND_KEY).refreshBody();

        return platforms;
    }
}