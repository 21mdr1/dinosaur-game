import Phaser from 'phaser';
import RunningScene from './scenes/RunningScene';

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 200 }
        }
    },
    scene: [ RunningScene ]
};

export default new Phaser.Game(config);