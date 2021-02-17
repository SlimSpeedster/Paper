
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject	
var world;
var ball;


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);

//test to update
	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1200,650);
	ball = new Ball(200, 650, 90);
	var render = Render.create({
		element: document.body, 
		engine:engine,
		options:{
			width: 1600,
			height: 700,
			wireframes: false
		}
	});

	Engine.run(engine);
  
	Render.run(render);
}


function draw() {
  rectMode(CENTER);
  background(230);
 
keys();

  groundObject.display();
  dustbinObj.display();
  ball.display();

}

function keys(){

if(keyDown("up_arrow")){
	Body.applyForce(ball.body, ball.body.position,{x:90, y:-95});
}

}