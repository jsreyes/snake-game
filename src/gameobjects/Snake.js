class Snake {

  constructor(scene) {
    this.scene = scene;
    this.cuerpo = [];
    // Movimiento a la derecha de la serpiente
    this.dir = 'izquierda';
    this.timmer = 0;
    this.oldDir = 'derecha';

    // Creando el cuerpo de la serpiente
    for (let i = 0; i < 3; i++) {
      this.cuerpo.push(
        this.scene.physics.add.image(100 + i * 10, 100, 'cuerpo')
            .setOrigin(0)
      );
    }

    // Genera Colisiones
    for (let i = 1; i < 10; i++) {
      this.scene.physics.add.collider(this.cuerpo[0], this.cuerpo[i], () => this.crash())
    }
  }

  changeMov(dir) {
    if (this.oldDir != dir) {
      this.dir = dir;
    }
  }

  feed() {
    const obj = this.cuerpo[this.cuerpo.length - 1];
    const newObject = this.scene.physics.add.image(obj.x, obj.y, 'cuerpo').setOrigin(0);
    this.cuerpo.push(newObject);
    this.scene.physics.add.collider(this.cuerpo[0], newObject, () => this.crash())

  }

  crash() {
    this.scene.scene.start('GameOver');
  }

  update(time) {
    if(time > this.timmer) {
      for (let i = this.cuerpo.length - 1; i > 0; i--) {
        this.cuerpo[i].x = this.cuerpo[i - 1].x;
        this.cuerpo[i].y = this.cuerpo[i - 1].y;

        // Permite que la serpiente si termina en derecha aparezca en izquierda
        this.cuerpo[this.cuerpo.length - 1 - i].x = Phaser.Math.Wrap(this.cuerpo[this.cuerpo.length - 1 - i].x,
            0,
            this.scene.sys.game.config.width);
        this.cuerpo[this.cuerpo.length - 1 - i].y = Phaser.Math.Wrap(this.cuerpo[this.cuerpo.length - 1 - i].y,
            20,
            this.scene.sys.game.config.height);
      }
      // Dependiendo la dirección le sumara o restara pixeles en cualquier eje
      switch(this.dir) {
        case 'derecha':
          this.cuerpo[0].x += 10;
          this.oldDir = 'izquierda';
          break;
        case 'izquierda':
          this.cuerpo[0].x -= 10;
          this.oldDir = 'derecha';
          break;
        case 'arriba':
          this.cuerpo[0].y -= 10;
          this.oldDir = 'abajo';
          break;
        case 'abajo':
          this.cuerpo[0].y += 10;
          this.oldDir = 'arriba';
      }
      this.timmer = time + 150;
    }
  }
}

export default Snake;