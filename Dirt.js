class Dirt{
    constructor(x,y,width,height){
        this.x =x;
        this.y =y;
        this.width = width;
        this.height = height;

        this.body= Bodies.rectangle(x,y,width,height,{isStatic:true});
        this.image = loadImage("Pictures/dirt.png");
        World.add(world,this.body);
    }

    display(){
        imageMode(CENTER);
        image(this.image, this.x, this.y, this.width, this.height);
    }
}