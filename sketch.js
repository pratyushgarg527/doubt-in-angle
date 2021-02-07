const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint
const Body = Matter.Body;

var engine, world;
var box1;

function preload(){

  backgroundImg = loadImage("1.jpg");
  insaan = loadImage("2.png")

}

function setup() {
  var canvas = createCanvas(1000,600);
  engine = Engine.create();
  world = engine.world;

  football = new Ball(220,0,39)
  ground = new Ground(500,540,1000,10)
  box1 = new Bucket1(200,200,20,100,PI/6)
  human = createSprite(20,410,10,10)
  human.addImage(insaan)
  human.scale = 0.6

  Engine.run(engine);
}

function draw() {
  background(backgroundImg); 
  Engine.update(engine); 

  football.display();
  ground.display();
  box1.display();
  if(keyDown("right")){

    human.x = human.x + 5

  }
  if(keyDown("left")){

    human.x = human.x - 5

  }
  

  udo()

  drawSprites();
}

function udo(){

  if(human.x === 60){

    Body.applyForce(football.body,football.body.position,{x:150,y:-160});

  }

}
