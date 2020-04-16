const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var g;
function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
   g = new Ground(400,380,800,10);
   triangle(65, 200, 95, 150, 125, 200);
   rect(30, 20, 55, 55);
}

function draw() {
  background("black");
  Engine.update(engine);
  triangle(65, 200, 95, 150, 125, 200);
  triangle(293, 198, 350, 198, 320, 150);
  triangle(120,250,200,100,300,250);
  rect(65, 198, 58, 188);
  rect(123,250,200,130);
  rect(293,198,58,188);
  g.display();
  //drawSprites();
}