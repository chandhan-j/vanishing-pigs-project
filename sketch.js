const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground,ground2;
var box,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16,box17,box18,box19,box20,box21,box22,box23,box24,box25,box26,box27,box28,box29,box30,box31,box32,box33,box34,box35,box36;
var polygon1;
var rope;

function setup(){
    createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    polygon1 = new Polygon(100,120,50,50);
    rope = new Rope(polygon1.body,{x:300, y:100});



    ground = new Ground(800,300,250,20);
    ground2 = new Ground(600,400,1200,20)
    box = new Box(693,250,30,30);
    box2 = new Box(723,250,30,30);
    box3 = new Box(753,250,30,30);
    box4 = new Box(783,250,30,30);
    box5 = new Box(813,250,30,30);
    box6 = new Box(843,250,30,30);
    box7 = new Box(873,250,30,30);
    box8 = new Box(903,250,30,30);
    box9 = new Box(708,200,30,30);
    box10 = new Box(738,200,30,30);
    box11 = new Box(768,200,30,30);
    box12 = new Box(798,200,30,30);
    box13 = new Box(828,200,30,30);
    box14 = new Box(858,200,30,30);
    box15 = new Box(888,200,30,30);
    box16 = new Box(725,150,30,30);
    box17 = new Box(755,150,30,30);
    box18 = new Box(785,150,30,30);
    box19 = new Box(815,150,30,30);
    box20 = new Box(845,150,30,30);
    box21 = new Box(875,150,30,30);
    box22 = new Box(740,100,30,30);
    box23 = new Box(770,100,30,30);
    box24 = new Box(800,100,30,30);
    box25 = new Box(830,100,30,30);
    box26 = new Box(860,100,30,30);
    box27 = new Box(755,50,30,30);
    box28 = new Box(785,50,30,30);
    box29 = new Box(815,50,30,30);
    box30 = new Box(845,50,30,30);
    box31 = new Box(770,0,30,30);
    box32 = new Box(800,0,30,30);
    box33 = new Box(830,0,30,30);
    box34 = new Box(785,-50,30,30);
    box35 = new Box(815,-50,30,30);
    box36 = new Box(800,-100,30,30);
}


function draw(){
    background(0);
    Engine.update(engine);


    ground.display();
    box.display();
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
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display();
    box17.display();
    box18.display();
    box19.display();
    box20.display();
    box21.display();
    box22.display();
    box23.display();
    box24.display();
    box25.display();
    box26.display();
    box27.display();
    box28.display();
    box29.display();
    box30.display();
    box31.display();
    box32.display();
    box33.display();
    box34.display();
    box35.display();
    box36.display();
    polygon1.display();
    rope.display();
    ground2.display();

    /*if(keyCode === 32){
       
        rope.attach(polygon1.body);
    }*/

}

function mouseDragged(){
    Matter.Body.setPosition(polygon1.body, {x: mouseX , y: mouseY});
    console.log("on sling");
}


function mouseReleased(){
    rope.fly();
    console.log("off sling");
}

function keyPressed(){
    if(keyCode === 32){
        //Matter.Body.setPosition(polygon1.body,{x:300,y:100});
        rope.attach(polygon1.body);
        console.log("rope is attatching")
    }
}