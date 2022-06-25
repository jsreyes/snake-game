import BootLoader from "./bootloader.js";
import GameOver from "./scenes/gameover.js";
import Menu from "./scenes/menu.js";
import Play from "./scenes/play.js";
import UI from "./scenes/ui.js";

const config = {
  title: 'Snake',
  width: 320,
  height: 180,
  type: Phaser.AUTO,
  parent: 'container',
  backgroundColor: '#f9ca24',
  pixelArt: true,
  physics: {
    default: 'arcade',
    // arcade: {
    //   gravity: { y: 100 }
    // }
  },
  scene: [
    BootLoader,
    Play,
    Menu,
    UI,
    GameOver
  ],
};

new Phaser.Game(config);