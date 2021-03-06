const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world;

var ground,ground2;

var block1,block2,block3,block4;

var polygonImg;

var chain;



function preload(){

    polygonImg = loadImage("polygon.png")

}




function setup(){

createCanvas(1200,800)

engine = Engine.create()
world = engine.world

polygon = Bodies.circle(150,200,20)
World.add(world,polygon)




ground = new Ground(600,750,1200,20)
ground2 = new Ground(600,550,450,20)


block1 = new Blocks(510,500,50,50)
block2 = new Blocks(560,500,50,50)
block3 = new Blocks(610,500,50,50)
block4 = new Blocks(660,500,50,50)

block5 = new Blocks(540,450,50,50)
block6 = new Blocks(590,450,50,50)
block7 = new Blocks(640,450,50,50)

block8 = new Blocks(570,400,50,50)
block9 = new Blocks(620,400,50,50)

block10 = new Blocks(600,350,50,50)



}





function draw(){

    background("black")
    Engine.update(engine)

    textSize(16)
    text("Drag the Hexagonal stone and release it,to launch it towards the blocks",550,200)

    imageMode(CENTER)
    image(polygonImg,polygon.position.x,polygon.position.y,40,40)

    ground.display()
    ground2.display()

    block1.display()
    block2.display()
    block3.display()
    block4.display()

    block5.display()
    block6.display()
    block7.display()

    block8.display()
    block9.display()

    block10.display()





}
