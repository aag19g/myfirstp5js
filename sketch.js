function setup() {
  createCanvas(400, 400);
  noLoop()
  strokeWeight(10)
}

function draw() {
  background("#FF5733");
  
  fill("white")
  push()
  rect(4, 5, 196, 300)
  pop()

fill("#FFC300")
rect(5, 5, 125, 230)

fill("white")
push()
translate(width/2, height/2)
rect(0, 0, 195, 196)
pop()

fill("#FF5733")
push()
strokeWeight(5)
translate(width/2, height/2)
rect(40, 2, 50, 30)
pop()

fill("#C70039")
push()
strokeWeight(5)
translate(width/2, height/2)
rect(40, 40, 50, 50)
pop()

fill("#900C3F")
push()
strokeWeight(5)
translate(width/2, height/2)
rect(40, 100, 50, 50)
pop()

fill("#581845")
push()
strokeWeight(5)
translate(width/2, height/2)
rect(40, 160, 50,24)
pop()
}
