import * as PIXI from 'pixi.js';

import { Globals } from './Globals';

export class Platform {
  container: any;

  row: any;

  rowOffset: number;

  constructor({ row }) {
    this.container = new PIXI.Container();
    this.row = row;
    this.rowOffset = 50;
    this.createContainer();
  }

  createContainer() {
    new Array(this.row).fill(null).forEach((el, index) => {
      const sprite = new PIXI.Sprite(Globals.resources.platform.texture);
      sprite.scale.x = 0.8;
      sprite.scale.y = 0.8;

      sprite.y = 300 * (index + 1);

      if (index > 0) {
        sprite.y += this.rowOffset;
      }
      sprite.x = 55;
      this.container.addChild(sprite);
    });
  }
}
