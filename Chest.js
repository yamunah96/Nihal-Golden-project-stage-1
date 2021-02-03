class Chest {
    constructor(x, y) {
        this.x = x;
        this.y = y;

        this.body = createSprite(x, y, 10, 10);
        this.image = loadImage("Pictures/chest.png");
        this.body.addImage(this.image);
        this.body.scale = 0.2;
        World.add(world, this.body);
    }


    display() {
        imageMode(CENTER);
        image(this.image, this.body.position.x, this.body.position.y,10,10)
    }
}