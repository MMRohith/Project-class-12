var jaxon,abc
var path,acb
var invisibleGround


function preload(){
  //pre-load images
  loadImage("acb",path.png)
loadAnimation("abc",Runner-1.png,Runner-2.png)

}

function setup(){
  createCanvas(800,400);
  //create sprites here
jaxon=createSprite(200,300,40,40)
jaxon.addAnimation(boy)
path.addAnimation(acb)
}

function draw() {
  background("blue");

path.x=path.x/2
path.velocityX=4

}
