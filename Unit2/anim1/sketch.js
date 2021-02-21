let x = 0;

function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(100);

  textSize(48);
  text("RUN FORREST RUN", x, height/2);
  x += 5;
  if (x > width) {
    x = -500;
  }
}
