let f1,f2;

function setup() {
  createCanvas(500, 500);
  textAlign(CENTER);
  f1 = loadFont("assets/bitmap1.TTF");
  f2 = loadFont("assets/bitmap2.otf");
}

function draw() {
  background(100);
  textSize(24);
  textFont(f1);
  text("scott pilgrim", width/2, height/2);
  textFont(f2);
  text("vs the world", width/2, height/2 + 100);
}
