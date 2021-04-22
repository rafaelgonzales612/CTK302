var capture;
var options = {
  video: {
    facingMode: "environment"
  }
};

function setup() {
  createCanvas(500, 500);
  capture = createCapture(VIDEO);
  capture.hide();
}

function draw() {
  image(capture, 0, 0, width, width * capture.height / capture.width);
  filter(INVERT);
}
