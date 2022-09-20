var bow , arrow,  scene;
var bowImage, arrowImage, green_balloonImage, red_balloonImage, pink_balloonImage ,blue_balloonImage, backgroundImage;

var score=0;

function preload(){
  
  backgroundImage = loadImage("background0.png");
  arrowImage = loadImage("arrow0.png");
  bowImage = loadImage("bow0.png");
  red_balloonImage = loadImage("red_balloon0.png");
  // carregue a imagem do balão verde
  // carregue a imagem do balão rosa
  // carregue a imagem do balão azul

  
}



function setup() {
  createCanvas(400, 400);
  
  //crie o fundo
  scene = createSprite(0,0,400,400);
  scene.addImage(backgroundImage);
  scene.scale = 2.5
  
  // criando arco para a flecha
  bow = createSprite(380,220,20,50);
  bow.addImage(bowImage); 
  bow.scale = 1;
  




   score = 0    
}

function draw() {
 background(0);
  // chão em movimento
    scene.velocityX = -3 

    if (scene.x < 0){
      scene.x = scene.width/2;
    }
  
  //arco em movimento
  bow.y = World.mouseY
  
   // soltar arco quando a tecla espaço for pressionada
  if (keyDown("space")) {
    createArrow();
    
  }
   
  //criando inimigos continuamente
  
  
  if (World.frameCount % 100 == 0) {
   switch(select_balloon ){
    case 1: //chamar o balão vermelho
    break;
    case 2: // chamar o balão azul
    break;
    case 3: // chamar o balão verde
    break;
    case 4: // chamar o balão rosa
    break;
    default:break;
  }}
    
  drawSprites();
}


// Criar flechas para o arco
 function createArrow() {
  var arrow= createSprite(100, 100, 60, 10);
  arrow.addImage(arrowImage);
  arrow.x = 360;
  arrow.y=bow.y;
  arrow.velocityX = -4;
  arrow.lifetime = 100;
  arrow.scale = 0.3;
}

function redBalloon() {
  var red = createSprite(0,Math.round(random(20, 370)), 10, 10);
  red.addImage(red_balloonImage);
  red.velocityX = 3;
  red.lifetime = 150;
  red.scale = 0.5;
}

function blueBalloon() {
var blueBalloon = createSprite (0,Math.round(random(20, 370)), 10, 10)
blueBalloon.addImage(blue_balloonImage);
blueBalloon.velocityX = 3;
blueBalloon.lifetime= 150;
blueBalloon.scale = 0.5;

}

function greenBalloon() {
var greenBalloon = createSprite(0, Math.round(random(20, 370)), 10, 10)
greenBalloon.addImage(green_balloonImage);
greenBalloon.velocityX= 3;
greenBalloon.lifetime= 150;
greenBalloon.scale=0.5;
}

function pinkBalloon() {
  var pinkBalloon = createSprite(0, Math.round(random(20, 370)), 10, 10)
  pinkBalloon.velocityX= 3;
  pinkBalloon.lifetime= 150;
  pinkBalloon.scale=0.5;
  pinkBalloon.addImage(pink_balloonImage);
}
