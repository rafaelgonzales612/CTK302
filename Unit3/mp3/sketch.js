let fairies = []; // Array
let fairyAnim = []; //Animation
let darkFairies = [];
let darkFairyAnim = [];
let i = 0;
let naviC, naviR, naviL;
let state = 0;
let timer = 0;
let maxFairies = 5;
let maxDarkFairies = 5;
let maxTimer = 60;
let mp3_background;
let f1, f2;

function setup() {
  //createCanvas(windowWidth, windowHeight);
  createCanvas(700, 700);

  imageMode(CENTER);
  textAlign(CENTER);

  f1 = loadFont("assets/immortal.ttf");

  //player
  naviC = loadImage("assets/naviC.png");
  naviR = loadImage("assets/naviR.png");
  naviL = loadImage("assets/naviL.png");

  //pink fairy animation
  fairyAnim[0] = loadImage("assets/fairyT.png");
  fairyAnim[1] = loadImage("assets/fairyM.png");
  fairyAnim[2] = loadImage("assets/fairyB.png");
  fairyAnim[3] = loadImage("assets/fairyM.png");

  //black fairy animation
  darkFairyAnim[0] = loadImage("assets/darkFairyT.png");
  darkFairyAnim[1] = loadImage("assets/darkFairyM.png");
  darkFairyAnim[2] = loadImage("assets/darkFairyB.png");
  darkFairyAnim[3] = loadImage("assets/darkFairyM.png");

  mp3_background = loadImage("assets/mp3_background.png");

  for (let i = 0; i < maxFairies; i++) {
    fairies.push(new Fairy());
  }

  for (let i = 0; i < maxDarkFairies; i++) {
    darkFairies.push(new DarkFairy());
  }

  naviPos = createVector(width / 2, height/2);

  // ALL load commands here, will need Atom-live-server
}

function draw() {

  switch (state) {

    case 0:
      image(mp3_background, width/2, height/2, 700, 700);
      fill(153, 255, 153);
      textFont(f1);
      textSize(32);
      text("Navi the Protector", width / 2, 100);
      textSize(24);
      text("Save the fairies from the shadow fairies!\nAvoid the shadow fairies or they'll consume you!", width / 2, 250);
      textSize(48);
      text("Click to begin!", width / 2, 650);
      break;

    case 1:
      image(mp3_background, width/2, height/2, 700, 700);
      game();
      break;

    case 2: // win state
      image(mp3_background, width/2, height/2, 700, 700);
      textSize(28);
      text("You've saved the fairies!\nClick to go save more fairies!", width / 2, height / 2);
      break;

    case 3: // lose state
      image(mp3_background, width/2, height/2, 700, 700);
      textSize(28);
      text("Oh no! The shadow fairies have consumed you!\nClick to respawn and try again.", width / 2, height / 2);
      break;

  }

}

function mouseReleased() {
  switch (state) {
    case 0:
      state = 1;
      break;

    case 2: // if player wins, this state occurs
      resetGame();
      state = 0;
      break;

    case 3: // if player loses, this state occurs
      resetGame();
      state = 0;
      break;
  }
}

function resetGame() {
  timer = 0;
  fairies = [];
  for (let i = 0; i < maxFairies; i++) {
    fairies.push(new Fairy());
  }

  darkFairies = [];
  for (let i = 0; i < maxDarkFairies; i++) {
    darkFairies.push(new DarkFairy);
  }

  image(naviC, naviPos.x, naviPos.y, 100, 50);
  naviPos = createVector(width / 2, height/2);
}

function game() {

  // do some actions on the object
  for (let i = 0; i < fairies.length; i++) {
    fairies[i].display();
    fairies[i].move();
    if (fairies[i].pos.dist(naviPos) < 50) {
      fairies.splice(i, 1);
    }
  }

  if (fairies.length == 0) {
    state = 2;
  }

  for (let i = 0; i < darkFairies.length; i++) {
    darkFairies[i].display();
    darkFairies[i].move();

    if (darkFairies[i].pos.dist(naviPos) < 50) {
      state = 3;
    }
  }

  checkForKeys();

  //put player here
  image(naviC, naviPos.x, naviPos.y, 100, 50);
}

function keyPressed() {
  if (keyIsDown(LEFT_ARROW)) naviC = naviL;
  if (keyIsDown(RIGHT_ARROW)) naviC = naviR;
}

function checkForKeys() {
  if (keyIsDown(LEFT_ARROW)) naviPos.x -= 5;
  if (keyIsDown(RIGHT_ARROW)) naviPos.x += 5;
  if (keyIsDown(UP_ARROW)) naviPos.y -= 5;
  if (keyIsDown(DOWN_ARROW)) naviPos.y += 5;

  if(naviPos.x > width) naviPos.x = 0;
  if(naviPos.x < 0) naviPos.x = width;
  if(naviPos.y > height) naviPos.y = 0;
  if(naviPos.y < 0) naviPos.y = height;
}

// class
class Fairy {

  // constructor and attributes
  constructor() {
    this.pos = createVector(100, 100); //x + y coordinates
    this.vel = createVector(random(-5, 5), random(-5, 5));
    //this.col = color(random(255), random(255), random(255), random(255));
  }

  // methods

  display() {

    image(fairyAnim[i], this.pos.x, this.pos.y, 60, 35);

    // time in which animation cycles through in its array
    timer++;
    if (timer > 0.3 * 60) {
      timer = 0;
      i++;
      if (i > 3) {
        i = 0;
      }
    }
  }

  move() {
    this.pos.add(this.vel);
    if (this.pos.x > width) this.pos.x = 0;
    if (this.pos.x < 0) this.pos.x = width;
    if (this.pos.y > height) this.pos.y = 0;
    if (this.pos.y < 0) this.pos.y = height;
  }

}

class DarkFairy {

  // constructor and attributes
  constructor() {
    this.pos = createVector(600, 600); //x + y coordinates
    this.vel = createVector(random(-5, 5), random(-5, 5));
    this.col = color(random(255), random(255), random(255), random(255));
    this.width = random(12, 72);
  }

  // methods

  display() {

    image(darkFairyAnim[i], this.pos.x, this.pos.y, 60, 35);

    // time in which animation cycles through in its array
    timer++;
    if (timer > 0.3 * 60) {
      timer = 0;
      i++;
      if (i > 3) {
        i = 0;
      }
    }
  }

  move() {
    this.pos.add(this.vel);
    if (this.pos.x > width) this.pos.x = 0;
    if (this.pos.x < 0) this.pos.x = width;
    if (this.pos.y > height) this.pos.y = 0;
    if (this.pos.y < 0) this.pos.y = height;
  }

}
