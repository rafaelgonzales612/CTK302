let f1;

function setup() {
  createCanvas(500, 500);
  textAlign(CENTER);
  f1 = loadFont("assets/bitmap1.TTF");
}

function draw() {
  background(100);
  textSize(48);
  textFont(f1);
  text("hello", width/2, height/2);
}
