var canvas,bg;
var together;
var tom, tomImg_1,tomImg_2,tomImg_3;
var jerry, jerryImg_1,jerryImg_2,jerryImg_3;

function preload() {
    bg = loadImage("images/garden.png");
    tomImg_1= loadAnimation("images/tomOne.png");
    tomImg_2=loadAnimation("images/tomTwo.png","images/tomThree.png");
    tomImg_3= loadAnimation("images/tomFour.png");
    jerryImg_1=loadAnimation("images/jerryOne.png");
    jerryImg_2= loadAnimation("images/jerryTwo.png","images/jerryThree.png");
    jerryImg_3=loadAnimation("images/jerryFour.png");

}

function setup(){
    canvas = createCanvas(1000,800);

    tom = createSprite(870, 600);
    tom.addAnimation("tomSleeping", tomImg_1);
    tom.scale = 0.2;

    jerry = createSprite(200, 600);
    jerry.addAnimation("jerryStanding", jerryImg_1);
    jerry.scale = 0.15;

}

function draw() {

    background(bg);

    if(tom.x - jerry.x < (tom.width - jerry.width)/2)
    { 
        tom.velocityX=0;
        tom.addAnimation("tomLastImage", tomImg_3);
        tom.x =300;
        tom.scale=0.2;
        tom.changeAnimation("tomLastImage");
        jerry.addAnimation("jerryLastImage", jerryImg_3);
        jerry.scale=0.15;
        jerry.changeAnimation("jerryLastImage");
    }  


      drawSprites();
}


function keyPressed(){

    if(keyCode === LEFT_ARROW){
        tom.velocityX = -5; 
        tom.addAnimation("tomRunning", tomImg_2);
        tom.changeAnimation("tomRunning");
        
        jerry.addAnimation("jerryTeasing", jerryImg_2);
        jerry.frameDelay = 25;
        jerry.changeAnimation("jerryTeasing");
    }
}