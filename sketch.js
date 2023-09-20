let ballX = 0;
let rectX = 0;
let ballSpeed = 15;
let moving = true
let gray = 124

function setup() {
  createCanvas(400, 400);
  noStroke()
}

function draw() {
  background("#85BDBF");

    if (ballX > width || ballX < 0) {
      ballSpeed = ballSpeed * -1;
    }
    if(moving){
    ballX = ballX + ballSpeed;
    }
    fill(gray);
    ellipse(ballX, height/2, 30)

    fill(255);
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