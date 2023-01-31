import * as PIXI from 'pixi.js';

import { Globals } from './Globals';
import { LoaderConfig } from './LoaderConfig';

export class Loader {
  loader: any;

  resources: any;

  text: any;

  progress: any;

  app: any;

  constructor(app: any) {
    this.app = app;
    this.loader = this.app.loader;
    this.resources = LoaderConfig;
    this.createContainer();
    // const container = this.createContainer();
    // app.stage.addChild(container);
  }

  createContainer() {
    const progressContainer = new PIXI.Container();
    this.text = new PIXI.Text('', {
      fontSize: 20,
      fill: 0xffffff,
    });

    this.progress = new PIXI.Graphics();

    progressContainer.addChild(this.progress, this.text);
    this.app.stage.addChild(progressContainer);
  }

  preload() {
    return new Promise<void>((resolve) => {
      this.loader.onProgress.add(this.loadingHandler.bind(this));

      // Object.keys(this.resources).forEach((el) => {
      //   this.loader.add(el, this.resources[el]);
      // });
      Object.keys(this.resources).forEach((key) => {
        this.loader.add(key, this.resources[key]);
      });

      this.loader.load((loader: any, resources: any) => {
        Globals.resources = resources;
        resolve();
      });
    });
  }

  loadingHandler(event: any) {
    this.text.text = `loading  ${event.progress || 0}%`;
    this.progress.beginFill(0x93ff93);
    this.progress.drawRoundedRect(0, 0, (event.progress || 0) * 3, 30, 50);
    this.progress.endFill();
    console.log('onProgress: ', this.text.text);
  }
}
