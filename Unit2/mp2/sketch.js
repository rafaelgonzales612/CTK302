let state = -1;
let timer = 0;
let mic;
let vol;
let x1 = 0;
let x2 = 0;
let x3 = 0;
let x4 = 0;
let x5 = 0;
let x6 = 0;
let velocity = 0;
let cloud1, cloud2, cloud3, cloud4, cloud5;
let bird1, bird2, bird3;
let tree;
let worm;
let notes;
let exclaim;
let song1;

function preload() {
  song1 = loadSound("assets/music.mp3");
}

function setup() {
  createCanvas(700, 700);

  song1.loop();

  mic = new p5.AudioIn();
  mic.start();

  textAlign(CENTER);
  rectMode(CENTER);
  ellipseMode(CENTER);
  imageMode(CENTER);

  loadImages();
}

function draw() {

  vol = (mic.getLevel()).toFixed(2);

  switch (state) {
    case -1:
      background(102, 194, 255);
      cloudSpawn();
      textSize(48);
      fill(0);
      text("Click to begin the story!", width / 2, height / 2);
      break;

    case 0:
      background(102, 194, 255);
      cloudSpawn();
      image(bird1, width / 2, height / 2, 250, 200);

      timer++
      if (timer > 4 * 60) {
        state = 1;
      }

      textSize(24);
      text("Mr. Bird is quite\nhungry today.", width / 2, height / 2 - 200);
      text("Wait for timer...", 615, 690);
      break;

    case 1:
      background(102, 194, 255);
      cloudSpawn();
      image(bird2, width / 2, height / 2, 250, 200);

      textSize(24);
      text("Help Mr. Bird\nfind some food down below!", width / 2, height / 2 - 200);
      text("Click to continue...", 595, 690);
      break;

    case 2:
      background(102, 194, 255);

      image(bird1, width / 2 - 200, height / 2 - 200, 125, 100);

      lotsOfTrees();
      noStroke();
      fill(102, 51, 0);
      rect(width / 2, 649, 700, 100);

      image(worm, x6 - 200, 650, 100, 50);
      x6 -= 2.5;
      if (x6 < -50) {
        x6 = 1500;
      }

      if (vol > .15) {
        state = 3;
        timer = 0;
      }

      textSize(24);
      fill(0);
      text("When you find food,\ncall out to Mr. Bird!", width / 2, height / 2 - 200);
      break;

    case 3:
      background(102, 194, 255);
      cloudSpawn();
      image(exclaim, width / 2 + 100, height / 2 - 125, 10, 50);
      image(bird1, width / 2, height / 2, 250, 200);

      timer++
      if (timer > 4 * 60) {
        state = 4;
        timer = 0;
      }

      textSize(24);
      text("Mr. Bird has noticed the food!", width / 2, height / 2 - 200);
      text("Wait for timer...", 615, 690);
      break;

    case 4:
      background(102, 194, 255);
      cloudSpawn();
      image(notes, width / 2 + 100, height / 2 - 125, 50, 50);
      image(bird3, width / 2, height / 2, 250, 200);
      image(worm, 464, 290, 25, 20);

      textSize(24);
      text("Mr. Bird is thankful\nyou found him food!", width / 2, height / 2 - 200);
      text("The End!", 640, 690);
      break;
  }

  textSize(12);
  text(mouseX + ", " + mouseY, 30, 20);
}

function mouseReleased() {
  //state++
  if (state == -1) {
    state = 0;
  }

  if (state == 1) {
    state = 2;
  }

  if (state == 4) {
    state = -1;
  }
}

function cloudSpawn() {
  image(cloud1, x1, height / 2 - 270, 125, 125)
  x1 -= 3;
  if (x1 < -100) {
    x1 = 800;
  }

  image(cloud2, x2, height / 2 - 135, 125, 125);
  x2 -= 6;
  if (x2 < -100) {
    x2 = 800;
  }

  image(cloud3, x3, height / 2, 125, 125);
  x3 -= 4.5;
  if (x3 < -100) {
    x3 = 800;
  }

  image(cloud4, x4, height / 2 + 135, 125, 125);
  x4 -= 8;
  if (x4 < -100) {
    x4 = 800;
  }

  image(cloud5, x5, height / 2 + 270, 125, 125);
  x5 -= 7;
  if (x5 < -100) {
    x5 = 800;
  }
}

function lotsOfTrees() {
  //image(tree, width / 2 - 300, 525, 150, 150);
  // image(tree, width / 2 - 200, 525, 150, 150);
  // image(tree, width / 2 - 100, 525, 150, 150);
  // image(tree, width / 2, 525, 150, 150);
  // image(tree, width / 2 + 100, 525, 150, 150);
  // image(tree, width / 2 + 200, 525, 150, 150);
  //image(tree, width / 2 + 300, 525, 150, 150);

  image(tree, x1 - 200, 450, 300, 300);
  x1 -= 2;
  if (x1 < -100) {
    x1 = 1100;
  }

  image(tree, x2 - 100, 450, 300, 300);
  x2 -= 3.6;
  if (x2 < -100) {
    x2 = 1100;
  }

  image(tree, x3, 450, 300, 300);
  x3 -= 2.8;
  if (x3 < -200) {
    x3 = 1100;
  }

  image(tree, x4 + 100, 450, 300, 300);
  x4 -= 3.2;
  if (x4 < -250) {
    x4 = 900;
  }

  image(tree, x5 + 200, 450, 300, 300);
  x5 -= 2.4;
  if (x5 < -350) {
    x5 = 800;
  }
}

function loadImages() {
  cloud1 = loadImage("assets/cloud1.png");
  cloud2 = loadImage("assets/cloud2.png");
  cloud3 = loadImage("assets/cloud3.png");
  cloud4 = loadImage("assets/cloud4.png");
  cloud5 = loadImage("assets/cloud5.png");
  bird1 = loadImage("assets/bird.png");
  bird2 = loadImage("assets/bird_sad.png");
  bird3 = loadImage("assets/bird_happy.png");
  tree = loadImage("assets/tree.png");
  worm = loadImage("assets/worm.png");
  notes = loadImage("assets/music_notes.png");
  exclaim = loadImage("assets/exclaim.png");
}

function touchStarted() {
  getAudioContext.resume();
}
