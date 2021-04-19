const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var backgroundImg,platform;
var bird, slingShot;
var haha = 2000;
var gamestate = "stable";
function preload() {
}

function setup(){
createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    hex = new polygon(0,0,5,5);
    standq = new Ground(400, 500 ,200, 20);
    standw = new Ground(800, 300, 200, 20);

    box1 = new box(320,475,40,40);
    box2 = new box(360,475,40,40);
    box3 = new box(400,475,40,40);
    box4 = new box(440,475,40,40);
    box5 = new box(480,475,40,40);

    box6 = new box(340,455,40,40);
    box7 = new box(380,455,40,40);
    box8 = new box(420,455,40,40);
    box9 = new box(460,455,40,40);

    box40 = new box(360,435,40,40);
    box11 = new box(400,435,40,40);
    box12 = new box(440,435,40,40);

    box13 = new box(380,415,40,40);
    box14 = new box(420,415,40,40);

    box15 = new box(400,395,40,40);
    
    box16 = new box(740,275,40,40);
    box17 = new box(780,275,40,40);
    box18 = new box(820,275,40,40);
    box19 = new box(860,275,40,40);

    box20 = new box(760,255,40,40);
    box21 = new box(800,255,40,40);
    box22 = new box(840,255,40,40);
    
    box23 = new box(780,235,40,40);
    box24 = new box(820,235,40,40);
    
    box25 = new box(800,215,40,40);

   
    slingshot = new SlingShot(hex.body,{x:200, y:250});
    Engine.run(engine);
}

function draw(){
    background("black")
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

    box40.display();
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

    
    standq.display();
    standw.display();
    hex.display();
    slingshot.display()
    haha = haha-1;
text("Your Score = " + haha,1000,50);
}

function mouseDragged(){
    Matter.Body.setPosition(hex.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}
function keyPressed(){
    if(keyCode === 32){
       
       Matter.Body.setPosition(hex.body, {x: 200 , y: 50});

        slingshot.attach(hex.body);
        gamestate = "stable";
    }
}
