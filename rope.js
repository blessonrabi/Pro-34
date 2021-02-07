class Rope{
constructor(bodyA,bodyB){
var options={
bodyA:bodyA,
bodyB:bodyB,
stiffness:0.01,
length:10
}
this.pointB=pointB;
this.rope=Constraint.create(options);
World.add(world,this.rope);
}
fly(){
this.rope.bodyA=null;
}
Launch(bodyA){
this.rope.bodyA=bodyA;
}
display(){
    
}
}
