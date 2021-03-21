let fire = [];
let dragon;
let fireball;

function setup() {
  createCanvas(800, 500);
  imageMode(CENTER);
  textAlign(CENTER);

  dragon = loadImage("assets/dragon.jpg");
  fireball = loadImage("assets/fire.png");

  // Spawn an object
  // for (let i = 0; i < 20; i++) {
  //   cars.push(new Car());
  // }
}

function draw() {
  background(100);
  image(dragon, width / 2, height / 2, 800, 500);

  fire.push(new Fire());

  for (let i = 0; i < fire.length; i++) {
    fire[i].display();
    fire[i].move();
    if (fire[i].a <= 0) {
      fire.splice(i, 1);
    }
  }

  noStroke();

  // fill("white");
  // textSize(14);
  // text(mouseX + " , " + mouseY, 50, 20); //mouse coordinates
}



// Car class
class Fire {

  // constructor and attributes
  constructor() {
    this.pos = createVector(365, 310);
    this.vel = createVector(random(-2, 2), random(1, 5));
    this.r = 0; //random(255);
    this.g = 0; //random(255);
    this.b = 0; //random(255);
    this.a = random(200, 255);
    //this.s = random(5, 20);
  }

  // methods

  display() {
    fill(this.r, this.g, this.b, this.a);
    image(fireball, this.pos.x, this.pos.y, 50, 50);
  }

  move() {
    this.pos.add(this.vel);
    this.a = this.a - 5;
    // if (this.pos.x > width) this.pos.x = 0;
    // if (this.pos.x < 0) this.pos.x = width;
    // if (this.pos.y > height) this.pos.y = 0;
    // if (this.pos.y < 0) this.pos.y = height;
  }

}
