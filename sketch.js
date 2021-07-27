var garden,rabbit;
var gardenImg,rabbitImg,appleImg,leavesImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  orangeImg = loadImage("orangeLeaf.png")
  redImg=loadImage("redImage.png")
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);
  if(keyDown("left")){
    rabbit.x=rabbit.x-10
  }
  if(keyDown("right")){
    rabbit.x=rabbit.x+10
  }
    
  edges= createEdgeSprites();
  rabbit.collide(edges);
  var select_sprites=Math.round(random(1,3))
  
  if(frameCount%80==0){
    if(select_sprites==1){
      createApple()
    }
    else if(select_sprites ===2){
      createOrangeLeaves()
    }
    else{
      createRedLeaves()
    }
  }

  drawSprites();
}
function createApple(){
apple=createSprite(random(50,350),40,10,10)
apple.addImage(appleImg)
apple.scale=0.07
apple.velocityY=3
apple.lifetime=150
}

function createOrangeLeaves(){
  orange=createSprite(random(50,350),40,10,10)
  orange.addImage(orangeImg)
  orange.scale=0.08
  orange.velocityY=3
  orange.lifetime=150
  }

  function createRedLeaves(){
    red=createSprite(random(50,350),40,10,10)
    red.addImage(redImg)
    red.scale=0.06
    red.velocityY=3
    red.lifetime=150
    }
  




  
