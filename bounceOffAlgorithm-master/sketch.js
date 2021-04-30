var fixedRect, movingRect;
var sprite1, sprite2;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "red";
  fixedRect.debug = true;
  movingRect = createSprite(700, 400, 80, 30);
  movingRect.shapeColor = "yellow";
  movingRect.debug = true;
  sprite1=createSprite(600,200,50,50);
  sprite2=createSprite(200,200,50,50);
  sprite1.debug=true;
  sprite2.debug=true;
  //sprite1.velocityX = -5;
  sprite1.shapeColor = "green";
  sprite2.shapeColor = "blue";
  //sprite2.velocityX = 5;
 // movingRect.velocityY = -5;
  //fixedRect.velocityY = 5;
}

function draw() {
  background(0, 0, 0);  
  sprite1.x=mouseX;
  sprite1.y=mouseY;
  /*bounceback(sprite1, sprite2);
  bounceback(movingRect, fixedRect);
  bounceback(fixedRect, sprite2);
  bounceback(movingRect, sprite2);
  bounceback(fixedRect, sprite1);
  bounceback(movingRect, sprite1);*/
console.log(movingRect.x)
movingRect.depth = movingRect.depth + 1;
  if(collisionDetection(sprite1, sprite2) || collisionDetection(sprite1, fixedRect) 
  || collisionDetection(sprite1, movingRect)) {
  sprite1.visible = false;
  }
  
  else {
    sprite1.visible = true;
  }
 

  drawSprites();
}