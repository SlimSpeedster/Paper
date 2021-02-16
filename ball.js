class Ball {
  constructor(x, y, r) {
    var options = {
        'restitution':0.3,
        'friction':0.0,
        'density':1.2,
        'isStatic' : false
        
    }
    this.x=x; 
    this.y=y; 
    this.r=r;
    this.image=loadImage("paper.png"); 

    this.body=Bodies.circle(this.x, this.y, (this.r-20)/2, options)

    //this.width = 30;
    //this.height = 30;
    //this.image = loadImage("paper.png");

    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER);
    strokeWeight(4);
    stroke("lightgreen");
    fill("orange");
    image(this.image,0, 0, this.r, this.r);
    pop();
  }
};
