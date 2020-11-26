
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var boy1 , boyImg ;

function preload()
{

	boyImg = loadImage("boy.png");
	
}

function setup() {
	createCanvas(800, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	boy1 = new Boy(boy1.body ,{x:200,y:200});
	boy1.addImage(boyImg);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}



