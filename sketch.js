 const World=Matter.World;
 const Engine=Matter.Engine;
 const Bodies=Matter.Bodies;
 
 var bgImg;
 var myEngine,myWorld;
 var snow;

function preload(){
  bgImg=loadImage("snow3.jpg");

}

function setup() {
  myEngine=Engine.create();
  myWorld=myEngine.world;

  createCanvas(800,400);

  snow= new createSnow(100,100);
 // createSprite(400, 200, 50, 50);
}

function draw() {
  background(bgImg); 
  Engine.update(myEngine);
  
  snow.showSnow();
  drawSprites();
}
