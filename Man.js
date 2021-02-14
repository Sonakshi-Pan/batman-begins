class Man {
    constructor(x,y){
        var options = {
            isStatic: true,
        }
        this.image = loadImage("WalkingFrame/walking_1.png");
        
        this.man = Bodies.circle(x,y,50,options);
        this.radius = 50;
        World.add(world, this.man)
    }

    display(){
        var pos = this.man.position;
        imageMode(CENTER);
        image(this.image,pos.x,pos.y+70,300,300);
        
    }
}