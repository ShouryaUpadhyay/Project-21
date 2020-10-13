var bullet, wall;
var speed, weight,thickness;

function setup() {
  createCanvas(800,400);

  speed=random(40,70)
  thickness=random(22,80)
  weight=random(400,1500)

  bullet = createSprite(100, 200, 50, 5);
  bullet.velocityX=speed;

  wall = createSprite(700, 200, thickness, height/2);

}

function draw() {
  background("black");  

  if(wall.x-bullet.x<bullet.width/2-wall.width/2){

    bullet.velocityX=0;
  }
 var deformation=0.5*weight*speed*speed/22500

 if(deformation>180){
  bullet.shapeColor="yellow";
 }
 if(deformation<180 && deformation>100){
  bullet.shapeColor="green";
  
   }
   if(deformation<100){
    bullet.shapeColor="red";
     }

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
 
  drawSprites();
  }
