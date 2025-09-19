class Terning {
  constructor(number, x, y, size) {
    this.number = number;
    this.x = x;
    this.y = y;
    this.vx = random(-1, 1);
    this.vy = random(-1, 1);
    this.size = size;
  }

  roll() {
    if ((this.number = 0)) {
      this.number = floor(random(1, 6));
    }
  }

  show() {
    circle(this.x, this.y, this.size);
  }

  move() {
    this.x = this.x + this.vx;
    this.y = this.y + this.vy;
  }

  wall() {
    if (this.x >= width - this.size / 2) {
      this.vx = this.vx * -1;
    }
    if (this.y >= height - this.size / 2) {
      this.vy = this.vy * -1;
    }
    if (this.x <= this.size / 2) {
      this.vx = this.vx * -1;
    }
    if (this.y <= this.size / 2) {
      this.vy = this.vy * -1;
    }
  }
}
