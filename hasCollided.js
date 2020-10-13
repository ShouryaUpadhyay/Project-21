function hasCollided(lbullet,lwall){

    bulletRightEdge=lbullet.x+lbullet.width;
    wallLeftEdge=lwall.x;
    
    if(bulletRightEdge>=wallLeftEdge){
    return true;
    }
    return false;
    
    if(hasCollided(bullet,wall)){
    bullet.velocityX=0;
    
    var damage=0.5*weight*speed*speed/(thickness*thickness*thickness)
    console.log(damage);
    if(damage>10){
    wall.shapeColor= "green"
    }
    
    if(damage<10){
    wall.shapeColor= "red"
    }

    }

    }