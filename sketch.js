function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  circle(ball.x,ball.y,ball.radius )
  fill (ball.color[0])
  ball.xV=1
  ball.x=ball.x+ball.xV
}
var ball={
x: 20,
y: 30,
radius: 20,
xV: 0,
yV: 0,
color: ["red", "green", "blue"]
}
