var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var box1sprite,box1,box2sprite,box2,box3,box3sprite;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG);
	helicopterSprite.scale=0.6;
 
	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255);

box1sprite=createSprite(width/2,200,200,20);
box1sprite.shapeColor=color("red");
box2sprite=createSprite(width/2,200,20,100);
box2sprite.shapeColor=color("red");
box3sprite=createSprite(width/2,200,20,100);
box3sprite.shapeColor=color("red");
	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.3, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, 800, 10 , {isStatic:true} );
 	World.add(world, ground);
	
box1=Bodies.rectangle(width/2,650,200,20,{isStatic:true});
	World.add(world,box1);
	box2=Bodies.rectangle(300,610,20,100,{isStatic:true});
	World.add(world,box2);
	box3=Bodies.rectangle(500,610,20,100,{isStatic:true});
	World.add(world,box3);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  box1sprite.x=box1.position.x;
  box1sprite.y=box1.position.y;
 box2sprite.x=box2.position.x;
 box2sprite.y=box2.position.y;
 box3sprite.x=box3.position.x;
 box3sprite.y=box3.position.y;
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
Matter.Body.setStatic(packageBody,false);
  }

}



