const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
var engine;
var world;
var ground;
var ball;
function setup() {
  createCanvas(400,400);

engine=Engine.create();
world=engine.world;
var ground_options={
  isStatic:true
}
ground=Bodies.rectangle(200,391,50,50,ground_options);
console.log(ground);
World.add(world,ground);0
var ball_options={
  restitution:0.8
}
ball=Bodies.circle(200,290,15,ball_options);
World.add(world,ball);
}

function draw() {
  background("black");  
  drawSprites();
  Engine.update(engine);
 rectMode(CENTER)
  rect (ground.position.x,ground.position.y, 100,40);
  ellipseMode(RADIUS)
  ellipse(ball.position.x,ball.position.y,15);
}