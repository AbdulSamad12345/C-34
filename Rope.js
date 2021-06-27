class Rope{
    constructor(bodyA,pointB){
        var options={
            bodyA:bodyA,
            pointB:pointB,
            stiffness:0.5,
            length:300
        }
        this.bodyA=bodyA;
        this.pointB=pointB;
        this.rope = Constraint.create(options)

        World.add(world,this.rope)
    }
    display(){
        var PointA = this.rope.bodyA.position;
        var PointB = this.pointB;

        push();
        strokeWeight(5);
        line(PointB.x,PointB.y,PointA.x,PointA.y);
        pop();
    }
}