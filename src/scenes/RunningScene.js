import Phaser from 'phaser';

export default class RunningScene extends Phaser.Scene {
    constructor() {
        super('running-scene');
    }

    preload() {
        this.load.image('dinosaur', 'assets/dinosaur.png');
        this.load.image('obstacles', 'assets/enemies-obstacles-and-objects.png');
        this.load.image('backgrounds', 'assets/foregrounds-and-backgrounds.png');
        this.load.image('miscellaneous', 'assets/miscellaneous.png');
    }

    create() {

    }
}