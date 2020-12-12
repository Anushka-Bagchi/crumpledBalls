
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paperBall,ground;
var wall1,wall2,wall3;

function setup() {
	createCanvas(1200, 500);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	paperBall=new Paper(200,400,25);
	ground=new Ground(600,480,1200,10);
	wall1= new Dustbin(800,420,20,100);
	wall2= new Dustbin(1000,420,20,100);
	wall3= new Dustbin(900,460,220,20);
	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  paperBall.display();
  ground.display();
  wall1.display();
  wall2.display();
  wall3.display();

}

function keyPressed(){
	if(keyCode==UP_ARROW){
		Matter.Body.applyForce(paperBall.body,paperBall.body.position,{x:85,y:-85});
	}
}

