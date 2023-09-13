let xPosition

function setup() {
  createCanvas(400, 400);
  xPosition = width/2;
  console.log(xPosition);
  noStroke()

}

function draw() {
  background("#85BDBF");
  fill("#C2FCF7")
  ellipse(xPosition, height/2, 40);
  xPosition = xPosition  + .1

}
