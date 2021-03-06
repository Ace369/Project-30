class Box{
  constructor(x, y, width, height, angle) {
    var options = {
        'restitution':0.4,
        'friction':1.0
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    this.Visiblity = 255;
    World.add(world, this.body);
  }
  
    display(){

      var angle = this.body.angle;

      if(this.body.speed < 5){
      this.body.display;
      push(); 
      translate(this.body.position.x, this.body.position.y); 
      rotate(angle); 
      rectMode(CENTER); 
      rect(0,0, this.width, this.height);
      pop ();

       }
       else{
        World.remove(world, this.body);
        push();
        this.Visiblity = this.Visiblity - 5;
        tint(255,this.Visiblity);
        rect(this.body.position.x, this.body.position.y, this.width, this.height);
        pop();
      }
      
    }
   
  };