import * as PIXI from 'pixi.js';

import { Platform } from './Platform';

export class Platforms {
  container: any = new PIXI.Container();

  platforms: any = [];

  constructor() {
    this.createPlatform({ row: 2 });
  }

  createPlatform(data) {
    const platform = new Platform(data);
    this.container.addChild(platform.container);
    this.platforms.push(platform);
  }
}
