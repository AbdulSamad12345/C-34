class Box{
    constructor(x,y){
        var options={
            density:1,
            friction:0.5,
            restitution:0.5
        }

        this.body = Bodies.rectangle(x,y,75,75,options);
        this.height=75;
        this.width=75;
        World.add(world,this.body);
    }

    display(){
        
        var angle = this.body.angle
        push();
        translate(this.body.position.x,this.body.position.y);
        rotate(angle);
        rectMode(CENTER);
        strokeWeight(4);
        stroke("green");
        fill("white");
        rect(0,0,this.width,this.height);
        pop();
    }
}