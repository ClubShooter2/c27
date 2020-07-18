class chain{

constructor(bodyA,bodyB) {
 var options={
  bodyA: bodyA,
  bodyB: bodyB,
  stiffness: 0.03,
  length: 10
 }
this.chain = Constraint.create(options);
World.add(world,this.chain);

}



display(){
strokeWeight(4);
var posA = this.chain.bodyA.position;
var posB = this.chain.bodyB.position;

line(posA.x,posA.y,posB.x,posB.y);




}
















}