import * as PIXI from 'pixi.js';

import { Loader } from './Loader';
import { MainScene } from './MainScene';

export class PixiApp {
  app: any;

  loader: any;

  scene: any;

  onProgress: any;

  run(contentWidth: number) {
    // create canvas
    this.app = new PIXI.Application({
      autoDensity: true,
      resolution: devicePixelRatio,
      height: 1100,
      width: contentWidth,
    });

    this.app.renderer.plugins.interaction.autoPreventDefault = false;

    // load sprites
    this.loader = new Loader(this.app);
    this.loader.preload().then(() => {
      this.start(contentWidth);
    });
  }

  start(contentWidth: number) {
    this.scene = new MainScene(contentWidth);
    // this.app.stage.addChild(this.scene.container);
    // console.log(this.scene.container);
    document.getElementById('lobby')?.appendChild(this.app.view);
  }

  resize(width: number) {
    this.app.renderer?.resize(width, 1100);
    this.scene?.resize(width, 1100);
  }
}
