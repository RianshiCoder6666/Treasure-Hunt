var bg, bg2, form, system, security;
var treasure1, treasure2, treasure3;
var lose, win;
var score = 0;

const accessCode1 = "AMBULANCE";
const accessCode2 = "CHILDHOOD";
const accessCode3 = "EMBARRASSMENT";

function preload() {
  bg = loadImage("images/aladdin_cave.jpg");
  bg2 = loadImage("images/treasure.jpg");

  treasure1 = loadImage("images/treasure1.png");
  treasure2 = loadImage("images/treasure2.png");
  treasure3 = loadImage("images/treasure3.png");

  lose = loadSound("sounds/lose.wav");
  win = loadSound("sounds/win.wav");
}

function setup() {
  createCanvas(1000,500);

  system = new System();
  security = new Security();
}

function draw() {
  background(bg);

  clues();
  security.display();
  textSize(20);
  fill("white");
  text("Score: " + score, 450, 50);

  if(score === 3) {
    clear();
    background(bg2);
    fill("black");
    textSize(40);
    text("TREASURE UNLOCKED!!", 250, 200);
    
    image(treasure1, 100, 300, 200, 200);
    image(treasure2, 300, 250, 100, 100);
    image(treasure3, 700, 300, 200, 200);
  }

  drawSprites();
}
