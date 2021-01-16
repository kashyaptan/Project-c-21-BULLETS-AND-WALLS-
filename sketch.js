var wall,thickness
var bullet,speed,weight

function setup() {
  createCanvas(1600,400);
  bullet = createSprite(400, 200, 20, 10);
  bullet.velocityX = 20
  thickness = random(22,83)
  wall = createSprite(1200,200,thickness, height/2)
  wall.shapeColor = (80,80,80)
  speed = random(223,321)
  weight = random(30,52)

}

function draw() {
  background(255,255,255);  

  if (hasCollided(bullet,wall)){
    bullet.velocityX = 0
    var damage = 0.5*weight*speed*speed/(thickness*thickness*thickness)
  }
  if(damage>10){
    wall.shapeColor = ("red")
  }
  if(damage<10){
    wall.shapeColor = ("green")
  }

  drawSprites();
}