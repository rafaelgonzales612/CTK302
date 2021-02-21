let state = 0;

function setup() {
  createCanvas(400, 400);
  textAlign(CENTER)
  textSize(24);
}

function draw() {
  switch (state) {

    case 0:
      background(100);
      text("state: 0", width / 2, height / 2);
      patternRed();
      break;

    case 1:
      background(100);
      text("state: 1", width / 2, height / 2);
      patternGreen();
      break;

    case 2:
      background(100);
      text("state: 2", width / 2, height / 2);
      patternBlue();
      break;

    case 3:
      background(100);
      text("state: 3", width / 2, height / 2);
      patternYellow();
      break;

    case 4:
      background(100);
      text("state: 4", width / 2, height / 2);
      patternPurple();
      break;



  }
}

function mouseReleased() {
  state = state + 1;
  if (state > 4) {
    state = 0;
  }
}

function patternRed() {
  for (let j = 0; j <= height; j++) {
    for (let i = 0; i <= width; i++) {
      fill(random(255), 0, 0);
      rect(i * 40, j * 40, 50, 10);
    }
  }
}

function patternGreen() {
  for (let j = 0; j <= height; j++) {
    for (let i = 0; i <= width; i++) {
      fill(0, random(255), 0);
      ellipse(i * 40, j * 40, 10, 10);
    }
  }
}

function patternBlue() {
  for (let j = 0; j <= height; j++) {
    for (let i = 0; i <= width; i++) {
      fill(0, 0, random(255));
      rect(i * 40, j * 40, 20, 20);
    }
  }
}

function patternYellow() {
  for (let j = 0; j <= height; j++) {
    for (let i = 0; i <= width; i++) {
      fill(random(255), random(255), 0);
      ellipse(i * 40, j * 40, 20, 20);
    }
  }
}

function patternPurple() {
  for (let j = 0; j <= height; j++) {
    for (let i = 0; i <= width; i++) {
      fill(random(255), 0, random(255));
      rect(i * 40, j * 40, 10, 50);
    }
  }
}
