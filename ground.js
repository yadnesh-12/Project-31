class Ground{
    constructor(x,y,width,height){
        var option= {
            isStatic:true,
            visible:false
        }
        this.body=Bodies.rectangle(x,y,width,height,option);
        World.add(world, this.body);

    }
    
}