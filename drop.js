class Drop {
    constructor(x,y,radius){
        this.body=Bodies.circle(x,y,radius);
        World.add(world,this.body);
        this.radius=radius;
    }
    display(){
        var pos=this.body.position;
        fill("blue");
        ellipseMode(RADIUS);
        ellipse(pos.x,pos.y,this.radius,this.radius);

        if(this.body.position.y > height){
            Matter.Body.setPosition(this.body, {x:random(0,400), y:random(0,400)});   
        }
    }
}