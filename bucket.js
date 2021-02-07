class Bucket {
    constructor(x, y, width, height) {
      var options = {
        'restitution': 0.3,
        'friction': 0.5,
        'density': 1.2,
        'isStatic': true,
      }
  
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.image = loadImage("4.png");
  
      World.add(world, this.body);
    }
    display() {
  
      rectMode(CENTER)
      var pos = this.body.position;
      push();
      fill("white")
      stroke("white")
      translate(pos.x, pos.y);
      rect(0, 0, this.width, this.height);
      imageMode(CENTER);
      image(this.image, 0, -75, 180, 180);
      pop();
  
    }
  }