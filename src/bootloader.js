class BootLoader extends Phaser.Scene {
  constructor() {
    super('Bootloader');
  }

  // Carga todos los assets
  preload() {
    console.log('Hola Soy Bootloader');
    this.scene.start('Play');
  }

}

export default BootLoader;