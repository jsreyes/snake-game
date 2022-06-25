class GameOver extends Phaser.Scene {
  constructor() {
    super('GameOver');
  }

  // Carga todos los assets
  preload() {
    console.log('Hola Soy preload');
  }

}

export default GameOver;