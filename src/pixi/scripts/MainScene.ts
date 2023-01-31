import * as PIXI from 'pixi.js';

import { Background } from './Background';
import { Platforms } from './Platforms';
import { Signboard } from './Signboard';

export class MainScene {
  container: any;

  bg: any;

  signboard: any;

  platforms: any;

  constructor(contentWidth: number) {
    this.container = new PIXI.Container();
    this.createBackground(contentWidth);
    // this.createSignboard();
    // this.createPlatforms();
  }

  createBackground(contentWidth: number) {
    this.bg = new Background();
    this.bg.container.children[0].width = contentWidth;
    this.container.addChild(this.bg.container);
  }

  createSignboard() {
    this.signboard = new Signboard();
    this.signboard.sprite.scale.set(0.89, 1);
    this.container.addChild(this.signboard.sprite);
  }

  createPlatforms() {
    this.platforms = new Platforms();
    this.container.addChild(this.platforms.container);
  }

  public resize(width: number) {
    console.log('main scene', width);
    this.bg.container.children[0].width = width;
  }
}
