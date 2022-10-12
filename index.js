import { Project } from "https://unpkg.com/leopard@^1/dist/index.esm.js";

import Stage from "./Stage/Stage.js";
import Numbers from "./Numbers/Numbers.js";
import Buttons from "./Buttons/Buttons.js";

const stage = new Stage({ costumeNumber: 1 });

const sprites = {
  Numbers: new Numbers({
    x: 0,
    y: -48,
    direction: 90,
    costumeNumber: 5,
    size: 100,
    visible: true,
    layerOrder: 2
  }),
  Buttons: new Buttons({
    x: 0,
    y: -203,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 1
  })
};

const project = new Project(stage, sprites, {
  frameRate: 30 // Set to 60 to make your project run faster
});
export default project;
