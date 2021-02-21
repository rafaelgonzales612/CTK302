let state = 0;
let timer = 0;

function setup() {
  createCanvas(500, 500);
  textAlign(CENTER);
  textSize(48);
}

function draw() {

  switch (state) {
    case 0:
      background("red");
      text("What do you call\na fake noodle?", width / 2, height / 2);
      break;

    case 1:
      background(100, 0, 0);
      text("An impasta!", width / 2, height / 2);
      break;
  }

  timer++;
  if (timer > 3 * 60) {
    state++;
    timer = 0;
    if (state > 1) {
      state = 0;
    }
  }

}
