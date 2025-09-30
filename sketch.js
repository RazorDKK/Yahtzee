let mySkema;
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
  mySkema = new pointskema(1, 2, 3, 4, 5, 1);
  mySkema.check();
  terningCreate();
}

function draw() {
  background(220);
  mySkema.draw();
  if (rolltrue == false) {
    terninger();
  }
  rollKnapDraw();
  if (rolltrue) {
    rollingFunc();
    terningHitEachother();
  } else {
    terninger();
  }
}

function terningCreate() {
  for (let i = 1; i < 6; i++) {
    terningearray.push(
      new Terning(0, random(0, width / 2), random(0, height / 2), 50)
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
    for (terning of terningearray) {
      terning.vx = random(-2, 2);
      terning.vy = random(-2, 2);
    }
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
  if (rolltrue == false) {
    terningChoose();
  }
}

function terningHitEachother() {
  for (let i = 0; i < terningearray.length; i++) {
    for (let j = i + 1; j < terningearray.length; j++) {
      let t1 = terningearray[i];
      let t2 = terningearray[j];
      let tdist = dist(t1.x, t1.y, t2.x, t2.y);
      if (tdist < t1.size) {
        t1.vx = t1.vx * -1;
        t1.vy = t1.vy * -1;
        t2.vx = t2.vx * -1;
        t2.vy = t2.vy * -1;
      }
    }
  }
}

function terningChoose() {
  for (let i = terningearray.length - 1; i >= 0; i--) {
    let terning = terningearray[i];
    if (
      mouseX < terning.x + terning.size &&
      mouseX > terning.x &&
      mouseY < terning.y + terning.size &&
      mouseY > terning.y
    ) {
      terning.chosen = 1;
      terningearray.splice(i, 1);
    }
  }
}
