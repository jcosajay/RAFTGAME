function levelOne(){
  
if(frameCount%enemyRate === 0){
    var enemy = createSprite(random(width),0,40,40);
    enemy.setSpeed(3,90);
    enemy.life = 200;
    enemy.type = 1;
    //enemy.shapeColor = 'red';
    enemy.addAnimation("enemyOneImg",enemyOneImg);
    enemies.add(enemy);
  }
  
  
  //POWERUP
if(frameCount%powerRate === 0){
    //make an enemy at the top, random X
    var powerUp = createSprite(random(width), 0,40,40);
    //set the speed and direction of the bullet
    powerUp.setSpeed(3,random(90 - enemyAngle,90 + enemyAngle));
    //make the bullet dissappear after a certain number of frames
    powerUp.life = 200;
    powerUp.addImage(powerUpbullet);
    //add the image that was loaded in the preload
    //enemy.addImage(enemyOneImg);
    //add the singular bullet to the GROUP bullets
    powerUps.add(powerUp);
    
  }
  
    
  background(bg_level1);
  enemies.overlap(bullets,enemyHit);
  enemies.overlap(hero,heroHit);
  powerUps.overlap(hero,powerHit);
  powerUps.overlap(bullets,powerHit);

  textFont(myFont);
  textSize(32);
  text("" + score, 10, 45);
  //textSize(18);
  text(" ",10, 60);
    switch(heroHealth){
      case 1:
        image(health_end,10,55);break;
      case 2:
        image(health_half,10,55);break;
      case 3:
        image(health_full,10,55);break;
      case 4:
        image(health_end4,10,55);break;
      case 5:
        image(health_half5,10,55);break;
      case 6:
        image(health_full6,10,55);break;
    }
  
  

  

  if(hero.getAnimationLabel() == "heroLeft" && hero.animation.getFrame() === hero.animation.getLastFrame()){
      hero.changeAnimation("heroDefault");

      hero.animation.changeFrame(0);
    }
    
  if(hero.getAnimationLabel() == "heroRight" && hero.animation.getFrame() === hero.animation.getLastFrame()){
      hero.changeAnimation("heroDefault");

      hero.animation.changeFrame(0);
    }
    
  drawSprites();
}