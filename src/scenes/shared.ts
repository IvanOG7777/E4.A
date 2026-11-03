import Phaser from "phaser";

/** Fade once, then switch to the requested scene and pass its start data. */
export function fadeTo(
  scene: Phaser.Scene,
  target: string,
  data?: object,
): void {
  if (scene.cameras.main.fadeEffect.isRunning) return;
  scene.cameras.main.fadeOut(450, 4, 2, 12);
  scene.cameras.main.once("camerafadeoutcomplete", () => {
    scene.scene.start(target, data);
  });
}
