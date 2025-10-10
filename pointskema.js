class pointskema {
  constructor(num1, num2, num3, num4, num5, player) {
    this.number = [num1, num2, num3, num4, num5];
    this.width = 200;
    this.height = 800;

    if (player === 1) {
      this.player1 = true;
    } else {
      this.player1 = false;
    }

    this.text = [
      "Spiller",
      "1'er",
      "2'er",
      "3'er",
      "4'er",
      "5'er",
      "6'er",
      "3 ens",
      "4 ens",
      "Hus",
      "Lille straight",
      "Stor straight",
      "Yahtzee",
      "Chance",
    ];

    this.mpoint1 = new Array(14).fill(0);
    this.mpoint2 = new Array(14).fill(0);
    this.cols = [this.text, this.mpoint1, this.mpoint2];

    this.mpoint1[0] = 1;
    this.mpoint2[0] = 2;
  }

  check() {
    console.log(this.number);
    this.number.sort();
    console.log(this.number);

    if (this.player1 === true) {
      this.muligpoint = this.mpoint1;
    } else {
      this.muligpoint = this.mpoint2;
    }

    for (let i = 0; i < this.muligpoint.length; i++) {
      this.muligpoint[i] = 0;
    }

    // checker 1'er 2'er 3'er 4'er 5'er 6'er
    for (let j = 1; j < 7; j++) {
      for (let i = 0; i < this.number.length; i++) {
        if (this.number[i] === j) {
          this.muligpoint[j] += j;
        }
      }
    }

    // checker om 3 ens
    for (let i = 0; i < 3; i++) {
      if (
        this.number[i] === this.number[i + 1] &&
        this.number[i] === this.number[i + 2]
      ) {
        let sum = this.number[i] + this.number[i + 1] + this.number[i + 2];
        if (this.muligpoint[7] < sum) {
          this.muligpoint[7] = sum;
        }
      }
    }

    // checker om 4 ens
    for (let i = 0; i < 2; i++) {
      if (
        this.number[i] === this.number[i + 1] &&
        this.number[i] === this.number[i + 2] &&
        this.number[i] === this.number[i + 3]
      ) {
        let sum =
          this.number[i] +
          this.number[i + 1] +
          this.number[i + 2] +
          this.number[i + 3];
        if (this.muligpoint[8] < sum) {
          this.muligpoint[8] = sum;
        }
      }
    }

    // checker for fuldt hus
    if (
      this.number[0] === this.number[1] &&
      this.number[2] === this.number[3] &&
      this.number[2] === this.number[4] &&
      this.number[0] !== this.number[4]
    ) {
      this.muligpoint[9] = this.number.reduce((a, b) => a + b, 0);
    } else if (
      this.number[0] === this.number[1] &&
      this.number[0] === this.number[2] &&
      this.number[3] === this.number[4] &&
      this.number[0] !== this.number[4]
    ) {
      this.muligpoint[9] = this.number.reduce((a, b) => a + b, 0);
    }

    // lille straight
    if (this.number.toString() === [1, 2, 3, 4, 5].toString()) {
      this.muligpoint[10] = 15; // 1+2+3+4+5
    }

    // stor straight
    if (this.number.toString() === [2, 3, 4, 5, 6].toString()) {
      this.muligpoint[11] = 20; // 2+3+4+5+6
    }

    // yahtzee
    if (this.number[0] === this.number[4]) {
      this.muligpoint[12] = this.number.reduce((a, b) => a + b, 0);
    }

    // chance
    this.muligpoint[13] = this.number.reduce((a, b) => a + b, 0);
  }

  draw() {
    let offsetX = width - this.width; // shift table to right side
    fill(200);
    stroke(1);
    // draw grid
    for (let i = 0; i < 14; i++) {
      for (let j = 0; j < 3; j++) {
        rect(
          offsetX + j * (this.width / 3),
          i * (this.height / 14),
          this.width / 3,
          this.height / 14
        );
      }
    }
    noStroke();
    fill(0);
    // draw text
    textAlign(CENTER, CENTER);
    for (let j = 0; j < this.cols.length; j++) {
      for (let i = 0; i < this.cols[j].length; i++) {
        let x = offsetX + (j + 0.5) * (this.width / 3);
        let y = (i + 0.5) * (this.height / 14);
        text(this.cols[j][i], x, y);
      }
    }
  }
}
