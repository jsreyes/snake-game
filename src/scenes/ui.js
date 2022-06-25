class UI extends Phaser.Scene {
  constructor() {
    super('UI');
  }

  // Carga todos los assets
  preload() {
    console.log('Hola Soy preload');
  }

}

export default UI;