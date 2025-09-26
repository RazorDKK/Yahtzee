let mySkema;

function setup() {
  createCanvas(600, 800);
  mySkema = new pointskema(1, 2, 3, 4, 5);
}

function draw() {
  background(220);
  mySkema.draw();
}
