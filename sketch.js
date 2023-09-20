let ballX = 0;
let rectX = 0;
let ballSpeed = 15;
let shouldMove = true

function setup() {
  createCanvas(400, 400);
  noStroke()
}

function draw() {
  background("#85BDBF");

    if (ballX > width || ballX < 0) {
      ballSpeed = ballSpeed * -1;
    }
    if(shouldMove){
    ballX = ballX + ballSpeed;
    }
    ellipse(ballX, height/2, 30)

    rectX = rectX + 1;
    rect(ballX, 100, 30, 30);
  }

    function mouseClicked(){
      shouldMove = ! shouldMove;
    }