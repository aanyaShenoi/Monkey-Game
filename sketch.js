var monkey , monkey_running;
var ground;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, ObstacleGroup;
var score = 0;
var survivalTime = 0;
function preload(){
monkey_running = loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}
function setup() {
  createCanvas(585 ,510);
  monkey=createSprite(80,315,20,20);
  monkey.addAnimation("moving", monkey_running);
  monkey.scale=0.1;
  
  ground = createSprite(400,430,900,100);
  ground.velocityX = -4;
  ground.x = ground.width/2;
  console.log(ground.x);
  
  FoodGroup = createGroup();
  ObstacleGroup = createGroup();
}
function draw() {
  background(300)
  if(keyDown("space")&& monkey.y >= 100) {
        monkey.velocityY = -15;
  } 
  monkey.velocityY = monkey.velocityY + 0.5;
  if (ground.x < 150){
    ground.x = ground.width/2;
  } 
  monkey.collide(ground);
  
  stroke("white");
  textSize(20);
  fill("white");
  text("Score: "+ score, 500, 50);
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate());
  text("Survival Time: "+ survivalTime, 100, 50);
  
  drawSprites();
  food();
  obstacles();
}

function food(){
  if (frameCount % 80 === 0) {
    var banana = createSprite(585,200,25,25);
    banana.y = Math.round(random(120,200));
    banana.addImage(bananaImage);
    banana.velocityX = -5;
    banana.scale = 0.25
    banana.lifetime = 195;
    FoodGroup.add(banana);
  }
}

function obstacles(){
  if (frameCount % 300 === 0){
   var obstacle = createSprite(585,330,10,40);
   obstacle.velocityX = -5 
   obstacle.x = Math.round(random(165,200));
   obstacle.addImage(obstacleImage);         
   obstacle.scale = 0.25;
   obstacle.lifetime = 195;
   ObstacleGroup.add(obstacle);
 }
}