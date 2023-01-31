import * as PIXI from 'pixi.js';

import { Globals } from './Globals';

export class Machine {
  texture: any;

  sprite: any;

  constructor(currentNum) {
    this.texture = [Globals.resources.sammy.texture, Globals.resources.daito.texture];
    this.createSprite(currentNum);
  }

  createSprite(currentNum) {
    const sprite = new PIXI.Sprite(this.texture[0]);
    sprite.x = 100 + currentNum * 60;
    sprite.y = 530 - currentNum * 30;
    sprite.zIndex = 2 + currentNum;
    console.log(sprite);
    this.sprite = sprite;
  }
}
