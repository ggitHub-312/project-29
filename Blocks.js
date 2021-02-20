class Blocks{
constructor(x,y,width,height){
    var options = {
        restituion:1
    }
    this.body = Bodies.rectangle(x,y,width,height)
    World.add(world,this.body)
}
display(){
    var pos = this.body.position;
    rectMode(CENTER)
    fill("blue")
    rect(pos.x,pos.y,this.width,this.height)


}



}