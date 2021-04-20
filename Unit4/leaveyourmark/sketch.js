var bubbles = [];
var fire;
var water;
var earth;
var air;
var avengerslogo;

function setup() {


  // Tabletop stuff, for getting google spreadsheet data in.
  //let url = '1GtE3eoYVWBv9zMPoyettXzDCEv6qdNGKio_hgEh5duM'; // this is KEY of the URL from the sheet
  // let url = '1-bKu2MweC4duGRTLNsv6kbvKors5x868IS8UeUTtnSk'; // this is KEY of the URL from the sheet
  let url = '1ZbfKqOaJuVfgBeo2z_qvbTsQ6-Fe7vv-Q0cmeKz9Yr4'; // this is KEY of the URL from the sheet
  // https://docs.google.com/spreadsheets/d/1-bKu2MweC4duGRTLNsv6kbvKors5x868IS8UeUTtnSk/edit?usp=sharing
  let settings = {
    key: url, // The url of the published google sheet
    callback: gotData, // A callback for when the data comes in
    simpleSheet: true // This makes things simpler for just a single worksheet of rows
  };

  Tabletop.init(settings); // Grab the data from the spreadsheet!
  // End Tabletop initialization stuff


  // Regular setup code we usually have
  createCanvas(windowWidth, windowHeight);
  textAlign(CENTER);
  ellipseMode(CENTER);
  rectMode(CENTER);
  imageMode(CENTER);

  // fire = loadImage('assets/firemagic.png');
  // water = loadImage('assets/watermagic.png');
  // earth = loadImage('assets/earthmagic.png');
  // air = loadImage('assets/airmagic.png');
  // avengerslogo = loadImage('assets/avengerslogo.png');



}

// The data comes back as an array of objects
// Each object contains all the data for one row of the sheet
function gotData(data) {

  console.log(data); // Print the data in the console

  // iterate through the array of data and create an object and push it on an array called bubbles
  for (let i = 0; i < data.length; i++) {
    bubbles.push(new Bubble(data[i].Name, data[i].Major, data[i].Quote, data[i].Hint)); // THESE Name and Shape need to match your column names in your spreadsheet!
  }

}


function draw() {
  background('black');
  // image(avengerslogo, width/2, height/2, 900, 900);

  // // iterate through the bubbles and display the objects!
  for (let i = 0; i < bubbles.length; i++) {
    bubbles[i].display();
    bubbles[i].move();
  }

}


// my Bubble class
class Bubble {

  constructor(myName, myMajor, myQuote, myHint) {
    this.name = myName;
    this.major = myMajor;
    this.quote = myQuote;
    this.hint = myHint;
    this.pos = createVector(random(width), random(height));
    this.vel = createVector(random(-5, 5), random(-5, 5));
  }


  display() {
    // if (this.shape == "Square") {
    //   rect(this.pos.x, this.pos.y, 50, 50);
    // } else {
    //   ellipse(this.pos.x, this.pos.y, 50, 50);
    // }

    // if(this.element == 'Fire') image(fire, this.pos.x, this.pos.y, 100, 100);
    // if(this.element == 'Water') image(water, this.pos.x, this.pos.y, 100, 100);
    // if(this.element == 'Earth') image(earth, this.pos.x, this.pos.y, 100, 100);
    // if(this.element == 'Air') image(air, this.pos.x, this.pos.y, 100, 100);

    //rect(this.pos.x, this.pos.y, 100, 100);
    fill('white');
    textSize(20);
    text(this.name, this.pos.x, this.pos.y - 10);
    text(this.major, this.pos.x, this.pos.y);
    text(this.quote, this.pos.x, this.pos.y + 10);
    text(this.hint, this.pos.x, this.pos.y + 20);


  }

  move() {
    this.pos.add(this.vel);
    if (this.pos.x > width) this.pos.x = 0;
    if (this.pos.x < 0) this.pos.x = width;
    if (this.pos.y > height) this.pos.y = 0;
    if (this.pos.y < 0) this.pos.y = height;
  }

}
