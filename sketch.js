var cat1Img,cat2Img,cat3Img,mouse1Img,mouse2Img,mouse3Img,mouse4Img,forestImg;

var cat1,mouse1,mouse2,mouse3,mouse4,forest;

var gameState=PLAY;
var PLAY=0;
var END=1;
var SERVE=2;

function preload() {
    //load the images here
    cat1Img=loadAnimation("images/cat1.png");
    cat2Img=loadAnimation("images/cat2.png","images/cat3.png");
    cat3Img=loadAnimation("images/cat4.png");
    mouse1Img=loadImage("images/mouse1.png");
    mouse2Img=loadImage("images/mouse2.png");
    mouse3Img=loadImage("images/mouse3.png");
    mouse4Img=loadImage("images/mouse4.png");
    forestImg=loadImage("images/garden.png");
}

function setup(){
    createCanvas(1000,800);

    //creating background 
    forest=createSprite(400,400,10,10);
    forest.addImage(forestImg);
    forest.scale=0.9;

    //create tom and jerry sprites here
    cat1=createSprite(750,650,50,50);
    cat1.addAnimation("catRunning",cat1Img);
    cat1.scale=0.12;
    cat1.debug=false;

    mouse1=createSprite(100,640,50,50);
    mouse1.addImage(mouse1Img);
    mouse1.scale=0.10;
    mouse1.setCollider("rectangle",0,0,50,50);
    mouse1.debug=false;
}

function draw() {

    background(255);

    if((keyCode === "A")){
        keyPressed();
        }

    // Write condition here to evalute if tom and jerry collide
    if(mouse1.isTouching(cat1)){
        cat1.addAnimation("catRunning",cat3Img);
        mouse1.addImage(mouse4Img);
        cat1.velocityX=0;
    }
    
    drawSprites();

}


function keyPressed(){

  //For moving and changing animation write code here

  cat1.velocityX=-2;
  cat1.addAnimation("catRunning",cat2Img);
  cat1.changeAnimation("cat2Img");

}

