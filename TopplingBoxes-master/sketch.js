const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;
var pig;
var log;
var bird;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    log=new Log(800,290,300,PI/2)
    pig=new Pig(800,300,50,50)
    box1 = new Box(700,300,70,70);
    box2 = new Box(900,300,70,70);
    box3= new Box(700,280,70,70)
    box4=new Box(900,280,70,70)
    log2= new Log(800,270,300,PI/2)
    pig2=new Pig(800,280,50,50)
    box5= new Box(800,260,70,70)
    log3= new Log(760,260,150,PI/7)
    log4= new Log(870,260,150,-PI/7)
    bird= new Bird(200,200,20,20)
    
    ground = new Ground(600,height,1200,20)
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    ground.display();
    pig.display();
    log.display();
    log2.display();
    box3.display();
    box4.display();
    pig2.display();
    box5.display();
    log3.display();
    log4.display();
    bird.display();
}