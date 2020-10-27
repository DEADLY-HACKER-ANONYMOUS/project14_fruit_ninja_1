

//for creating the variables
var knife, knifeimage;

var bomb, bombimage;

var fruit1group, fruit2group, fruit3group, fruit4group;

var fruit1, fruit2, fruit3, fruit4;

var fruitimage, fruit2image, fruit3image, fruit4image;

var PLAY = 0;

var END = 1;

var gameState = PLAY;

var gameover;

var score;

var x;

var missed;

var line;

var eleminate1;

var eliminate2;

var eleminate3;

var eleminate4;

var eleminate5;

var eliminate6;

var eliminate7;

var invisiblebomb;

function preload() {

  //for the images
  knifeimage = loadImage("sword.png");

  bombimage = loadAnimation("alien1.png", "alien2.png");

  fruit1image = loadImage("fruit1.png");

  fruit2image = loadImage("fruit2.png");

  fruit3image = loadImage("fruit3.png");

  fruit4image = loadImage("fruit4.png");

  gameoverimage = loadImage("gameover.png");
  
  gameoversound = loadSound("gameover.mp3")
  
  knifesound = loadSound("knifeSwooshSound.mp3")

}



function setup() {

  //to create the canvas
  createCanvas(1270, 600)

  //to initially keep the score as 0
  score = 0
  
  //creating the lines between origin of fruits and the knife
  line = createSprite(5, 600, 10, 1400)

  //to initially keep the gamestate as play
  gameState = PLAY

  //for the image gameover
  gameover = createSprite(635, 300, 10, 10)
  gameover.addImage(gameoverimage)

  //to create the knife
  knife = createSprite(10, 10, 10, 10)

  //to create separate groups for fruit1,fruit2,fruit3,fruit4 and bomb
  fruit1group = createGroup();
  fruit2group = createGroup();
  fruit3group = createGroup();
  fruit4group = createGroup();
  bombgroup = createGroup();

  //to make missed initially=0
  missed = 0

  //to create the line in between the knife and the origin of the fruits and bombs
  //we can use for loop but when i use it the program became slower...
  eliminate1 = createSprite(520, 100, 2, 40)
  eliminate2 = createSprite(520, 200, 2, 40)
  eliminate3 = createSprite(520, 300, 2, 40)
  eliminate4 = createSprite(520, 400, 2, 40)
  eliminate5 = createSprite(520, 500, 2, 40)
  eliminate6 = createSprite(520, 600, 2, 40)
  eliminate7 = createSprite(520, 0, 2, 40)

}



