var bg;
var bgImg;
var shooter;
var shooterImg;
var shooting;
var zombie;
var zombieImg;
var zombiegroup;
var bulletsgroup;
var heart1Img,heart2Img,heart3Img
var bullets=70
function preload(){
  bgImg = loadImage ("assets/bg.jpeg")
  shooterImg = loadImage ("assets/shooter_2.png")
  shooting = loadImage ("assets/shooter_3.png")
  zombieImg = loadImage ('assets/zombie.png')
  zombiegroup= new Group();
  bulletsgroup= new Group();
  heart1Img = loadImage("assets/heart_1.png") 
  heart2Img = loadImage("assets/heart_2.png") 
  heart3Img = loadImage("assets/heart_3.png") 
}

function setup(){
  createCanvas(windowWidth, windowHeight) ;
  //creating background
  bg= createSprite(displayWidth/2, displayHeight/2,20,20)
  bg.addImage (bgImg)
  bg.scale = 1.2
  shooter = createSprite (160,500,10,10)
  shooter.addImage (shooterImg)
  shooter.scale =0.5
  shooter.debug =true
  shooter.setCollider("rectangle",0,0,300,300)
  //creating a sprite to show how many lives are remaining
  heart1 =createSprite(displayWidth-150,40,20,20)
  heart1.addImage("heart1",heart1Img)
  heart1.scale =0.4
  heart1.visible =false
  heart2 =createSprite(displayWidth-100,40,20,20)
  heart2.addImage("heart2",heart2Img)
  heart2.scale =0.4
  heart2.visible =false
  heart3 =createSprite(displayWidth-200,40,20,20)
  heart3.addImage("heart3",heart3Img)
  heart3.scale =0.4

}

function draw(){
  background("black")
  if(keyDown("UP_ARROW")){
   shooter.y = shooter.y - 30
  } 
  if(keyDown("DOWN_ARROW")){
    shooter.y = shooter.y + 30
  }
  if(keyDown("RIGHT_ARROW")){
    shooter.x = shooter.x + 30
  }
  if(keyDown("LEFT_ARROW")){
    shooter.x = shooter.x - 30
  }
    //creating bulletsand changing the image of the shoter to shooting when the spacebar is pressed
    
  if(keyWentDown("SPACE")){
    shooter.addImage(shooting)
    bullet =createSprite(displayWidth-1150,shooter.y-30,20,10)
    bullet.velocityX =20
    bulletsgroup.add (bullet)
    bullets=bullets-1
  }
  if(keyWentUp("SPACE")){
    shooter.addImage(shooterImg)
  }
  //calling function
  
  enemy();
  //destroy zombie when the player touches it
  if(zombiegroup.isTouching(shooter)){
    for(var i=0;i<zombiegroup.length;i++){
      if(zombiegroup[i].isTouching(shooter)){
        zombiegroup[i].destroy()
    
      }
    }
  }
  //destroying the zombie when the bullet touches it
  if(zombiegroup.isTouching(bulletsgroup)){
    for (var i=0;i<zombiegroup.length;i++){
      if(zombiegroup[i].isTouching(bulletsgroup)){
        zombiegroup[i].destroy()
      }
    }
  }
  drawSprites();
}
function enemy(){
  if(frameCount%60==0){
    zombie =createSprite(1300,500,40,40)
    zombie.velocityX = -2
    zombie.addImage(zombieImg)
    zombie.scale =0.15;
    zombie.x = random(500,1100)
    zombie.y = random(100,500)
    zombie.lifetime =400
    zombiegroup.add(zombie)
    zombie.debug =true
  }
  
}