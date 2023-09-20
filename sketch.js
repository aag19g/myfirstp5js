let x = 200;
let speed = 4;
let diameter = 40;
let stop
let start
let shouldmove = true

function setup() {
  createCanvas(400, 400);
  noStroke()
  // noLoop()
}

// function mousePressed(){
// stop = noLoop()
// } 

function draw() {
  background("#85BDBF");

  fill("#C2FCF7");
  ellipse(x, height/2, diameter);
    if (x >= width - diameter/2 || x<= diameter/2) {
      speed = speed * -1;
    }
    if(shouldmove){
    x = x + speed;
    }
    ellipse(x, height/2, 30)
  }

    function mouseClicked(){
      shouldmove = ! shouldmove;
    }

  // fill("#C2FCF7");
  // rect(x, height/2, diameter);
  //   if (x >= width - diameter/2 || x<= diameter/2) {
  //     speed = speed * -2;
  //   }
  //   x = x + speed;}
    
// function mousePressed(){
// start = loop()
// }