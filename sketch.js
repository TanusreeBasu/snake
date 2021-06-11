const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies; 
var engine, world, edges;
function setup(){
  createCanvas(500,500);
  engine = Engine.create();
  world = engine.world;


  edges = createEdgeSprites();

  snake = new Snake(200,200)
 //snakebody = createSprite(200, 200,10,10);
 //snakrbody = snake.body.position;
 // apple = new Apple(350,200)

  apple = new Apple(100,200)
apple.body.position.x = Math.round(random(100,400))
apple.body.position.y = Math.round(random(100,400))
}





function draw() {
background("white");
Engine.update(engine);


apple.display(); 
snake.display(); 
 if (keyDown("up")) {

    snake.body.position.y = snake.body.position.y-1;
     }
   if (keyDown("down")) {
    snake.body.position.y = snake.body.position.y+1;
 }
    
    if (keyDown("left")) {
     snake.body.position.x = snake.body.position.x-1;
  }
      if (keyDown("right")) {
        snake.body.position.x = snake.body.position.x+1;
 }
if(apple.body.position.x-snake.body.position.x < snake.body.width/2+apple.body.width/2){
  console.log("red")
}


 //snake.collide(edges)
  
  drawSprites();
  
}
function spawnapple(){


}