const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11;

var pig,pig2,pig3,pig4;

function setup(){
    var canvas = createCanvas(800,600);
    engine = Engine.create();
    world = engine.world;
    
    ground = new Ground(400,550,800,150)
    box1 = new Box(400,200,100,150);
    box2 = new Box(300,150,80,250);
    box3 = new Box(500,150,80,250);
    box4 = new Box2(400,60,280,20);
    box5 = new Box(400,40,280,30);
    box6 = new Box2(265,150,30,150);
    box7 = new Box2(50,150,30,150);
    box8 = new Box(130,50,205,30);
    box9 = new Box2(750,150,30,150);
    box10 = new Box2(535,150,30,150);
    box11 = new Box(670,50,205,30);
    pig = new Pig(400,150,100,100);
    pig2 = new Pig(400,0,100,100);
    pig3 = new Pig(150,150,100,100);
    pig4 = new Pig(650,150,100,100);
}

function draw(){
    background(0);
    Engine.update(engine);
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
    ground.display();
    pig.display();
    pig2.display();
    pig3.display();
    pig4.display();
}