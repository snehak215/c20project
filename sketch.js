function preload(){
  bgImg=loadImage("iss.png")
  sleepImg=loadImage("sleep.png")
  brushImg=loadAnimation("brush.png")
  gymImg=loadAnimation("gym1.png","gym2.png")
  drinkImg=loadAnimation("drink1.png","drink2.png")
  eatImg=loadAnimation("eat1.png","eat2.png")
  moveImg=loadAnimation("move.png","move1.png")
  move2Img=loadAnimation("move3.png","move3.png")
}
function setup() {
  createCanvas(800,400);
  astronaut=createSprite(400,200);
  astronaut.addAnimation("sleeping",sleepImg);
  astronaut.scale=0.1;
  wall_L=createSprite(0,200,10,400); 
  wall_U=createSprite(400,5,800,10);
  wall_R=createSprite(795,200,10,400);
  wall_D=createSprite(400,395,800,10);
  wall_L.debug=true;
  wall_R.debug=true;
  wall_D.debug=true;
  wall_U.debug=true;
  wall_L.setCollider("rectangle",0,0,10,400)
  wall_U.setCollider("rectangle",0,0,800,10)
  wall_R.setCollider("rectangle",0,0,10,400)
  wall_D.setCollider("rectangle",0,0,800,10)


}

function draw() {
  background(bgImg);
  console.log(astronaut.x)
  if (keyDown(UP_ARROW)){
    astronaut.addAnimation("gym",gymImg);
    astronaut.changeAnimation("gym");
    astronaut.x=400;
    astronaut.y=200;  
    astronaut.velocityX=0;
    astronaut.velocityY=0;


  }
   if (keyDown(DOWN_ARROW)){
    astronaut.addAnimation("brush",brushImg);
    astronaut.changeAnimation("brush");
    astronaut.x=400;
    astronaut.y=200;  
    astronaut.velocityX=0;
    astronaut.velocityY=0;  }
  if (keyDown(LEFT_ARROW)){
    astronaut.addAnimation("drink",drinkImg);
    astronaut.changeAnimation("drink");
    astronaut.x=400;
    astronaut.y=200;  
    astronaut.velocityX=0;
    astronaut.velocityY=0;
  }
  if (keyDown(RIGHT_ARROW)){
    astronaut.addAnimation("eat",eatImg);
    astronaut.changeAnimation("eat");
    astronaut.x=400;
    astronaut.y=200;  
    astronaut.velocityX=0;
    astronaut.velocityY=0;
  }
   if (keyDown("m")){
    astronaut.addAnimation("move",move2Img);
    astronaut.changeAnimation("move");
    astronaut.x=400;
    astronaut.y=200;  
    astronaut.velocityX=3;
    astronaut.velocityY=3;


  }
   if (keyDown("s")){
    astronaut.addAnimation("sleep",sleepImg);
    astronaut.changeAnimation("sleep");
    astronaut.x=400;
    astronaut.y=200;  
    astronaut.velocityX=0;
    astronaut.velocityY=0;
  }
  astronaut.bounceOff(wall_L)
  astronaut.bounceOff(wall_R)
  astronaut.bounceOff(wall_D)
  astronaut.bounceOff(wall_U)
  drawSprites();
}