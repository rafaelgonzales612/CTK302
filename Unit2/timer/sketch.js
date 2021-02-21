let myState = 0;
let myTimer = 0;
let f1;

function setup() {
  createCanvas(500, 500);
  ellipseMode(CENTER);
  rectMode(CENTER);
  textAlign(CENTER);

  f1 = loadFont("assets/ShadowsIntoLight.ttf");
}

function draw() {

  switch (myState) {
    case 0:
      background("red");
      fill("green");
      ellipse(width / 2, height / 2, 250, 250);
      fill(0);
      textSize(24);
      textFont(f1);
      text("I am a circle.", 250, 100);

      myTimer++
      if (myTimer > 3 * 60) {
        myTimer = 0;
        myState = 1;
      }

      break;

    case 1:
      background("green");
      fill("blue");
      rect(width / 2, height / 2, 250, 250)
      fill(0);
      textSize(24);
      textFont(f1);
      text("Now I am a rectangle.", 250, 100);

      myTimer++
      if (myTimer > 4 * 60) {
        myTimer = 0;
        myState = 2;
      }

      break;

    case 2:
      background("blue");
      fill("red");
      triangle(250, 125, 125, 375, 375, 375);
      fill(0);
      textSize(24);
      textFont(f1);
      text("Finally I am a triangle.", 250, 100);


      myTimer++
      if (myTimer > 5 * 60) {
        myTimer = 0;
        myState = 0;
      }

      break;
  }
}
