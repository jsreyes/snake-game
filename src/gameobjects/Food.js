 class Food {
  constructor(scene) {
    this.scene = scene;
    this.food = this.scene.physics.add.group({
      key: 'comida',
      setXY: {
        x: 30,
        y: 30,
      }
    })
    // Se obtiene el children del grupo que la imagen
    // Se setea el setOrigin 0 para que no quede desfasado con respecto a la serpiente
    // Se setea la profundidad para que quede debajo de la serpiente
    this.food.getChildren()[0].setOrigin(0).setDepth(-1);

  }

  createFood() {
    const getConfig = this.scene.sys.game.config;
    let x = Phaser.Math.Between(30, getConfig.width - 30);
    let y = Phaser.Math.Between(30, getConfig.height - 30);

    // Redondea la imagen de la food
    x = Phaser.Math.Snap.To(x, 10);
    y = Phaser.Math.Snap.To(y, 10);
    
    // Destruye el anterior elemento
    this.food.getChildren()[0].destroy();

    // Crea la comida en una parte random del mapa
    this.food.create(x, y, 'comida');
    this.food.getChildren()[0].setOrigin(0).setDepth(-1);

  }
}

export default Food;