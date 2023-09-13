function setup() {
  createCanvas(400, 400);
  noLoop()
  noStroke()
}

function draw() {
  background("#FF5733");

  fill("black")
  push()
  rect(0, 0, 200, 300)
  pop()

fill("#FFC300")
rect(0, 0, 125, 230)

fill("black")
push()
translate(width/2, height/2)
rect(0, 0, 200, 400)
pop()

fill("#FF5733")
push()
translate(width/2, height/2)
rect(40, 0, 50, 30)
pop()

fill("#C70039")
push()
translate(width/2, height/2)
rect(40, 40, 50, 50)
pop()

fill("#900C3F")
push()
translate(width/2, height/2)
rect(40, 100, 50, 50)
pop()

fill("#581845")
push()
translate(width/2, height/2)
rect(40, 160, 50, 50)
pop()

}
