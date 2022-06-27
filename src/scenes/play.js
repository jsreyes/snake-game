import Snake from "../gameobjects/Snake.js";
import Food from "../gameobjects/Food.js";

class Play extends Phaser.Scene {
  constructor() {
    super('Play');
  }

  // Carga todos los assets
  preload() {
    console.log('Escena play');

    this.snake = new Snake(this);
    this.food = new Food(this);
  }

  create() {
    this.scene.launch('UI');
    const sceneUI = this.scene.get('UI');

    this.input.keyboard.on('keydown-RIGHT', () => {
      this.snake.changeMov('derecha');
    })

    this.input.keyboard.on('keydown-LEFT', () => {
      this.snake.changeMov('izquierda');
    })

    this.input.keyboard.on('keydown-UP', () => {
      this.snake.changeMov('arriba');
    })

    this.input.keyboard.on('keydown-DOWN', () => {
      this.snake.changeMov('abajo');
    })

    // Collision cabeza con comida
    this.physics.add.collider(this.snake.cuerpo[0], this.food.food, () => this.snakeEat(sceneUI));
  }

  update(time) {
    this.snake.update(time);
  }

  snakeEat(sceneUI) {
    this.food.createFood();
    this.snake.feed();
    sceneUI.addPoint();
  }

}

export default Play;