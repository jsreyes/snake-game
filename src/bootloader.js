class BootLoader extends Phaser.Scene {
  constructor() {
    super('Bootloader');
  }

  // Carga todos los assets
  preload() {
    console.log('Hola Soy Bootloader');
    // Carga de los assets con load.image()
    this.load.image('cuerpo', './assets/body.png');
    this.load.image('comida', './assets/food.png');
    this.load.image('tablero', './assets/tablero.png');

    this.load.on('complete', () => {
      this.scene.start('Play');
    })

  }
  
}

export default BootLoader;