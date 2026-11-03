import Phaser from "phaser";
import { makeTextures } from "../textures.ts";
import { loadSounds } from "../sounds.ts";
import type { LaunchOptions } from "../main.ts";

export class BootScene extends Phaser.Scene {
  constructor(private readonly options: LaunchOptions) {
    super("boot");
  }

  create(): void {
    if (!this.textures.exists("player")) {
      makeTextures(this);
      loadSounds(this);
    }

    if (this.options.attract) {
      this.scene.start("play", { attract: true });
    } else {
      this.scene.start("title");
    }
  }
}
