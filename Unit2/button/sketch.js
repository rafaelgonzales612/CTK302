let state = 0;

function setup() {
  createCanvas(500, 500);
  textAlign(CENTER);
  textSize(60);

}

function draw() {

  switch (state) {
    case 0:
      background(255, 0, 255);
      text("Welcome!\nClick the button!", 250, 250);
      break;

    case 1:
      background(255, 0, 102);
      text("Nice!\nNow click this one!", 250, 250);
      break;

    case 2:
      background(255, 102, 204);
      text("Awesome!\nOne more!", 250, 250);
      break;
  }

  fill(0);
  rect(width / 2 - 50, height - 100, 100, 50);
}

function mouseReleased() {
  if ((mouseX > width / 2 - 50) && (mouseX < width / 2 + 50) && (mouseY > height - 100) && (mouseY < height - 50)) {
    state++;
    if (state > 2) {
      state = 0;
    }
  }
}
