const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var boy, boyAnim;
var thunder, thunderImage1,thunderImage2,thunderImage3,thunderImage4;

function preload(){
    boyAnim= loadAnimation("Walking Frame/walking_1.png","Walking Frame/walking_2.png","Walking Frame/walking_3.png",
    "Walking Frame/walking_4.png","Walking Frame/walking_5.png","Walking Frame/walking_6.png","Walking Frame/walking_7.png",
    "Walking Frame/walking_8.png")  
    thunderImage1= loadImage("thunderbolt/1.png");
    thunderImage2= loadImage("thunderbolt/2.png");
    thunderImage3= loadImage("thunderbolt/3.png");
    thunderImage4= loadImage("thunderbolt/4.png");
}

function setup(){
    var canvas = createCanvas(500,1000);
    engine = Engine.create();
    world = engine.world;

    drop1= new Drop(250,10,10);
    drop2= new Drop(300,10,10);
    drop3=new Drop(400,10,10);
    drop4=new Drop(80,10,10);
    drop5= new Drop(100,10,10);
    drop6= new Drop(10,10,10);
    drop7=new Drop(20,10,10);
    drop8= new Drop(30,10,10);
    drop9= new Drop(50,10,10)
    drop10= new Drop(70,10,10);
    drop11=new Drop(110,10,10);
    drop12= new Drop(150,10,10); 
    drop13= new Drop(170,10,10);
    drop14= new Drop(320,10,10);
    drop15= new Drop(480,10,10);
    drop16= new Drop(460,10,10);
    drop17= new Drop(490,10,10)
    drop18= new Drop(390,10,10);
    drop19= new Drop(290,10,10);
    drop20= new Drop(90,10,10);

    boy=new Boy(250,500,200,100);
    //ground1= new Ground(250,990,500,20);
    
}

function draw(){
    background("black")
    Engine.update(engine);

    boy=createSprite(250,750,100,500);
    boy.addAnimation("car",boyAnim);

    thunder= createSprite(random(10,370),random(10,30),10,10);

    drop1.display();
    drop2.display();
    drop3.display();
    drop4.display();
    drop5.display();
    drop6.display();
    drop7.display();
    drop8.display();
    drop9.display();
    drop10.display();
    drop11.display();
    drop12.display();
    drop13.display();
    drop14.display();
    drop15.display();
    drop16.display();
    drop17.display();
    drop18.display();
    drop19.display();
    drop20.display();
    
    boy.display();
    
    thunderCloud();

    
}   

function thunderCloud(){
    var rand= Math.round(random(1,4));
    if(frameCount%80===0){
        switch(rand){
            case 1:thunder.addImage(thunderImage1);
            break;
            case 2:thunder.addImage(thunderImage2);
            break;
            case 3:thunder.addImage(thunderImage3);
            break;
            case 4:thunder.addImage(thunderImage4);
            break;
            default:break;
        }
        drawSprites();
    }
    if(frameCount%90===0){
        thunder.destroy();
    }
}