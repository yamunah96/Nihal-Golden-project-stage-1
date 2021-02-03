class Player{
    constructor(x,y){
        this.x =x;
        this.y =y;

        //this.body= Bodies.rectangle(x,y,10,30);
        this.body = createSprite(x, y, 10, 10);
        //this.body.visible = false;
        this.image = loadImage("Pictures/player pictures/jump.png");
        this.body.addImage(this.image);
        this.body.velocityY = this.body.velocityY + 0.5;
        World.add(world,this.body);
    }

    display(){
        imageMode(CENTER);
        image(this.image,this.body.position.x,this.body.position.y)
    }
}