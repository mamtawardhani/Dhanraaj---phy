//namespacing
const E = Matter.Engine
const W = Matter.World
const B = Matter.Bodies

var en , wo
var box
function setup() {
  createCanvas(400,400);
  //creating the engine
    en = E.create()
    //accessing world from the engine
    wo = en.world
    console.log(wo)

  box = B.rectangle(100,100,30,30)
  W.add(wo, box)

}

function draw() {
  E.update(en)
  background(0); 
  rectMode(CENTER)
 rect(100,box.position.y,30,30)
  
}


//rectangle => rect()
//circle => ellipse()
//polygon => vertex()