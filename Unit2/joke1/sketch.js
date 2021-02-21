let state = 0;

function setup() {
  createCanvas(500, 500);
  textAlign(CENTER);
  textSize(48);
}

function draw() {

  switch (state) {
    case 0:
      background("blue");
      text("What do dentists\ncall their x-rays?", width / 2, height / 2);
      break;

    case 1:
      background("lightblue");
      text("Tooth pics!", width / 2, height / 2);
      break;
  }
}

function mouseReleased() {
  state++;
  if (state > 1) {
    state = 0;
  }
}
