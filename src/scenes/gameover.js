class GameOver extends Phaser.Scene {
  constructor() {
    super('GameOver');
  }

  // Carga todos los assets
  preload() {
    console.log('Hola Soy Gameover');
  }

  create() {
    this.scene.stop('UI');
    this.add.dynamicBitmapText(
      this.sys.game.config.width/2, 
      this.sys.game.config.height/2 - 30, 
      'pixel', 
      'GAMEOVER', 
      20).setOrigin(0.5);


      // Evento click y/o enter
      this.input.on('pointerdown', () => {
        this.exitScene();
      });

      this.input.keyboard.on('keydown-ENTER', () => {
        this.exitScene();
      })

      this.evento = setTimeout(() => {
        this.exitScene();
      }, 5000);
  }

  exitScene() {
    // Si ocurre algun evento se limpia
    clearTimeout(this.evento);
    this.scene.start('Menu');
  }

}

export default GameOver;