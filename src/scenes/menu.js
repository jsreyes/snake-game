class Menu extends Phaser.Scene {
  constructor() {
    super('Menu');
  }

  // Carga todos los assets
  preload() {
    console.log('Hola Soy preload');
  }

}

export default Menu;