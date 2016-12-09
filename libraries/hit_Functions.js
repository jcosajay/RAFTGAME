function enemyHit(enemy,bullet){

  if(enemy.type > 0){
    //get rid of the bullet
    bullet.remove();
    //change color
    enemy.shapeColor = 'yellow';
    //subtract health
    enemy.type--;
  }else if(enemy.type === 0){
  
  for(var i=0; i<explosionDensity; i++){
    var p = createSprite(bullet.position.x,bullet.position.y,2,2);
  
  p.setSpeed(random(3,5),random(360));
  p.friction = 0.95;
  p.life = 15;
  }
  
  
  enemy.remove();
  bullet.remove();
  score++;

    if(score == level1ScoreAdvance){
      gameState = 'countDown1';
      heroState = 'regular';
    }    
    if(score == level2ScoreAdvance){
      gameState = 'countDown2';
      heroState = 'regular';
    }
    if(score == level3ScoreAdvance){
      gameState = 'countDown3';
      heroState = 'regular';
    }
    
    if(score == level4ScoreAdvance){
      gameState = 'countDown4';
      heroState = 'regular';
      gameState = 'win';
    }
  }
}

function heroHit(enemy,hero){
  heroState = 'regular';
  heroHealth--;
  if(heroHealth < 1){
    gameState = 'loose';
  }
  enemy.remove();
  hero.shapeColor = 'red';
  
}
function powerHit(powerUp,hero){
  powerUp.remove();
  heroState = "power";
 
}