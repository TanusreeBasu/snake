class Snake{
    constructor(x,y){
var options ={
    isStatic:true,
    friction:0.04,
    density:0.2
}

            this.width = 10;
          this.height =10;
        this.body = Bodies.rectangle(x,y,10,10,options)
        World.add(world,this.body);
        
    }

    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
          rotate(angle)
        rectMode(CENTER)
        rect(0,0, this.width, this.height);
        pop();
    }
}