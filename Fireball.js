class Fireball{
    constructor(x,y,width,height){
        this.x =x;
        this.y =y;
        this.width = width;
        this.height = height;

        //this.body= Bodies.rectangle(x,y,width,height,{isStatic:false});
      
        this.image = loadImage("Pictures/Fireball.png");
        this.body.addImage(this.image);
        this.body.scale = 0.2;
        World.add(world,this.body);
    }

    /*display(){
        imageMode(CENTER);
        image(this.image, this.x, this.y, this.width, this.height);
    }*/
}