//give the function which u want to repeat forever
function draw() {

  //to set te scale of image of the knife
  knife.scale = 0.5

  //for the background color
  background("yellow")

  //for the image of the knife
  knife.addImage(knifeimage)

  //to count how many fruits are missed and instead of the lifetime
  line.visible = false

  //to count how many fruits are missed and instead of the lifetime
  if (fruit1group.isTouching(line)) {
    fruit1group.destroyEach();
    missed = missed + 1
  }

  //to count how many fruits are missed and instead of the lifetime
  if (fruit2group.isTouching(line)) {
    fruit2group.destroyEach();
    missed = missed + 1
  }

  //to count how many fruits are missed and instead of the lifetime
  if (fruit3group.isTouching(line)) {
    fruit3group.destroyEach();
    missed = missed + 1
  }

  //to count how many fruits are missed and instead of the lifetime
  if (fruit4group.isTouching(line)) {
    fruit4group.destroyEach();
    missed = missed + 1
  }

  //to count how many fruits are missed and instead of the lifetime
  if (bombgroup.isTouching(line)) {
    bombgroup.destroyEach();
  }

  // to make the player out when 5 frutis are missed
  if (missed === 5) {
    gameState = END
  }

  //to change the background according to the score
  if (score > 10) {
    background("lime")
  }

  if (score > 15) {
    background("blue")
  }

  if (score > 20) {
    background("black")
  }

  if (score > 30) {
    background("space")
  }

  if (score > 40) {
    background("maroon")
  }

  if (score > 50) {
    background("pink")
  }

  if (score > 60) {
    background("orange")
  }
  if (score > 70) {
    background("violet")
  }
  if (score > 80) {
    background("lightblue")
  }

  //to destroy fruits when knife is touching them
  if (knife.isTouching(fruit1group)) {
    fruit1group.destroyEach();
    score = score + 1
    
  }

  if (knife.isTouching(fruit2group)) {
    fruit2group.destroyEach();
    score = score + 1
    
  }

  if (knife.isTouching(fruit3group)) {
    fruit3group.destroyEach();
    score = score + 1
    
  }

  if (knife.isTouching(fruit4group)) {
    fruit4group.destroyEach();
    score = score + 1
     
  }

  //to make the player out when the knife is touching bomb
  if (knife.isTouching(bombgroup)) {
    gameState = END
 
   
  }

  //features we want when we r out
  if (gameState === END) {
   
    //to indicate that u r out
    gameover.visible = true
    gameover.scale = 2

    eliminate1.visible = false
    eliminate2.visible = false
    eliminate3.visible = false
    eliminate4.visible = false
    eliminate5.visible = false
    eliminate6.visible = false
    eliminate7.visible = false
   //to destroy the fruits in the screen when we are out
    fruit4group.destroyEach();
    fruit3group.destroyEach();
    fruit2group.destroyEach();
    fruit1group.destroyEach();
    bombgroup.destroyEach();

    //to make the bomb at rest
    bombgroup.setVelocityXEach(0)

    //to restart
    textSize(30)
    textFont("lucida")
    text("PRESS SPACE TO RESTART", 450, 450)

    //restart
    if (keyDown("space")) {
      gameState = 0
      score = 0
      missed = 0
      bombgroup.destroyEach();
    }
  }


  //features we want when we are playing
  if (gameState === PLAY) {
    gameover.visible = false

    bombgroup.setVelocityXEach(-8)

    eliminate1.visible = true
    eliminate2.visible = true
    eliminate3.visible = true
    eliminate4.visible = true
    eliminate5.visible = true
    eliminate6.visible = true
    eliminate7.visible = true
    //to make the knife move only when we are playing
    knife.x = mouseX
    knife.y = mouseY


    //to create random fruits and the bombs
    var x = Math.round(random(1, 5))
    if (frameCount % 55 === 0 && x === 1) {
      fruit1f();

    }

    if (frameCount % 55 === 0 && x === 2) {
      fruit2f();

    }

    if (frameCount % 55 === 0 && x === 3) {
      fruit3f();

    }

    if (frameCount % 55 === 0 && x === 4) {
      fruit4f();

    }

    if (frameCount % 35 === 0 && x === 5) {
      bombf();

    }

  }



  drawSprites();
  //for the texts
  textSize(20)
  textFont("lucida")
  text("CATCH THE FRUITS NOT THE BOMBS", 100, 30)
  text("SCORE:" + score, 1100, 30)
  text("MISSED:" + missed, 1100, 60)
}

//function to create the fruit1
function fruit1f() {

  fruit1 = createSprite(Math.round(random(550, 1000)), Math.round(random(100, 500)), 10, 10)

  fruit1.addImage(fruit1image)

  fruit1.scale = 0.15

  fruit1.velocityX = -(8)

  fruit1group.add(fruit1)

}

//function to  create fruit2
function fruit2f() {

  fruit2 = createSprite(Math.round(random(550, 1000)), Math.round(random(100, 500)), 10, 10)

  fruit2.addImage(fruit2image)

  fruit2.scale = 0.15

  fruit2.velocityX = -(8)

  fruit2group.add(fruit2)


}

//function to create fruit3
function fruit3f() {

  fruit3 = createSprite(Math.round(random(550, 1000)), Math.round(random(100, 500)), 10, 10)

  fruit3.addImage(fruit3image)

  fruit3.scale = 0.15

  fruit3.velocityX = -(8)

  fruit3group.add(fruit3)

}

//function to create fruit4
function fruit4f() {

  fruit4 = createSprite(Math.round(random(550, 1000)), Math.round(random(100, 500)), 10, 10)

  fruit4.velocityX = -(8)

  fruit4.addImage(fruit4image)

  fruit4.scale = 0.15

  fruit4group.add(fruit4)

}

//function to create bomb
function bombf() {

  bomb = createSprite(Math.round(random(550, 1000)), Math.round(random(100, 500)), 10, 10)

  bomb.addAnimation("bomb", bombimage)

  bomb.scale = 0.5

  bomb.velocityX = -(8)

  bombgroup.add(bomb)

}
