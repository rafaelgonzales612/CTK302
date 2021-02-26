var mic;
var vol;
var c = 'blue';
var velocity = 0;
var x = 0;


function setup() {
  createCanvas(400, 400);

  ellipseMode(CENTER);

  // code for initializing mic in.
  mic = new p5.AudioIn(); // what does "new" mean?
  mic.start();
}


function draw() {
  background(c);

  // get the sound input
  vol = (mic.getLevel()).toFixed(2);

  // check how loud the input is
  if (vol > .10) {
    x = x + 5;
    if (x > width) {
      x = -200;
    }
  }

  push();
  translate(x, 0);
  avatar();
  pop();

  // extra stuff for debugging
  textSize(18);
  text("Click the screen first to give\npermission for mic input.\nMy volume is " + vol, 10, 60);
  text(mouseX + ", " + mouseY, 10, 375);
}

function avatar() {
  //body
  ellipse(width/2 + 125, height/2 + 20, 50, 50);
  ellipse(width/2 + 75, height/2 + 10, 75, 75);
  ellipse(width/2, height/2, 100, 100);
  //legs
  strokeWeight(5);
  line(200, 220, 215, 250);
  line(215, 250, 200, 280);
  line(275, 220, 290, 250);
  line(290, 250, 275, 280);
  line(325, 220, 340, 250);
  line(340, 250, 325, 280);
  line(170, 240, 185, 270);
  line(250, 240, 265, 270);
  line(310, 240, 325, 270);
  //antennae
  strokeWeight(3);
  line(340, 200, 345, 190);
  line(345, 190, 350, 200);
  line(330, 195, 335, 185);
  line(335, 185, 340, 195);
}

function touchStarted() {
  getAudioContext().resume();
}
