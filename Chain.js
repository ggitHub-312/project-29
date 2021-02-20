class SlingShot{

    constructor(b1,b2){
        var options ={
            bodyA:b1,
            pointB:b2,
            length:10,
            stiffness:0.05
        }
        this.pointB= b2;
        this.link=Constraint.create(options)
        this.sling1 = loadImage("sprites/sling1.png")
        this.sling2 = loadImage("sprites/sling2.png")
        this.sling3 = loadImage("sprites/sling3.png")
        World.add(world,this.link)

    }
    display(){


        image(this.sling1,200,10)
        image(this.sling2,170,10)
        if (this.link.bodyA){


        
        var p1 = this.link.bodyA.position
        var p2 = this.pointB
        push()
        stroke(48,22,8)
        if(p1.x<210){

        
        strokeWeight(6)
        line(p1.x-15,p1.y,p2.x-10,p2.y)
        line(p1.x-20,p1.y,p2.x+30,p2.y)
        image(this.sling3,p1.x-30,p1.y-5,15,25)
        }
        else{
            strokeWeight(4)
        line(p1.x+20,p1.y,p2.x-10,p2.y)
        line(p1.x+25,p1.y,p2.x+30,p2.y)
        image(this.sling3,p1.x+25,p1.y-5,15,25) 
        }
        pop()
    }
}

     fly(){
        this.link.bodyA = null;
    }

    attach(body){

    this.link.bodyA = body
    }
}