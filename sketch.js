let terningearray = [];

function setup() {
  createCanvas(400, 400);
  terningCreate();
}

function draw() {
  background(220);
  terninger();
}

function terningCreate() {
  for (let i = 1; i < 6; i++) {
    terningearray.push(new Terning(i, random(0, width), random(0, height), 50));
  }
}

function terninger() {
  for (let terning of terningearray) {
    terning.show();
    terning.move();
    terning.wall();
  }
}
