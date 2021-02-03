class Health{
    constructor(amountH){
       
        this.hp = [];
        var x=50;

        for(var i=0;i<amountH;i++){
            var h = createSprite(x+20*i,40,20,20);
            h.shapeColor = "green";
            this.hp.push(h);
        }
    }

}