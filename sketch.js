const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
const Constraint = Matter.Constraint

var engine 
var world 

var ball;


function setup() {
  createCanvas(900,700);
  engine=Engine.create();
  world=engine.world;

  ball=new Ball(200,200,80,80)
  rope1 = new Rope(ball.body,{x:200,y:100});
  box1 = new Box(500,50);
  box2 = new Box(500,50);
  box3 = new Box(500,50);
  box4 = new Box(500,50);
  box5 = new Box(500,50);
  box6 = new Box(500,50);
  box7 = new Box(500,50);
  box8 = new Box(500,50);

  box9 = new Box(600,50);
  box10 = new Box(600,50);
  box11= new Box(600,50);
  box12= new Box(600,50);
  box13= new Box(600,50);
  box14= new Box(600,50);
  box15= new Box(600,50);
  box16= new Box(600,50);
  box17= new Box(600,50);

  // box18=new Box
  // box19
  // box20
  // box21 
  // box22
  // box23
  // box24
  // box25
  
 
  ground = new Ground(450,690,900,20);
}

function draw() {
  background("grey");  
  Engine.update(engine);

  
  ball.display();
  rope1.display();
  ground.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();

  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  
}


function mouseDragged(){
   Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY})
}