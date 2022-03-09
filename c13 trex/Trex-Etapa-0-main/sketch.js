var trex, trexRunning;
var edges;
var solo, imageSolo;
var SoloInvisivel;
var clouds, imageClouds;
var cactos, imageCacto1,imageCacto2,imageCacto3,imageCacto4,imageCacto5,imageCacto6;
var score=0;

//preload carrega as midías
function preload(){
 //animação do Trex
  trexRunning = loadAnimation("trex1.png","trex3.png","trex4.png");
  //imagem do solo
  imageSolo = loadImage("ground2.png");
  // imagem nuvens
  imageClouds = loadImage("cloud.png");
  
  imageCacto1 = loadImage("obstacle1.png");
  imageCacto2 = loadImage("obstacle2.png");
  imageCacto3 = loadImage("obstacle3.png");
  imageCacto4 = loadImage("obstacle4.png");
  imageCacto5 = loadImage("obstacle5.png");
  imageCacto6 = loadImage("obstacle6.png");
}
//setup faz aconfiguração
function setup(){
  createCanvas(600,200)
  // criando as bordas
  edges = createEdgeSprites();
  //crie um sprite de trex
  trex = createSprite(50,160,20,50);
  // adicione dimensão e posição ao trex
  trex.addAnimation("running", trexRunning);
  trex.scale=0.5;
  //sprite do solo
  solo =createSprite(300,170,600,2);
  solo.addImage("solo", imageSolo);
  soloInvisivel = createSprite(300,190,600,2);
  soloInvisivel.visible = false;
}
//draw faz o movimento, a ação do jogo
function draw(){
  background("#f0f9f7");

  var sorteio = Math.round(random(1,6));
    console.log(sorteio);
  // dando velocidade ao solo
  solo.velocityX =-10;
  // fazero trex pular
    if(keyDown("space")&& trex.y>164) {
       trex.velocityY = -10;
 }//conferindo a rolagem do solo
      if( solo.x<0){
        solo.x=solo.width/2;
    }
//texto para vida
  fill("pink");
  stroke("blue");
  textAlign(CENTER, TOP);
  textSize(18);
  score=Math.round(frameCount/5);
  text("Score "+score, 526,20 )
 // chamando a  função de gravidade
  gravity();
  //colisão do trex com as bordas
    trex.collide(soloInvisivel);
    console.log(trex.Y);
   
  createCactos(); 
  createClouds();
   //coordenadas do mouse na tela
  text("X: "+mouseX+"/ Y: "+mouseY,mouseX,mouseY);
  drawSprites();

}
// função de gravidade
function gravity(){
  trex.velocityY+=0.5;
}
function createClouds(){
if(frameCount%60==0){
  clouds = createSprite(600,random(14,100),40,10);
  clouds.velocityX = -3;
  clouds.addImage(imageClouds);
  clouds.scale=random(0.3,1.4);
  clouds.depth =trex.depth -1;
  clouds.lifetime = 210;
}
}

function createCactos(){
  if(frameCount%100==0){
    cactos = createSprite(600,170,10,50);
    cactos.velocityX = -3;
    var sorteioCactos = Math.round(random(1,6)); 
        switch(sorteioCactos) {
          case 1: cactos.addImage(imageCacto1);     
          break;
          case 2: cactos.addImage(imageCacto2);
          break;
          case 3: cactos.addImage(imageCacto3);
          break;
          case 4: cactos.addImage(imageCacto4);
          break;
          case 5: cactos.addImage(imageCacto5);
          break;
          case 6: cactos.addImage(imageCacto6);
              break;
    }
    cactos.scale= 0.5;
    cactos.lifetime=210;

    //cactos.depth =trex.depth -1;
  }
  }   


