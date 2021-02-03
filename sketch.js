const Engine= Matter.Engine;
const Bodies= Matter.Bodies;
const World= Matter.World;
const Detector = Matter.Detector;

var backgroundImg = [];

var stone1,stone2,stone3,stone4,stone5,stone6,stone7,stone8,stone9,stone10,stone11,stone12,
    stone13,stone14,stone15,stone16,stone17,stone18,stone19,stone20,stone21,stone22,stone23;

var spike13;

var level=1;
var gameState ="Intro";

var player;

var healthSprite;

var chest,powerUp;
var chestAct= "0";

function preload() {
  backgroundImg[0] = loadImage("Pictures/background1.jpg");
  backgroundImg[1] = loadImage("Pictures/background2.jpg");
  backgroundImg[2] = loadImage("Pictures/background3.jpg");
  backgroundImg[3] = loadImage("Pictures/background4.jpg");
  backgroundImg[4] = loadImage("Pictures/background5.png");
}

function setup() {
  createCanvas(displayWidth-30,displayHeight-30);

  engine=Engine.create();
  world=engine.world;

  player= new Player(displayWidth/6,displayHeight-130);
  console.log(player);
 
  if(level===1){
    stone1= new Stone(displayWidth/6,displayHeight-100,200,20);
    stone2= new Stone(displayWidth-1000,displayHeight-140,200,20);
    stone3= new Stone(displayWidth-850,displayHeight-200,200,20);
    stone4= new Stone(displayWidth-650,displayHeight-180,200,20);
    stone5= new Stone(displayWidth-450,displayHeight-160,200,20);
    stone6= new Stone(displayWidth-320,displayHeight-140,200,20);
    stone7= new Stone(displayWidth-180,displayHeight-190,200,20);
    stone8= new Stone(displayWidth-320,displayHeight-250,200,20);
    stone9= new Stone(displayWidth-180,displayHeight-310,200,20);
    stone10= new Stone(displayWidth-320,displayHeight-350,200,20);
    stone11= new Stone(displayWidth-500,displayHeight-400,200,20);    
    stone12= new Stone(displayWidth-800,displayHeight-310,200,20);
    stone13= new Stone(displayWidth-950,displayHeight-370,200,20);
    
    spike13= new Spike(displayWidth-800,displayHeight-333,20,40)
    
    stone14= new Stone(displayWidth-1100,displayHeight-400,200,20);
    stone15= new Stone(displayWidth-1250,displayHeight-440,200,20);
    stone16= new Stone(displayWidth-1150,displayHeight-510,200,20);
    stone17= new Stone(displayWidth-1250,displayHeight-580,200,20);
    stone18= new Stone(displayWidth-1100,displayHeight-620,200,20);
    stone19= new Stone(displayWidth-900,displayHeight-620,200,20);
    stone20= new Stone(displayWidth-750,displayHeight-580,200,20);
    stone21= new Stone(displayWidth-650,displayHeight-450,200,20);
    stone22= new Stone(displayWidth-500,displayHeight-620,200,20);

    healthSprite= new Health(10);
    
   // chest= new Chest()
   
var rand=Math.round(random(2,21));

    switch (rand){
      //case 1 : chest=spawnChest(1200,170)      

      case 2 : chest=spawnChest(1000,140);
              break;
      case 3 : chest=spawnChest(850,200);
              break;
      case 4 : chest=spawnChest(650,180);
              break;
      case 5 : chest=spawnChest(450,160);
              break;
      case 6 : chest=spawnChest(320,140);
              break;
      case 7 : chest=spawnChest(180,190);
              break;
      case 8 : chest=spawnChest(320,250);
              break;
      case 9 : chest=spawnChest(180,310);
              break;
      case 10 : chest=spawnChest(320,350);
              break;
      case 11 : chest=spawnChest(500,400);
              break;
      case 12 : chest=spawnChest(950,370);
              break;
      case 13 : chest=spawnChest(950,370);
              break;
      case 14 : chest=spawnChest(1100,400);
              break;
      case 15 : chest=spawnChest(1250,440);
              break;
      case 16 : chest=spawnChest(1150,510);
              break;
      case 17 : chest=spawnChest(1250,580);
              break;
      case 18 : chest=spawnChest(1100,620);
              break;
      case 19 : chest=spawnChest(900,620);
              break;
      case 20 : chest=spawnChest(750,580);
              break;
      case 21 : chest=spawnChest(650,450);
              break;
      default: break;
    }
  }
}

function draw() {
  background(255);
  //background(backgroundImg[0]);
  Engine.update(engine);

  //player.display();

  if (healthSprite.hp.length < 7 && healthSprite.hp.length > 3){
    for (var i = 0; i < healthSprite.hp.length; i++){
      healthSprite.hp[i].shapeColor = "yellow";
    }
  }
  if (healthSprite.hp.length < 4){
    for (var i = 0; i < healthSprite.hp.length; i++){
      healthSprite.hp[i].shapeColor = "red";
    }
  }

  if(player.body.isTouching(spike13.body)){
    healthSprite.hp.pop();
  }


  if(player.body.isTouching(chest.body) && chestAct===1){
        chestAct =2;
        powerUp=Math.round(random(1,3));
        console.log(powerUp);
      }
      


  drawSprites();
  player.display();
  chest.display();
  spike13.display();
}

function keyPressed(){

	if(keyCode ===UP_ARROW && powerUp ===1){
		player.body.position.y=player.body.position.y-30;
	} else if(keyCode === UP_ARROW ){
		player.body.position.y=player.body.position.y-20;
	}

	if(keyCode ===LEFT_ARROW && powerUp ===1){
		player.body.position.x=player.body.position.x-30;
	} else if(keyCode === LEFT_ARROW ){
		player.body.position.x=player.body.position.x-20;
	}

	if(keyCode ===RIGHT_ARROW && powerUp ===1){
		player.body.position.x=player.body.position.x+30;
	}else if(keyCode === RIGHT_ARROW  ){
		player.body.position.x=player.body.position.x+20;
	}

	if(keyCode === DOWN_ARROW && powerUp ===1){
		player.body.position.y=player.body.position.y+30;
	}else if(keyCode ===  DOWN_ARROW ){
		player.body.position.y=player.body.position.y+20;
	}

}

function spawnChest(x,y){
  chest= new Chest(displayWidth-x,displayHeight-23-y);
  return chest;
}
