class pointskema {
  constructor(num1, num2, num3, num4, num5) {
    this.number = [num1, num2, num3, num4, num5];
    this.width = 200;
    this.height = 800;

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

    this.mpoint = new Array(14).fill(0);
    this.cols = [this.text, this.mpoint, this.mpoint];

    // boble-sortering af terningerne
    for (let j = 0; j < 7; j++) {
      for (let i = 0; i < this.number.length - 1; i++) {
        if (this.number[i] > this.number[i + 1]) {
          let midlertidlig = this.number[i];
          this.number[i] = this.number[i + 1];
          this.number[i + 1] = midlertidlig;
        }
      }
    }
  }

  organize() {
    this.number.sort(); // simplere sort
  }

  check() {
    // checker 1'er 2'er 3'er 4'er 5'er 6'er
    for (let j = 1; j < 7; j++) {
      for (let i = 0; i < this.number.length; i++) {
        if (this.number[i] === j) {
          this.mpoint[j] += j;
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
        if (this.mpoint[7] < sum) {
          this.mpoint[7] = sum;
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
        if (this.mpoint[8] < sum) {
          this.mpoint[8] = sum;
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
      this.mpoint[9] =
        this.number[0] +
        this.number[1] +
        this.number[2] +
        this.number[3] +
        this.number[4];
    } else if (
      this.number[0] === this.number[1] &&
      this.number[0] === this.number[2] &&
      this.number[3] === this.number[4] &&
      this.number[0] !== this.number[4]
    ) {
      this.mpoint[9] =
        this.number[0] +
        this.number[1] +
        this.number[2] +
        this.number[3] +
        this.number[4];
    }

    // lille straight
    if (this.number.toString() === [1, 2, 3, 4, 5].toString()) {
      this.mpoint[10] = 15; // 1+2+3+4+5
    }

    // stor straight
    if (this.number.toString() === [2, 3, 4, 5, 6].toString()) {
      this.mpoint[11] = 20; // 2+3+4+5+6
    }

    // yahtzee
    if (this.number[0] === this.number[4]) {
      this.mpoint[12] = this.number[0] * 5;
    }

    // chance
    this.mpoint[13] = this.number.reduce((a, b) => a + b, 0);
  }

  draw() {
    // tegn grid
    for (let i = 0; i < 14; i++) {
      for (let j = 0; j < 3; j++) {
        rect(
          width - twidth + j * (twidth / 3),
          0 + i * (theight / 14),
          twidth / 3,
          theight / 14
        );
      }
    }

    // tegn tekst
    for (let j = 0; j < this.cols.length; j++) {
      for (let i = 0; i < this.cols[j].length; i++) {
        let x = width - twidth + (j + 0.5) * (twidth / 3);
        let y = (i + 0.5) * (theight / 14);
        text(this.cols[j][i], x, y);
      }
    }
  }

  extra() {
    // checker om et par
    for (let i = 0; i < this.number.length - 1; i++) {
      if (this.number[i] === this.number[i + 1]) {
        let sum = this.number[i] + this.number[i + 1];
        if (this.mpoint[7] < sum) {
          this.mpoint[7] = sum;
        }
      }
    }
  }
}
