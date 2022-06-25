class Snake {

  constructor(scene) {
    this.scene = scene;
    this.cuerpo = this.scene.physics.add.image(10, 10, 'cuerpo');
    // Movimiento a la derecha de la serpiente
    this.dir = 'derecha';
    this.timmer = 0;
  }

  changeMov(dir) {
    this.dir = dir;
  }

  update(time) {
    if(time > this.timmer) {
      // Dependiendo la dirección le sumara o restara pixeles en cualquier eje
      switch(this.dir) {
        case 'derecha':
          this.cuerpo.x += 10;
          break;
        case 'izquierda':
          this.cuerpo.x -= 10;
          break;
        case 'arriba':
          this.cuerpo.y -= 10;
          break;
        case 'abajo':
          this.cuerpo.y += 10;
      }
      this.timmer = time + 150;
    }
  }
}

export default Snake;