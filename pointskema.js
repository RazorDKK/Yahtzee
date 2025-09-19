class pointskema {
  constructor(num1, num2, num3, num4, num5) {
    this.number = [num1, num2, num3, num4, num5];

    //mpoint[(1)1'er,(2)2'er,(3)3'er,(4)4'er,(5)5'er,(6)6'er,(7)3ens,(8)4ens,(9)fuldt hus,(10)small straight,(11)Storstraight,(12)Yahtzee,(12)chance]
    this.mpoint[(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0)];
    for (let j = 0; j < 7; j++)
      for (let i = 1; i < 7; i++)
        if (this.number[i] > this.number[i + 1]) {
          midlertidlig = this.number[i];
          this.number[i] = this.number[i + 1];
          this.number[i + 1] = midlertidlig;
        }
  }

  organize() {
    this.number = sort(this.number, 5);
  }
  check() {
    // checker 1'er 2'er 3'er 4'er 5'er 6'er
    for (let j = 1; j < 7; j++)
      for (let i = 1; i < 7; i++)
        if ((this.number[j] = j)) {
          this.mpoint = [j] + j;
        }

    //checker om 3 ens
    for (let i; i < 3; i++)
      if ((this.number[i] == this.number[i + 1]) == this.number[i + 2]) {
        if (
          this.mpoint[7] <
          this.number[i] + this.number[i + 1] + this.number[i + 2]
        ) {
          this.mpoint[7] =
            this.number[i] + this.number[i + 1] + this.number[i + 2];
        }
      }
  }

  extra() {
    //checker om et par
    for (let i; i < 7; i++)
      if (this.number[i] == this.number[i + 1]) {
        if (this.mpoint[7] < this.number[i] + this.number[i + 1]) {
          this.mpoint[7] = this.number[i] + this.number[i + 1];
        }
      }
  }
}
