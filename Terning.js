class Terning {
  constructor(number, x, y, size) {
    this.chosen = number;
    this.x = x;
    this.y = y;
    this.vx = random(-2, 2);
    this.vy = random(-2, 2);
    this.size = size;
    this.number;
  }

  roll() {
    if (this.chosen == 0) {
      this.number = floor(random(1, 7));
    }
  }

  show() {
    stroke(0);
    fill(255);
    rect(this.x, this.y, this.size, this.size, 6);
    fill(0);
    noStroke();
    textSize(this.size * 0.5);
    text(this.number, this.x + this.size / 3, this.y + this.size / 1.5);
  }

  showMoving() {
    image(rollingDice, this.x - 8, this.y - 8, this.size + 16, this.size + 16);
  }

  move() {
    this.x = this.x + this.vx;
    this.y = this.y + this.vy;
  }

  wall() {
    if (this.x >= width / 2 - this.size) {
      this.vx = this.vx * -1;
    }
    if (this.y >= height / 2 - this.size) {
      this.vy = this.vy * -1;
    }
    if (this.x <= 0) {
      this.vx = this.vx * -1;
    }
    if (this.y <= 0) {
      this.vy = this.vy * -1;
    }
  }
}
