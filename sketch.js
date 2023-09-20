let x = 200;
let speed = 4;
let diameter = 40;
let stop
let start

function setup() {
  createCanvas(400, 400);
  noStroke()
}

function mousePressed(){
stop = noLoop()
}

function draw() {
  background("#85BDBF");

  fill("#C2FCF7");
  ellipse(x, height/2, diameter);
  //if (x <= width - diameter/2) {
    if (x >= width - diameter/2 || x<= diameter/2) {
      speed = speed * -1;
    }
    x = x + speed;

}