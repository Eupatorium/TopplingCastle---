const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;
var box2;
var box3;
var box4;
var ground;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(200,300,50,50);
    box2 = new Box(100,100,50,100);
    box3 = new Box(50,200,50,50);
    box4 = new Box(100,100,100,100);

    ground = new Ground(200,390,400,20)

}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    ground.display();
}
class Ground {
 constructor(x,y,width,height){
 var options = {
  isStatic: true 
 }
 this.body = Bodies.rectangle(x,y,width,height,options);
 this.width = width;
 this.height = height;
 World.add (World,this.body);
 }
display(){
var pos = this.body.position;
var angle  = this.body.angle;
push();
translate(pos.x,pos.y);
rotate(angle);
rectMode (CENTER);
fill(255);
rect(pos.x,pos.y,this.width,this.height)
pop();
}
};


class Box {
 constructor(x,y,width,height){
 var options = {
  'restitution':0.8 
 }
 this.body = Bodies.rectangle(x,y,width,height,options);
 this.width = width;
 this.height = height;
 World.add (World,this.body);
 }