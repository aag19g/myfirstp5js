let x = 0;
let speed = .2;

function setup() {
  createCanvas(400, 400);
  noStroke()
}

function draw() {
  background("#85BDBF");

  fill("#C2FCF7")
  ellipse(x, height/2, 40);
  // x+= speed;
  x = x + speed;

}
