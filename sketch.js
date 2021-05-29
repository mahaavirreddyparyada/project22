const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;


var object,engine,world;
var ground



function setup(){
  createCanvas(400,400);

  engine= Engine.create();
  world=engine.world;


  var objectoptions={
    restitution:1.0
  }
  object =Bodies.circle(200,100,20,objectoptions);
  World.add(world,object);

var groundoptions= { 
  isStatic:true
}

  ground =Bodies.rectangle(200,380,400,10,groundoptions)
  World.add(world,ground);
  console.log(object);
}

function draw(){
  background("black");

  Engine.update(engine);

  ellipseMode(RADIUS);
  ellipse(object.position.x,object.position.y,20,20)
 rectMode(CENTER);


rect(ground.position.x,ground.position.y,400,10);
}
