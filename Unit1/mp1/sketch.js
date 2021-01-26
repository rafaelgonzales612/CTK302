function setup() {
  // Sets the screen to be 720 pixels wide and 400 pixels high
  createCanvas(720, 400);

}

function draw() {
  background(255);
  //noStroke();

  fill(0, 153, 204);
  rect(0, 0, 720, 275); //sky

  fill(0, 204, 68);
  rect(0, 275, 720, 125); //ground
  fill("black");
  ellipse(81, 250, 50, 50); //back wheel
  ellipse(180, 250, 50, 50); //front wheel
  fill("blue");
  rect(45, 160, 75, 65); //back of truck
  rect(120, 165, 80, 60, 0, 5, 5, 0); //front of truck
  fill(153, 153, 255);
  rect(161, 174, 30, 20, 5); //side window

  fill(128, 43, 0)
  rect(420, 125, 150); //house
  fill("gray")
  triangle(420, 125, 570, 125, 495, 50) //roof
  fill("silver")
  rect(445, 150, 30); //window
  rect(515, 150, 30); //window
  rect(475, 210, 40, 65); //door
  ellipse(482, 240, 10); //doorknob

  fill("yellow");
  ellipse(720, 0, 100); //sun
  line(635, 13, 655, 12);
  line(641, 38, 661, 34);
  line(655, 60, 675, 50);
  line(683, 77, 697, 60);

  fill("skyblue");
  ellipse(135,45,150, 75); //cloud
  ellipse(330, 60, 150, 75); //cloud

  fill(102, 51, 0);
  rect(290, 250, 50, 110); //tree trunk
  fill(51, 204, 51);
  ellipse(315, 220, 100, 80); //leaves

  fill(172, 115, 57);
  ellipse(640, 220, 20); //head
  line(640, 230, 640, 260); //body
  line(640, 235, 620, 240); //arm
  line(640, 235, 660, 240); //arm
  line(640, 260, 630, 275); //leg
  line(640, 260, 650, 275); //leg


  fill("black");
  text(mouseX + ", " + mouseY, 20, 20);
}

function mouseRelease() {
  print(mouseX + ", " + mouseY);
}
