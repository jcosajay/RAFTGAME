//aspect ratio
var canvasMultiplier = 40;

var enemyRate = 120;
var enemyRate3 = 300
var enemyRate4 = 50;

var powerRate = 200;
var powerRate4 = 20;

var enemyAngle = 80;
var heroSpeed = 8;
var explosionDensity = 20;
var score = 0;
var gameState = 'startUp';
var intro = 'intro';
var heroHealth = 6;

//NEW
var enemyDirection = 2;
var enemyMovement = 5;
var enemyMovement3 = 10;
var enemyMovement4 = 15;


var hero;
var heroState = 'regular';

var bullets;
var enemies;

var powerUps

//
var health_end,health_half,health_full, health_full6, health_half5;

var bg_title,bg_win,bg_lose,bg_level1,bg_level2,bg_level3,bg_countdown,intro;

var enemyOneImg,enemyTwoImg,enemyThreeImg;

var heroDefault,heroLeft,heroRight;

var countDowntimer = 0;
var count1Downtimer = 0;
var count2Downtimer = 0;
var count3Downtimer = 0;

var level1ScoreAdvance = 5;
var level2ScoreAdvance = 10;
var level3ScoreAdvance = 20;
var level4ScoreAdvance = 30;

//preload media
function preload(){
  
  bg_title = loadImage("assets/title_story.png");
  bg_level1 = loadImage("assets/GAMEPLAYBackground.png");
  bg_level2 = loadImage("assets/GAMEPLAYBackground2.png");
  bg_level3 = loadImage("assets/GAMEPLAYBackground3.png");
  bg_level4 = loadImage("assets/GAMEPLAYBackground4.png");
  intro = loadImage("assets/level1.png");
  powerUpbullet = loadImage("assets/bullet.png");
  bg_countdown1 = loadImage("assets/level2.png");
  bg_countdown2 = loadImage("assets/level3.png");
  bg_countdown3 = loadImage("assets/level4.png");
  bg_win = loadImage("assets/youwin.png");
  bg_lose = loadImage("assets/youlose.png");
  intro = loadImage("assets/level1.png");
  
  health_end = loadImage("assets/health_end.png");
  health_half = loadImage("assets/health_half.png");
  health_full = loadImage("assets/health_full.png");
  health_end4 = loadImage("assets/health_end-04.png");
  health_half5 = loadImage("assets/health_half-05.png");
  health_full6 = loadImage("assets/health_full-06.png");
  
  enemyOneImg = loadImage("assets/First_enemy.png");
  enemyTwoImg = loadImage("assets/Second_enemy.png");
  enemyThreeImg = loadImage("assets/Third_enemy.png");
  enemyFourImg = loadImage("assets/ghost.png");

  enemyOneImg = loadAnimation("assets/log_00000.png", "assets/log_00006.png");
  enemyOneImg.frameDelay = .5;
  enemyTwoImg = loadAnimation("assets/rock_00000.png", "assets/rock_00009.png");
  enemyTwoImg.frameDelay = .5;
  enemyThreeImg = loadAnimation("assets/boat_00000.png", "assets/boat_00002.png");
  enemyThreeImg.frameDelay = .5;


  heroDefault = loadAnimation("assets/heroDefault_00000.png", "assets/heroDefault_00006.png");
  heroDefault.frameDelay = 2;
  heroLeft = loadAnimation("assets/heroLeft_00000.png", "assets/heroLeft_00006.png");
  heroLeft.looping = false;
  heroLeft.frameDelay = 4;
  
  heroRight = loadAnimation("assets/heroRight_00000.png", "assets/heroRight_00006.png");
  heroRight.looping = false;
  heroLeft.frameDelay = 4;
  
  myFont = loadFont('assets/Pixeled.ttf');

}





function setup() {
  var tempWidth = canvasMultiplier * 9;
  var tempHeight = canvasMultiplier * 16;
  createCanvas(tempWidth,tempHeight);
  
  bullets = new Group();
  enemies = new Group();
  powerUps = new Group();
  
  var heroImg = loadImage("assets/Game_Skins_Hero.png");
  var heroAnimationDefault = loadAnimation("assets/hero_00000.png", "assets/hero_00006.png");
 //defaults to image
  hero = createSprite(width/2,height*.8,30,30);
  //slow hero
  hero.friction = 0.85;
  //hero.addImage(heroImg);
  hero.addAnimation("heroLeft", heroLeft);
  hero.addAnimation("heroRight", heroRight);
  hero.addAnimation("heroDefault", heroDefault);
  //start animating with the default
  hero.changeAnimation("heroDefault");
 // hero.shapeColor = "white";
}





