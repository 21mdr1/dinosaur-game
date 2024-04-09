import Phaser from 'phaser';

const DINOSAUR_KEY = 'dinosaur';
const OBSTACLE_KEY = 'obstacles';
const BACKGROUND_KEY = 'backgrounds';
const MISC_KEY = 'miscellaneous';

export default class RunningScene extends Phaser.Scene {
    constructor() {
        super('running-scene');
        this.dinosaur = undefined;
    }

    preload() {
        this.load.image(OBSTACLE_KEY, 'assets/enemies-obstacles-and-objects.png');
        this.load.image(BACKGROUND_KEY, 'assets/foregrounds-and-backgrounds.png');
        this.load.image(MISC_KEY, 'assets/miscellaneous.png');

        this.load.spritesheet(DINOSAUR_KEY,
            'assets/dinosaur.png', 
            { frameWidth: 52, frmaeHeight: 60 }
        );
    }

    create() {
        // add background here?
        // this.createPlatforms();
        this.createDinosaur();
    }

    createDinosaur() {
        this.dinosaur = this.physics.add.sprite(100, 450, DINOSAUR_KEY);
        // this.dinosaur.setBounce(0.2);
        this.dinosaur.setCollideWorldBounds(true);

        this.anims.create({
            key: 'jump',
            frames: [ { key: DINOSAUR_KEY, frame: 1} ],
            frameRate: 10
        });

        this.anims.create({
            key: 'run',
            frames: this.anims.generateFrameNumbers(DINOSAUR_KEY, {start: 3, end: 4}),
            frameRate: 10,
            repeat: -1
        });

        this.anims.create({
            key: 'duck',
            frames: this.anims.generateFrameNumbers(DINOSAUR_KEY, {start: 7, end: 8}),
            frameRate: 10,
            repeat: -1
        });

        this.anims.create({
            key: 'blink',
            frames: this.anims.generateFrameNumbers(DINOSAUR_KEY, { start: 1, end: 2}),
            frameRate: 10,
            repeat: -1
        });
    }

    // createPlatforms() {
    //     const platforms = this.physics.add.staticGroup();

    //     platforms.create() //the ground
    // }
}