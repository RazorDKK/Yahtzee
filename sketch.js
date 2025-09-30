let terningearray = [];
let rollTime = Date.now();
let rolltrue = false;
let rollingDice;

function preload() {
  rollingDice = loadImage("dice-game.gif");
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
  }
}

function rollKnapDraw() {
  fill(255);
  stroke(0);
  rect(0, 0, 50, 20);
  noStroke();
  fill(0);
  textSize(12);
  text("Roll", 25, 10);
}

function rollPressed() {
  if (mouseX < 50 && mouseX > 0 && mouseY < 20 && mouseY > 0) {
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
