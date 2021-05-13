var mrect, frect, rect, rect1, rect2, rect3;

function setup() {
  createCanvas(800,400);

  mrect = createSprite(400, 200, 80, 30);
  mrect.shapeColor ="green";

  rect = createSprite(200, 250, 80, 30);
  rect.shapeColor ="green";

  rect1 = createSprite(250, 160, 80, 30);
  rect1.shapeColor ="green";

  rect2 = createSprite(560, 360, 80, 30);
  rect2.shapeColor ="green";

  rect3 = createSprite(700, 215, 80, 30);
  rect3.shapeColor ="green";

  frect = createSprite(200,200,50,50);
  frect.shapeColor ="green";
}

function draw() {
  background(255,255,255); 
  
  mrect.x = World.mouseX;
  mrect.y = World.mouseY;
  
  if(isTouching(rect1, mrect)){

    mrect.shapeColor = "red";
    rect1.shapeColor = "red";

  }
  else{

    mrect.shapeColor = "green";
    rect1.shapeColor = "green";

  }


  drawSprites();
}


