import * as PIXI from 'pixi.js';

import { Globals } from './Globals';

export class Signboard {
  texture: any;

  sprite: any;

  constructor() {
    this.texture = Globals.resources.signboard.texture;
    this.createSprite();
  }

  createSprite() {
    const sprite = new PIXI.Sprite(this.texture);
    this.sprite = sprite;
  }
}
