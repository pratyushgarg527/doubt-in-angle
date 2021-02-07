class Bucket1 {
    constructor(x,y,width,height,angle) {
      var options = {
          'restitution':0.3,
          'friction':0.5,
          'density':1,
          'isStatic':true,
      }
      
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      Body.setAngle(this.body,angle)
      
      World.add(world, this.body);
    }
    display(){

      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER)
      fill("white")
      stroke("white")
      rect(0, 0, this.width, this.height);
      pop();

   }
  }