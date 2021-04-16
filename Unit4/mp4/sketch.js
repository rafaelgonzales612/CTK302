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
  // TURN "reggieImg;" into "reggieImg = [];" to create an array of different images
  //reggieImg = loadImage('assets/reggie1.jpg'); //these will change to images of pics in front of the buildings for welcome week
  //reggieImg[2] = loadImage('assets/reggie2.jpg');
}

function setup() {
  //fence = new geoFenceCircle(40.506229, -88.990537, 0.02); //sets geofence location to cva room 17
  createCanvas(windowWidth, windowHeight);
  num = 0;
  intervalCurrentPosition(positionPing, 5000);
  //places.push(new Place(40.47859881213726, -88.96815846900026, "Rose's House", .02, reggieImg)); // new Place object, for CVA room 17
  //places.push(new Place(40.50622797365503, -88.99051350503431, "CVA 17", .02, reggieImg)); // new Place object, for CVA room 17
  //places.push(new Place(40.510824736433904, -88.99134151266699, "ISU College Bridge", .02, reggieImg)); // new Place object, for ISU bridge over College Ave
  //places.push(new Place(40.50863221414712, -88.99077591254148, "Old Union", .02, reggieImg)); // new Place object, for ISU bridge over College Ave
  //places.push(new Place(40.50840289459472, -88.9909118880512, "Williams Hall", .02, reggieImg)); // new Place object, for ISU bridge over College Ave
  //places.push(new Place(40.50844449497366, -88.9911676488728, "Cent 4 Perf Arts", .02), reggieImg); // new Place object, for ISU bridge over College Ave
  //places.push(new Place(40.50750741811689, -88.99029850463533, "CVA Circle", .02, reggieImg)); // new Place object, for ISU bridge over College Ave
  //places.push(new Place(40.50864821960959, -88.99120123764614, "Fell Hall", .02, reggieImg)); // new Place object, for ISU bridge over College Ave
  //places.push(new Place(40.50896516728555, -88.99212919431163, "DeGarmo Hall Solar", .02, reggieImg)); // new Place object, for ISU bridge over College Ave
  //places.push(new Place(40.50947612369081, -88.99174125561485, "Edwards Hall", .02, reggieImg)); // new Place object, for ISU bridge over College Ave
  //places.push(new Place(40.51014656358694, -88.9912748009074, "Felmley Hall", .02, reggieImg)); // new Place object, for ISU bridge over College Ave
  //places.push(new Place(40.50942119788225, -88.99076697407767, "Moulton Hall", .02, reggieImg)); // new Place object, for ISU bridge over College Ave
  //places.push(new Place(40.508730456808415, -88.98572041960726, "University Galleries", .02, reggieImg)); // new Place object, for ISU bridge over College Ave
  //places.push(new Place(40.511676506705506, -88.9938474159579, "Student Services Building", .02, reggieImg)); // new Place object, for ISU bridge over College Ave
  //places.push(new Place(40.51039740494815, -88.9996815241351, "Nelson Smith", .02, reggieImg)); // new Place object, for ISU bridge over College Ave
  //places.push(new Place(40.512969573012896, -88.99488587696477, "Hancock Stadium", .02, reggieImg)); // new Place object, for ISU bridge over College Ave
  //places.push(new Place(40.509699669963155, -88.99664232253424, "Turner Hall", .02, reggieImg)); // new Place object, for ISU bridge over College Ave
  //places.push(new Place(40.512242304908746, -88.99975734818341, "Tri Towers (Haynie)", .02, reggieImg)); // new Place object, for ISU bridge over College Ave
  //places.push(new Place(40.50946288329222, -88.98459824742137, "Uptown Circle", .02, reggieImg)); // new Place object, for ISU bridge over College Ave
  //places.push(new Place(40.47137301266825, -88.94350239220492, "Check Location", .02, reggieImg)); // new Place object, for ISU bridge over College Ave
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

  // for (var i = 0, i < places.length, i++) {
  //   print(places[i].fence.insideFence);
  // }

  positionPing(position);

  if (position.latitude > 39 && position.longitude < -87) {
    capture = createCapture(options);
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
      //text(places[i].desc + ' check1 ' + places[i].fence.insideFence, 10, 240 + (i * 28));
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
