let cars = []; // Array

function setup() {
  createCanvas(windowWidth, windowHeight);

  for (let i = 0; i < 40; i++) {
    cars.push(new Car());
  }


}

function draw() {
  background(0);

  for (let i = 0; i < cars.length; i++) {
    cars[i].display();
    cars[i].move();
  }

}

// Car class
class Car {

  // constructor and attributes
  constructor() {
    this.pos = createVector(width/2, height/2); //x + y coordinates
    this.vel = createVector(random(-5, 5), random(-5, 5));
    this.col = color(random(255), random(255), random(255), random(255));
    this.width = random(12, 72);
  }

  // methods

  display() {
    fill(this.col);
    //rect(this.pos.x, this.pos.y, this.width, 25);
    textSize(this.width);
    text("DVD", this.pos.x, this.pos.y);
  }

  move() {
    this.pos.add(this.vel);
    if (this.pos.x > width) this.pos.x = 0;
    if (this.pos.x < 0) this.pos.x = width;
    if (this.pos.y > height) this.pos.y = 0;
    if (this.pos.y < 0) this.pos.y = height;
  }

}
