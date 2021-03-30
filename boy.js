class Boy{
    constructor(x,y,width,height){
        var option = {
            isStatic:true,
        }
        this.body=Bodies.rectangle(x,y,width,height,option);
        this.width = width;
        this.height = height;
        this.image= loadImage("Walking Frame/walking_1.png")
        World.add(world,this.body);
        this.body.scale=0.5;
        
        
    }
    display(){
        var pos= this.body.position;
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,this.width,this.height);
    }
}