// Note - you must change line 19 to your own APPID to get this to work!

var weather;
var weatherID = 0; // returned in the JSON weather element
var myState = 0;
var x = 0;
var x2 = 0;
var x3 = 0;
var windspeed = 0;
var temp = 0;
var desc = 0;
var feelslike = 0;
var font1;
var city_background;
var cloud1, cloud2, cloud3;

function setup() {
  createCanvas(600, 600);
  font1 = loadFont("assets/AvenirLTStd-Roman.otf");
  city_background = loadImage("assets/city_background.png");
  cloud1 = loadImage("assets/cloud1.png");
  cloud2 = loadImage("assets/cloud2.png");
  cloud3 = loadImage("assets/cloud3.png");

  imageMode(CENTER);

  // HERE is the call to get the weather.

  var myCityString = 'https://api.openweathermap.org/data/2.5/weather?q=Bolingbrook,IL,US&units=imperial&';

  //You can also use "zipcode" - var myJSONString = 'https://api.openweathermap.org/data/2.5/weather?zip=61820,us&units=imperial&';

  var myIDString = 'appid=011d4707272580cf387ebfae9f4bc1c7'; // USE YOUR ID HERE, take out the x's!!!

  var myBigString = myCityString + myIDString;

  loadJSON(myBigString, gotData); // that gotData function happens when JSON comes back.

}


function gotData(data) {

  weather = data;
  console.log(weather); // for debugging purposes, print out the JSON data when we get it.
  windspeed = weather.wind.speed;
  temp = weather.main.temp;
  desc = weather.weather[0].description;
  feelslike = weather.main.feels_like;

  sunrise = new Date(weather.sys.sunrise*1000).toLocaleTimeString("en-US", { hour: 'numeric', minute: '2-digit'});
  sunset = new Date(weather.sys.sunset*1000).toLocaleTimeString("en-US", { hour: 'numeric', minute: '2-digit'});

  // var secRise = weather.sys.sunrise;
  // date = new Date(secRise * 1000);
  // sunrise = date.toLocaleTimeString();

  // var secSet = weather.sys.sunset;
  // date = new Date(secSet * 1000);
  // sunset = date.toLocaleTimeString();



}


function draw() {
  switch (myState) {
    case 0:
      if (weather) {
        myState = 1;
      }
      break;

    case 1:
      background("lightblue");
      image(city_background, width/2, height/2 + 135, 700, 700);
      fill('black');
      textFont(font1);
      textSize(18);
      text("What is the weather in " + weather.name + "?", 20, 20);
      text("Description: " + desc, 20, 40);
      text("Windspeed: " + windspeed, 20, 60);
      text("Temperature: " + temp + "F", 20, 80);
      text("Feels like: " + feelslike + "F", 20, 100);
      text("Sunrise: " + sunrise, 20, 120);
      text("Sunset: " + sunset, 20, 140);


      // sun
      fill("yellow");
      noStroke();
      ellipse(width/2 + 200, height/2 - 200, 100, 100);

      // clouds
      image(cloud1, x, 100, 200, 100);
      image(cloud2, x2, 200, 200, 100);
      image(cloud3, x3, 300, 200, 100);

      // move the clouds' x position
      x = x + windspeed / 5;
      if (x > width) x = 0;
      x2 = x2 + windspeed / 4;
      if (x2 > width) x2 = 0;
      x3 = x3 + windspeed / 4.5;
      if (x3 > width) x3 = 0;

      // thermometer
      fill("red");

      var t = map(temp, -10, 100, 10, height - 10);
      rect(width - 50, height - 10, 30, -t);

      break;

  }
}
