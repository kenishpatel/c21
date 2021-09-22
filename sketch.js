var bg,sleep,bath,gym,iss,moving,drink,eat;
var issimage,sleepimage,gymimage,movingimage,eatimage,drinkimage,bathimage;

function perload(){
bg= loadImage("images/iss.png");
sleep= loadAnimation("images/sleep.png");
brush= loadAnimation("images/brush.png");
drink= loadAnimation("images/drink.png");
move= loadAnimation("images/move1.png");
gym= loadAnimation("images/gym21.png","images/gym22.png");
eat= loadAnimation("images/eat1.png");
}




function setup() {
  createCanvas(400, 400);


}

function draw() {
  background(220);
  astronaut = createSprite(300,230);
  astronaut.addAnimation("sleeping",sleep);
  astronaut.scale = 0.1;

if(keydown("UP ARROW")){
astronaut.addAnimation("brushing", brush);
astronaut.changeAnimation("brushing");
astronaut.y = 350;
astronaut.velocityX = 0;
astronaut.velocityY = 0;
} 



drawsprite()



}