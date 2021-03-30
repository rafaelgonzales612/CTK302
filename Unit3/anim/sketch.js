let fairy = [];
let i = 0;
let timer = 0;

function setup() {
  createCanvas(500, 500);

  fairy[0] = loadImage("assets/fairyT.png");
  fairy[1] = loadImage("assets/fairyM.png");
  fairy[2] = loadImage("assets/fairyB.png");
  fairy[3] = loadImage("assets/fairyM.png");


}

function draw() {
  background("white");

  image(fairy[i], 0, 0);

  timer++;
  if (timer > 5) {
    timer = 0;
    i++;
    if (i > 3) {
      i = 0;
    }
  }
}
