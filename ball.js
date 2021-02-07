class Ball {
    constructor(x,y,radius) {
      var options = {
          'restitution':0.3,
          'friction':0.5,
          'density':1.2,
          'isStatic':false
          
      }
      
      this.body = Bodies.circle(x, y,radius, options);
      this.r = radius;
      this.image = loadImage("3.png");
      
      World.add(world, this.body);
    }
    display(){

      rectMode(CENTER)
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
    rotate(angle);
    fill(255);
    stroke("white")
    ellipse(0,0,this.r,this.r)
    imageMode(CENTER);
    image(this.image, 0, 0, 85,85);
    pop();
    }
}