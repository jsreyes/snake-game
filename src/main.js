import BootLoader from "./bootloader.js";
import Play from "./scenes/play.js";

const config = {
  title: 'Snake',
  width: 320,
  height: 180,
  type: Phaser.AUTO,
  parent: 'container',
  backgroundColor: '#f9ca24',
  pixelArt: true,
  scene: [BootLoader, Play],
};

new Phaser.Game(config);