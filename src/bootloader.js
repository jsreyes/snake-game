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

    // Carga Font Json Config
    this.load.json('fontJSON', './assets/font/font.json');
    this.load.image('font', './assets/font/font.png')

    this.load.on('complete', () => {
      // Se obtiene el fontJson por medio del cache
      const fontJson = this.cache.json.get('fontJSON');
      this.cache.bitmapFont.add('pixel', Phaser.GameObjects.RetroFont.Parse(this, fontJson));
      console.log(fontJson);

      this.scene.start('Menu');

    })

  }
  
}

export default BootLoader;