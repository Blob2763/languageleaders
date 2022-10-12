/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Numbers extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("1", "./Numbers/costumes/1.png", { x: 172, y: 53 }),
      new Costume("2", "./Numbers/costumes/2.png", { x: 173, y: 151 }),
      new Costume("3", "./Numbers/costumes/3.png", { x: 172, y: 166 }),
      new Costume("4", "./Numbers/costumes/4.png", { x: 161, y: 163 }),
      new Costume("5", "./Numbers/costumes/5.png", { x: 173, y: 175 }),
      new Costume("6", "./Numbers/costumes/6.png", { x: 183, y: 193 }),
      new Costume("7", "./Numbers/costumes/7.png", { x: 176, y: 191 }),
      new Costume("8", "./Numbers/costumes/8.png", { x: 181, y: 181 }),
      new Costume("9", "./Numbers/costumes/9.png", { x: 175, y: 202 }),
      new Costume("10", "./Numbers/costumes/10.png", { x: 173, y: 196 })
    ];

    this.sounds = [new Sound("Meow", "./Numbers/sounds/Meow.wav")];

    this.triggers = [
      new Trigger(Trigger.KEY_PRESSED, { key: "1" }, this.whenKey1Pressed),
      new Trigger(
        Trigger.KEY_PRESSED,
        { key: "space" },
        this.whenKeySpacePressed
      ),
      new Trigger(Trigger.BROADCAST, { name: "start" }, this.whenIReceiveStart),
      new Trigger(
        Trigger.BROADCAST,
        { name: "answer" },
        this.whenIReceiveAnswer
      ),
      new Trigger(Trigger.KEY_PRESSED, { key: "2" }, this.whenKey2Pressed),
      new Trigger(Trigger.KEY_PRESSED, { key: "3" }, this.whenKey3Pressed),
      new Trigger(Trigger.KEY_PRESSED, { key: "4" }, this.whenKey4Pressed),
      new Trigger(Trigger.KEY_PRESSED, { key: "5" }, this.whenKey5Pressed),
      new Trigger(Trigger.KEY_PRESSED, { key: "6" }, this.whenKey6Pressed),
      new Trigger(Trigger.KEY_PRESSED, { key: "7" }, this.whenKey7Pressed),
      new Trigger(Trigger.KEY_PRESSED, { key: "8" }, this.whenKey8Pressed),
      new Trigger(Trigger.KEY_PRESSED, { key: "9" }, this.whenKey9Pressed),
      new Trigger(Trigger.KEY_PRESSED, { key: "0" }, this.whenKey0Pressed)
    ];

    this.vars.input = 5;
    this.vars.difficulties = [0.25, 0.1, 0.05, 0.03];
  }

  *flash(secs) {
    this.visible = true;
    yield* this.wait(secs);
    this.visible = false;
  }

  *whenKey1Pressed() {
    if (this.stage.vars.gameOn == 1) {
      this.vars.input = 1;
      this.broadcast("answer");
    }
  }

  *whenKeySpacePressed() {
    if (this.stage.vars.gameOn == 1) {
      this.costume = this.stage.vars.answer;
      this.goto(0, 0);
      yield* this.flash(this.vars.difficulties[this.stage.vars.difficulty - 1]);
    }
  }

  *whenIReceiveStart() {
    this.visible = false;
  }

  *whenIReceiveAnswer() {
    this.visible = true;
    this.y = -48;
    if (this.stage.vars.answer == this.vars.input) {
      this.broadcast("correct");
    } else {
      this.broadcast("incorrect");
    }
    this.stage.vars.gameOn = 0;
    while (!this.keyPressed("space")) {
      yield;
    }
    while (!!this.keyPressed("space")) {
      yield;
    }
    this.broadcast("start");
  }

  *whenKey2Pressed() {
    if (this.stage.vars.gameOn == 1) {
      this.vars.input = 2;
      this.broadcast("answer");
    }
  }

  *whenKey3Pressed() {
    if (this.stage.vars.gameOn == 1) {
      this.vars.input = 3;
      this.broadcast("answer");
    }
  }

  *whenKey4Pressed() {
    if (this.stage.vars.gameOn == 1) {
      this.vars.input = 4;
      this.broadcast("answer");
    }
  }

  *whenKey5Pressed() {
    if (this.stage.vars.gameOn == 1) {
      this.vars.input = 5;
      this.broadcast("answer");
    }
  }

  *whenKey6Pressed() {
    if (this.stage.vars.gameOn == 1) {
      this.vars.input = 6;
      this.broadcast("answer");
    }
  }

  *whenKey7Pressed() {
    if (this.stage.vars.gameOn == 1) {
      this.vars.input = 7;
      this.broadcast("answer");
    }
  }

  *whenKey8Pressed() {
    if (this.stage.vars.gameOn == 1) {
      this.vars.input = 8;
      this.broadcast("answer");
    }
  }

  *whenKey9Pressed() {
    if (this.stage.vars.gameOn == 1) {
      this.vars.input = 9;
      this.broadcast("answer");
    }
  }

  *whenKey0Pressed() {
    if (this.stage.vars.gameOn == 1) {
      this.vars.input = 10;
      this.broadcast("answer");
    }
  }
}
