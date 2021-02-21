let x = 0;

function setup() {
  createCanvas(800, 800);
  rectMode(CENTER);
  ellipseMode(CENTER);
  textAlign(CENTER);
  imageMode(CENTER);
}

function draw() {
  background(100);

  push();
  translate(x, 0);
  //body
  noStroke();
  fill(172, 115, 57);
  ellipse(width / 2, height / 2 - 10, 200); //head
  arc(475, 690, 50, 50, 0, PI); //left hand
  arc(325, 690, 50, 50, 0, PI); //right hand
  fill(26);
  rect(width / 2, height / 2 + 190, 50, 200); //body, shirt
  fill(255);
  rect(width / 2 - 15, height / 2 + 190, 20, 200); //jacket right
  rect(width / 2 + 15, height / 2 + 190, 20, 200); //jacket left
  quad(375, 500, 375, 550, 350, 690, 300, 690); //right arm
  quad(425, 500, 425, 550, 450, 690, 500, 690); //left arm
  fill(0);
  rect(width / 2, 745, 50, 110); //legs
  stroke("white");
  line(width / 2, 725, width / 2, 800);
  noStroke();
  fill(0);
  ellipse(width / 2 + 15, height / 2 + 100, 7); //buttons
  ellipse(width / 2 + 15, height / 2 + 140, 7);
  ellipse(width / 2 + 15, height / 2 + 180, 7);
  ellipse(width / 2 + 15, height / 2 + 220, 7);
  ellipse(width / 2 + 15, height / 2 + 260, 7);
  fill(0);
  quad(402, 269, 382, 330, 282, 367, 310, 314); //hair
  quad(333, 274, 391, 339, 507, 360, 494, 305);
  quad(430, 276, 493, 321, 506, 400, 477, 378);
  quad(314, 289, 289, 401, 321, 378, 327, 317);
  stroke(0);
  fill(255);
  arc(width / 2 - 30, height / 2 - 25, 50, 50, 0, PI, CHORD); //right eye
  arc(width / 2 + 30, height / 2 - 25, 50, 50, 0, PI, CHORD); //left eye
  fill(0);
  ellipse(width / 2 - 30, height / 2 - 15, 10, 15);
  ellipse(width / 2 + 30, height / 2 - 15, 10, 15);
  stroke(0);
  line(400, 450, 430, 440); //mouth
  line(430, 440, 435, 435);

  x += 10;
  if (x > width) {
    x = -500;
  }
  pop();

  //props
  stroke(0);
  fill(77, 38, 0);
  rect(400, 745, 800, 110); //table
  fill(0, 128, 43);
  rect(120, 675, 150, 30); //book_green
  fill(0, 92, 230);
  rect(140, 645, 150, 30); //book_blue
  fill(230, 0, 0);
  rect(100, 615, 150, 30); //book_red
  fill(71, 0, 179);
  rect(150, 585, 150, 30); //book_purple
  fill(204, 204, 0);
  rect(110, 555, 150, 30); //book_yellow

  fill(0);
  textSize(14);
  text(mouseX + " , " + mouseY, 50, 20); //mouse coordinates
  // textSize(18);
  // text("Total hours: 5 hours", 720, 20); //time-log
  
  //avatar();
}

