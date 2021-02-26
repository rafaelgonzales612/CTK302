let state = -1;
let mic;
let vol;
let timer = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  textAlign(CENTER);
  textSize(48);

  //code for initializing mic in
  mic = new p5.AudioIn();
  mic.start();
}

function draw() {

  // get the sound input
  vol = (mic.getLevel()).toFixed(2); // returned level is between 0 and 1

  switch (state) {
    case -1:
    background(100);
    text("click to start", width/2, height/2);
    break;

    case 0:
      background("green");
      text("Shhh! You're getting a little loud there buddy.", width / 2, height / 2);
      if (vol > .1) {
        state = 1;
      }
      break;

    case 1:
      background("red");
      text("QUIET DOWN! Now you're too loud buddy.", width / 2, height / 2);
      timer++;
      if(timer > 3 * 60) {
        state = 0;
        timer = 0;
      }
      break;
  }
}

function mouseReleased() {
  if (state == -1) {
    state = 0;
  }
}

function touchStarted() {
  getAudioContext().resume();
}
