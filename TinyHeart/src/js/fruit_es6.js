export class Fruit {
  constructor() {
    this.alive = [];
    this.x = [];
    this.y = [];
    this.l = [];
    this.speed = [];
    this.fruitType = [];
    this.orange = new Image();
    this.blue = new Image();
    this.aneNO = [];
    this.num = 30;
    for (var i = 0; i < this.num; i++) {
      this.alive[i] = true;
      this.x[i] = 0;
      this.y[i] = 0;
      this.speed[i] = Math.random() * 0.01 + 0.005;
      this.aneNO[i] = 0;
      this.born(i);
    }
    this.orange.src = "./src/fruit.png";
    this.blue.src = "./src/blue.png";
  }

  draw() {
    for (var i = 0; i < this.num; i++) {
      //draw
      //find an ane,grow, fly up
      if (this.alive[i]) {
        if (this.fruitType[i] == "blue") {
          var pic = this.blue;
        } else {
          var pic = this.orange;
        }
        if (this.l[i] <= 14) {
          var NO = this.aneNO[i];
          this.x[i] = ane.headx[NO];
          this.y[i] = ane.heady[NO];
          this.l[i] += this.speed[i] * deltaTime;
        } else {
          this.y[i] -= this.speed[i] * 7 * deltaTime;
        }

        ctx2.drawImage(
          pic,
          this.x[i] - this.l[i] * 0.5,
          this.y[i] - this.l[i] * 0.5,
          this.l[i],
          this.l[i]
        );

        if (this.y[i] < 10) {
          this.alive[i] = false;
        }
      }
    }
  }

  born() {
    var aneID = Math.floor(Math.random() * ane.num);
    this.aneNO[i] = aneID;
    this.l[i] = 0;
    this.alive[i] = true;
    var ran = Math.random();
    if (ran < 0.3) {
      this.fruitType[i] = "blue";
    } else {
      this.fruitType[i] = "orange";
    }
  }

  update() {
    Fruit.num = 0;
  }

  dead(i) {
    this.alive[i] = false;
  }

}
