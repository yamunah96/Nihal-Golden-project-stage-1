class Stone{
    constructor(x,y,width,height){
        this.x =x;
        this.y =y;
        this.width = width;
        this.height = height;

        this.body = createSprite(x, y, width, height);
        this.image = loadImage("Pictures/cobbleStone.jpg");
        this.body.addImage(this.image);
        World.add(world,this.body);
    }
} 