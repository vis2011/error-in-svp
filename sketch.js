var canvas;
var backgroundImage;

function preload() {
  backgroundImage = loadImage("download.png");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(backgroundImage);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
