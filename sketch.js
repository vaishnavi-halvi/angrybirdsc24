const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, pig1;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    
 

   
    bird = new Bird(100,100);

}

function draw(){
    background(0);
    Engine.update(engine);
  

    bird.display();
    
}