function draw() {
  
  switch(gameState){
    case 'startUp':
      background(bg_title);
      text('',width/2,height/2);
      break;
  
    case 'loose':
        background(bg_lose);
      break;


    case 'win':
      background(bg_win);
      break;

    case 'levelOne':
      levelOne();
      break;

    case 'levelTwo':
      levelTwo();
      break;

    case 'levelThree':
      levelThree();
      break;
    
    case 'levelFour':
      levelFour();
      break;
      
      
      
    case 'intro':
      background(intro);
      
      //only runs the first time through the coutdown
      if(countDowntimer === 0){
        countDowntimer = frameCount;
      }
      var flooredCount = floor((frameCount - countDowntimer)/20);
      
      //advance to level 2
      if(flooredCount > 3){
        gameState = "levelOne";
      }  
      break;
      
      
    case 'countDown1':
      background(intro);
      
      //only runs the first time through the coutdown
      if(count1Downtimer === 0){
        count1Downtimer = frameCount;
      }
      var flooredCount = floor((frameCount - count1Downtimer)/50);
      //advance to level 2
      if(flooredCount > 3){
        gameState = "levelTwo";
      }  
      break;
      
      
      
      
    case 'countDown2':
      background(bg_countdown2);
      //textSize(32);
      //only runs the first time through the coutdown
      if(count2Downtimer === 0){
        count2Downtimer = frameCount;
      }
      var flooredCount = floor((frameCount - count2Downtimer)/50);
      //advance to level 2
      if(flooredCount > 3){
        gameState = "levelThree";
      }  
      break;


  
    case 'countDown3':
      background(bg_countdown3);
      textSize(32);
      //only runs the first time through the coutdown
      if(count3Downtimer === 0){
        count3Downtimer = frameCount;
      }
      var flooredCount = floor((frameCount - count3Downtimer)/50);
      //advance to level 2
      if(flooredCount > 3){
        gameState = "levelFour";
      }  
      break;
  
  
  
  
  
  
  
  
 /* if (gameState == 'startUp'){
    text('Press X to Start',width/2,height/2);
  }else if(gameState == 'loose'){
    text('Game Over!',width/2,height/2);
  }else if(gameState == 'win'){
    text("WINNER!",width/2,height/2);
  }else if(gameState == 'levelOne'){
    levelOne();
  }else if(gameState == 'levelTwo'){
  levelTwo();
  }else if(gameState == 'levelThree'){
  levelThree();
  } */
}
}

function keyPressed(){
  if(keyCode == RIGHT_ARROW){
  hero.setSpeed(heroSpeed,0);
  hero.changeAnimation("heroRight");
  hero.animation.changeFrame(0);
  }
  
  else if(keyCode == LEFT_ARROW){
  hero.setSpeed(heroSpeed,180);
  hero.changeAnimation("heroLeft");
  hero.animation.changeFrame(0);
  }
  
  else if (key == ' '){
    
    //shootSound.play();
    
    //var panning = map(hero)
    
    if(gameState == 'intro'){
      gameState = "levelOne";
    }
    if(gameState == 'countDown1'){
      gameState = "levelTwo";
    }
    if(gameState == 'countDown2'){
      gameState = "levelThree";
    }
    if(gameState == 'countDown3'){
      gameState = "levelFour";
    }

    
    
    if(heroState == 'regular'){
      //create bullet at the location of the hero and set the size
      var bullet = createSprite(hero.position.x, hero.position.y,5,5);
      //set the speed and direction of the bullet
      bullet.setSpeed(20,270);
      //make the bullet dissappear after a certain number of frames
      bullet.life = 50;
      bullet.shapeColor = 'white';
      //add the singular bullet to the GROUP bullets
      bullets.add(bullet);
      
   
      //if on intro screen intro skip
    }
    
    if(heroState == 'power'){
      for(var i = 0;i < 3;i++){
        //create bullet at the location of the hero and set the size
        var bullet = createSprite(hero.position.x, hero.position.y,5,5);
        //set the speed and direction of the bullet
        var angle = 255 + (i*15);
        bullet.setSpeed(20,angle);
        bullet.life = 50;
        bullet.shapeColor = 'white';
        bullets.add(bullet);
      }
    }  
  }
}
  
  //start up instructions
function keyTyped(){
  if (key === 'x'){
    gameState = 'intro';
  }
}

