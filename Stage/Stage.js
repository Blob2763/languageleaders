/* eslint-disable require-yield, eqeqeq */

import {
  Stage as StageBase,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Stage extends StageBase {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("correct", "./Stage/costumes/correct.png", {
        x: 229,
        y: 327
      }),
      new Costume("incorrect", "./Stage/costumes/incorrect.png", {
        x: 316,
        y: 327
      }),
      new Costume("blank", "./Stage/costumes/blank.png", { x: 0, y: 0 })
    ];

    this.sounds = [new Sound("pop", "./Stage/sounds/pop.wav")];

    this.triggers = [
      new Trigger(
        Trigger.BROADCAST,
        { name: "correct" },
        this.whenIReceiveCorrect
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "incorrect" },
        this.whenIReceiveIncorrect
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.BROADCAST, { name: "start" }, this.whenIReceiveStart)
    ];

    this.vars.difficulty = 4;
    this.vars.gameOn = 0;
    this.vars.answer = 5;
  }

  *whenIReceiveCorrect() {
    this.costume = "correct";
  }

  *whenIReceiveIncorrect() {
    this.costume = "incorrect";
  }

  *whenGreenFlagClicked() {
    this.broadcast("start");
  }

  *whenIReceiveStart() {
    this.costume = "blank";
  }
}
