import * as PIXI from 'pixi.js';

import { Globals } from './Globals';
import { Machine } from './Machine';

export class Platform {
  container: any;

  row: any;

  rowOffset: number;

  constructor({ row }) {
    this.container = new PIXI.Container();
    this.row = row;
    this.rowOffset = 50;
    this.createContainer();
    this.createMachines();
  }

  createContainer() {
    new Array(this.row).fill(null).forEach((el, index) => {
      const sprite = new PIXI.Sprite(Globals.resources.platform.texture);
      sprite.scale.x = 0.8;
      sprite.scale.y = 0.8;

      sprite.x = 55;
      sprite.y = 300 * (index + 1);

      if (index > 0) {
        sprite.y += this.rowOffset;
      }
      this.container.addChild(sprite);
    });
  }

  createMachines() {
    new Array(5).fill(null).forEach((el, index) => {
      const machine = new Machine(index);
      this.container.addChild(machine.sprite);
    });
  }
}
