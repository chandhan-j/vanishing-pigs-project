class Box {
  constructor(x, y, width, height) {
    var options = {
        'restitution':0.2,
        'friction':0.1
            }
    this.visibility = 255;
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    
    
    World.add(world, this.body);
  }
  display(){

    if(this.body.speed < 8){
      var pos =this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    rectMode(CENTER);
    strokeWeight(4);
    stroke("green");
    fill(255);
    rect(0, 0, this.width, this.height);
    pop();
     }else{
        World.remove(world, this.body);
        push();
        this.visibility = this.visibility - 5;
        tint(255,this.visibility);
        pop();
     }

  }
}