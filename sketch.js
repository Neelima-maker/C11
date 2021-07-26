var trex ,trexRunning;
var ground , groundImage;
function preload(){
  trexImage = loadAnimation("trex1.png" , "trex3.png",
   "trex4.png");

}

function setup(){
  createCanvas(600,200)
  
  //create a trex sprite
trex = createSprite(50,160, 20,40 );
trex.addAnimation("Running", trexImage);
trex.scale =0.5;

// Create a ground Sprite

ground = createSprite(300, 180 , 600, 20);
ground.velocityX = -4
}

function draw(){
  background("lightblue");

  if(keyDown("space")){

    trex.velocityY = -10
  }
  
  trex.velocityY =  trex.velocityY + 0.8;



  trex.collide(ground)
drawSprites();
}