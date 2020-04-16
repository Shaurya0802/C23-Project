const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11;

function setup(){
    var canvas = createCanvas(800,600);
    engine = Engine.create();
    world = engine.world;
}

function draw(){
    background(0);
    Engine.update(engine);
    
    ground = new Ground(400,550,800,150);

    rectMode(CENTER);
    fill(255,69,0);
    rect(400,400,100,150);

    fill("purple");
    rect(300,350,80,250);
    rect(500,350,80,250);

    fill("brown");
    rect(400,230,280,20);
    rect(400,15,780,20)

    fill(255,69,0);
    rect(400,210,280,30);

    fill(0,0,128);
    triangle(350,325,450,325,400,250);

    fill(255,223,0);
    triangle(260,195,540,195,400,40);

    fill(255,69,0);
    rect(200,300,80,350);
    rect(600,300,80,350);

    fill("purple");
    rect(50,250,80,450);
    rect(750,250,80,450);

    fill(255,0,0);
    ellipse(675,150,70);
    ellipse(125,150,70);

    fill(0,255,0);
    ellipse(675,225,70);
    ellipse(125,225,70);

    fill(0,0,255);
    ellipse(675,300,70);
    ellipse(125,300,70);

    fill(255,0,0);
    ellipse(675,375,70);
    ellipse(125,375,70);

    fill(0,255,0);
    ellipse(675,442,65);
    ellipse(125,442,65);

    ground.display();

    drawSprites();
}