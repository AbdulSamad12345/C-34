class Ball{
    constructor(x,y,width,height){
        var options={
            density:1,
            friction:0.5,
            restitution:0.5
        }

        this.body = Bodies.rectangle(x,y,width,height,options);
        this.height=height;
        this.width=width;
        World.add(world,this.body);

    }
    display(){
        
        var angle = this.body.angle
        push();
        translate(this.body.position.x,this.body.position.y);
        rotate(angle);
        fill("red");
        ellipse(0,0,this.width,this.height);
        pop();
    }
}