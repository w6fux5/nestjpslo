import * as PIXI from 'pixi.js';

import { Globals } from './Globals';

export class Background {
  container: any;

  constructor() {
    this.container = new PIXI.Container();
    this.createSprite();
  }

  createSprite() {
    const sprite = new PIXI.Sprite(Globals.resources.background.texture);
    this.container.addChild(sprite);
  }
}
