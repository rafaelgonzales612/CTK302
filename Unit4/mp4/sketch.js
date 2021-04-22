// Spring 2019 Curtis Stieger's group worked on this
//Spring 2021 Sean, Lauren, Rafael's group worked on this

var fence;
var locationData;
var num;
var distance;
var places = [];
var img;

var num;
var distance;
var maxTimer = 5;
var capture
var options = {
  video: {
     facingMode: "environment"
   }
 };
var locationDate;
var pos;

function preload() {
  locationData = getCurrentPosition();
  img = loadImage('assets/reggie.png');
}

function setup() {
  //fence = new geoFenceCircle(40.506229, -88.990537, 0.02); //sets geofence location to cva room 17
  createCanvas(windowWidth, windowHeight);
  num = 0;
  intervalCurrentPosition(positionPing, 5000);
  places.push(new Place(40.5078907, -88.9905951, "Center of Performing Arts", .02, img));
  places.push(new Place(40.5087355, -88.9892591, "Stevenson Hall", .02, img));
  places.push(new Place(40.511276, -88.9911698, "Milner", .02, img));
  places.push(new Place(40.5094345, -88.9902101, "Hovey Hall", .02, img));
  places.push(new Place(40.510676, -88.9914435, "Schroeder Hall", .02, img));
  places.push(new Place(40.5075395, -88.9917072, "McCormick", .02, img));
  places.push(new Place(40.507569, -88.9917495, "State Farm Courtyard", .02, img));
  places.push(new Place(40.5075849, -88.9917145, "State Farm Entrance", .02, img));
  places.push(new Place(40.50917235949953, -88.99177097641105, "Cook Hall", .02, img));

}

function draw() {

  positionPing(position);

  if (position.latitude > 39 && position.longitude < -87) {
    capture = createCapture(options);
    capture.hide();
  } else {
    background('red');
    fill('black');
    textSize(24);
    text('camera not working', width/2, height/2);
  }

}

function positionPing(position) {
  textSize(24);
  num++;
  background(255);
  text("lat: " + position.latitude.toFixed(8), 10, 340);
  text("long: " + position.longitude.toFixed(8), 10, 390);
  text("number of updates: " + num, 10, 440);
  distance = calcGeoDistance(locationData.latitude, locationData.longitude, position.latitude, position.longitude, 'mi');

  for (var i = 0; i < places.length; i++) {
    if (places[i].fence.insideFence === true) {
      places[i].display();
      break; //should break out of the for loop?
    }
  }

}

function Place(lat, long, desc, radius) {
  this.lat = lat;
  this.long = long;
  this.fence = false;
  this.desc = desc;
  this.radius = radius;
  this.fence = new geoFenceCircle(this.lat, this.long, this.radius); //sets geofence location to coordinates

  this.display = function() {
    image(reggieImg, 10, 10);
    textSize(20);
    text("You are at " + this.desc, 10, 240);
  }
}
