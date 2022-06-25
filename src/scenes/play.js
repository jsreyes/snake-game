import Snake from "../gameobjects/Snake.js";

class Play extends Phaser.Scene {
  constructor() {
    super('Play');
  }

  // Carga todos los assets
  preload() {
    console.log('Escena play');
    // this.add.image(10, 10, 'cuerpo');

    this.snake = new Snake(this);
  }

}

export default Play;