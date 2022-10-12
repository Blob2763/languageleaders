/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Buttons extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("easy", "./Buttons/costumes/easy.png", { x: 171, y: 77 }),
      new Costume("normal", "./Buttons/costumes/normal.png", { x: 268, y: 77 }),
      new Costume("hard", "./Buttons/costumes/hard.png", { x: 184, y: 77 }),
      new Costume("impossible", "./Buttons/costumes/impossible.png", {
        x: 360,
        y: 77
      })
    ];

    this.sounds = [new Sound("pop", "./Buttons/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.BROADCAST, { name: "start" }, this.whenIReceiveStart),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "start game" },
        this.whenIReceiveStartGame
      )
    ];
  }

  *whenIReceiveStart() {
    this.stage.vars.gameOn = 0;
    this.stage.vars.difficulty = "";
    this.visible = true;
    this.goto(0, 135);
    this.costume = "easy";
    for (let i = 0; i < 4; i++) {
      this.createClone();
      this.costumeNumber += 1;
      this.y += -90;
      yield;
    }
    this.visible = false;
  }

  *whenthisspriteclicked() {
    this.stage.vars.difficulty = this.costumeNumber;
    this.stage.vars.gameOn = 1;
    this.stage.vars.answer = this.random(1, 10);
    this.broadcast("start game");
  }

  *whenIReceiveStartGame() {
    this.deleteThisClone();
  }
}
