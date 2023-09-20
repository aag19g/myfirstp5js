let ballX = 0;
let rectX = 0;
let ballSpeed = 15;
let moving = true
let gray = 124
let transparency = 0

function setup() {
  createCanvas(400, 400);
  noStroke()
}

function draw() {
  if (millis() > 10000) {
    background("blue");
  } else{
  background("#85BDBF")
  }

    if (ballX > width || ballX < 0) {
      ballSpeed = ballSpeed * -1;
    }
    if(moving){
    ballX = ballX + ballSpeed;
    }
    fill(gray);
    ellipse(ballX, height/2, 30)

    if (transparency < 255) {
      transparency++;
    }
    fill(25, 42, 100, transparency);
    rectX = rectX + 1;
    rect(ballX, 100, 30, 30);
  }

    function mouseClicked(){
      if(moving){
        moving = false;
        gray = random(255);
      } else{
        moving = true
      }
      moving = ! moving;
      gray = random(255);
    }