// function avatar() {
//   if (mouseIsPressed) {
//     //body
//     noStroke();
//     fill(172, 115, 57);
//     ellipse(width/2, height/2 - 10, 200); //head
//     arc(475, 690, 50, 50, 0, PI); //left hand
//     arc(325, 690, 50, 50, 0, PI); //right hand
//     fill(26);
//     rect(width/2, height/2 + 190, 50, 200); //body, shirt
//     fill(255);
//     rect(width/2 - 15, height/2 + 190, 20, 200); //jacket right
//     rect(width/2 + 15, height/2 + 190, 20, 200); //jacket left
//     quad(375, 500, 375, 550, 350, 690, 300, 690); //right arm
//     quad(425, 500, 425, 550, 450, 690, 500, 690); //left arm
//     fill(0);
//     rect(width/2, 745, 50, 110); //legs
//     stroke("white");
//     line(width/2, 725, width/2, 800);
//     noStroke();
//     fill(0);
//     ellipse(width/2 + 15, height/2 + 100, 7); //buttons
//     ellipse(width/2 + 15, height/2 + 140, 7);
//     ellipse(width/2 + 15, height/2 + 180, 7);
//     ellipse(width/2 + 15, height/2 + 220, 7);
//     ellipse(width/2 + 15, height/2 + 260, 7);
//     fill(0);
//     quad(402, 269, 382, 330, 282, 367, 310, 314); //hair
//     quad(333, 274, 391, 339, 507, 360, 494, 305);
//     quad(430, 276, 493, 321, 506, 400, 477, 378);
//     quad(314, 289, 289, 401, 321, 378, 327, 317);
//     stroke(0);
//     fill(255);
//     arc(width/2 - 30, height/2 - 25, 50, 50, 0, PI, CHORD); //right eye
//     arc(width/2 + 30, height/2 - 25, 50, 50, 0, PI, CHORD); //left eye
//     fill(0);
//     ellipse(width/2 - 30, height/2 - 15, 10, 15);
//     ellipse(width/2 + 30, height/2 - 15, 10, 15);
//     stroke(0);
//     line(400, 450, 430, 440); //mouth
//     line(430, 440, 435, 435);
//
//     // image(fire, width/2 - 250, height/2 + 150, 300, 300);
//     // image(water, width/2 - 250, height/2 - 100, 200, 200);
//     // image(earth, width/2 + 250, height/2 + 250, 200, 200);
//     // image(air, width/2 + 250, height/2 - 50, 200, 200);
//     // image(lightning, width/2, height/2 - 225, 250, 250);
//
//     fill(0);
//     textSize(26);
//     text("Kai uses his magical prowess to create elemental magic and protect the world from the forces of Darkness.", width/2, height/2 - 125, 600, 500);
//
//   } else {
//
//     //body
//     noStroke();
//     fill(172, 115, 57);
//     ellipse(width/2, height/2 - 10, 200); //head
//     fill(26);
//     rect(width/2, height/2 + 190, 50, 200); //body, shirt
//     fill(0, 0, 153);
//     rect(width/2 - 15, height/2 + 190, 20, 200); //jacket right
//     rect(width/2 + 15, height/2 + 190, 20, 200); //jacket left
//     quad(375, 500, 375, 550, 350, 690, 300, 690); //right arm
//     quad(425, 500, 425, 550, 450, 690, 500, 690); //left arm
//     fill(255);
//     ellipse(width/2 + 15, height/2 + 100, 7);
//     ellipse(width/2 + 15, height/2 + 140, 7);
//     ellipse(width/2 + 15, height/2 + 180, 7);
//     ellipse(width/2 + 15, height/2 + 220, 7);
//     ellipse(width/2 + 15, height/2 + 260, 7);
//     fill(0);
//     quad(402, 269, 382, 330, 282, 367, 310, 314);
//     quad(333, 274, 391, 339, 507, 360, 494, 305);
//     quad(430, 276, 493, 321, 506, 400, 477, 378);
//     quad(314, 289, 289, 401, 321, 378, 327, 317);
//     stroke(0);
//     fill(172, 115, 57);
//     arc(width/2 - 30, height/2 - 25, 50, 50, 0, PI); //right eye
//     arc(width/2 + 30, height/2 - 25, 50, 50, 0, PI); //left eye
//     fill(0);
//     ellipse(width/2 + 10, height/2 + 50, 20, 20); //mouth
//
//     //props
//     stroke(0);
//     fill(77, 38, 0);
//     rect(400, 745, 800, 110); //table
//     fill(0, 128, 43);
//     rect(120, 675, 150, 30); //book_green
//     fill(0, 92, 230);
//     rect(140, 645, 150, 30); //book_blue
//     fill(230, 0, 0);
//     rect(100, 615, 150, 30); //book_red
//     fill(71, 0, 179);
//     rect(150, 585, 150, 30); //book_purple
//     fill(204, 204, 0);
//     rect(110, 555, 150, 30); //book_yellow
//
//     fill(0);
//     textSize(26);
//     text("This is Kai. During the day, Kai goes to a prestigious magic academy, only to endlessly daydream or stare out the window. Kai is a natural learner, which helps him get through school. But after school...", width/2, height/2 - 100, 500, 500);
//   }

// fill(0);
// textSize(14);
// text(mouseX + " , " + mouseY, 50, 20); //mouse coordinates
// textSize(18);
// text("Total hours: 5 hours", 720, 20); //time-log

//}

//  function touchStarted() {
//   getAudioContext().resume();
// }
