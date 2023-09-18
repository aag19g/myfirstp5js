let x = 200;
let speed = 4;
let diameter = 40;

function setup() {
  createCanvas(400, 400);
  noStroke()
}

function draw() {
  background("bgcolor");

  // push()
  // translate(40, 40);
  // rotate(45);
  // rect(0, 0, 20, 20);
  // pop()

// let color = map(mouseY, 0, height, 0, 255);
  
  // fill(random(255), random(255), random(255));
  // rect(mouseX, mouseY, 40, 40)

function mouseClicked(){
if (bgcolor == "orange") {
  bgcolor = "black";
  } else{
  bgcolor = "orange";
  }
  console.log("clicked!")
}



}