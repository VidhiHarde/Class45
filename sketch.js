var bg,bgImg;
var girl,girlImg;
var butterfly1,butterflyGif1;
var butterfly2,butterflyGif2;
var honeyBee,honeyBeeImg;

function preload(){
bgImg=loadImage("Images/Garden1.jpg");
girlImg=loadImage("Images/Girl.png");
butterflyGif1=loadAnimation("Images/Butterfly1.png","Images/Butterfly2.png");
butterflyGif2=loadAnimation("Images/Butterfly3.png","Images/Butterfly4.png");
honeyBeeImg=loadImage("Images/HoneyBee.png");
}


function setup() {
  createCanvas(1000,500);

  bg=createSprite(-10,30,1000,500);
  bg.x=bg.width/2;
  bg.velocityX=-3;
  bg.scale=2;
  bg.addImage("Bg",bgImg);

  girl=createSprite(100, 350, 50, 20);
  girl.addImage("G1",girlImg);
  girl.scale=0.8
  
  
}

function draw() {
  background(255);  
 
  if(bg.x<400){
    bg.x=bg.width/2
  }
  spawnButterflies1();
  spawnButterflies2();
  spawnHoneyBees();

  drawSprites();
}

function spawnButterflies1(){
if(World.frameCount%300===0){
  var butterfly1=createSprite(800,200,20,20);
  butterfly1.y=Math.round(random(100,200));
  butterfly1.addAnimation("B1",butterflyGif1);
  butterfly1.scale=0.2
  butterfly1.velocityX=-2;
butterfly1.lifeTime=500;
}
}
function spawnButterflies2(){
  if(World.frameCount%400===0){
    var butterfly2=createSprite(900,200,20,20);
    butterfly2.y=Math.round(random(100,200));
    butterfly2.addAnimation("B2",butterflyGif2);
    butterfly2.scale=0.2;
    butterfly2.velocityX=-2;
    butterfly2.lifeTime=500;
  }
}

function spawnHoneyBees(){
  if(World.frameCount%500===0){
    var honeyBee=createSprite(950,200,20,20);
    honeyBee.addImage("H1",honeyBeeImg);
    honeyBee.scale=0.2;
    honeyBee.velocityX=-2;
    honeyBee.lifeTime=500;
  }
}
