let terningearray = [];
let rollTime = Date.now();
let rolltrue = false;
let rollingDice;
let rollKnap;

function preload() {
  rollingDice = loadImage("dice-game.gif");
  rollKnap = loadImage("roll 1.png");
}

function setup() {
  createCanvas(600, 800);
  terningCreate();
}

function draw() {
  background(220);
  if (rolltrue == false) {
    terninger();
  }
  rollKnapDraw();
  if (rolltrue) {
    rollingFunc();
  } else {
    terninger();
  }
}

function terningCreate() {
  for (let i = 1; i < 6; i++) {
    terningearray.push(
      new Terning(0, random(0, width / 2), random(0, height), 50)
    );
  }
}

function terninger() {
  for (let terning of terningearray) {
    terning.show();
  }
}

function terningerMove() {
  for (let terning of terningearray) {
    terning.move();
    terning.wall();
    terning.showMoving();
    terning.buttonWall();
  }
}

function rollKnapDraw() {
  image(rollKnap, 10, 10, 80, 80);
}

function rollPressed() {
  if (mouseX < 85 && mouseX > 5 && mouseY < 90 && mouseY > 10) {
    rolltrue = true;
    rollTime = Date.now();
  }
}

function rollingFunc() {
  if (Date.now() - rollTime <= 2000) {
    terningerMove();
  } else {
    rolltrue = false;
    for (let t of terningearray) {
      t.roll();
    }
  }
}

function mousePressed() {
  rollPressed();
}
