class Ground{
    constructor(x,y,width,height){
        var options={
            isStatic : true
        }

         this.height=height;
         this.width=width;
         this.body = Bodies.rectangle(x,y,width,height,options);

         World.add(world,this.body);
    }

    display(){
        push();
        
        rectMode(CENTER);
        fill("brown");
        rect(this.body.position.x,this.body.position.y,this.width,this.height);
        pop();
    }
};