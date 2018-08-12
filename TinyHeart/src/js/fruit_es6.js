import Orange from '../images/fruit.png';
import Blue from '../images/blue.png';
export default class Fruit {
  constructor(ctx2, ane) {
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
    this.ane = ane;
    for (var i = 0; i < this.num; i++) {
      this.alive[i] = true;
      this.x[i] = 0;
      this.y[i] = 0;
      this.speed[i] = Math.random() * 0.01 + 0.005;
      this.aneNO[i] = 0;
      this.born(i);
    }
    this.orange.src = Orange;
    this.blue.src = Blue;
    this.ctx2 = ctx2;
  }

  draw(timeLine) {
    let ctx2 = this.ctx2;
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
          this.x[i] = this.ane.headx[NO];
          this.y[i] = this.ane.heady[NO];
          this.l[i] += this.speed[i] * timeLine.deltaTime;
        } else {
          this.y[i] -= this.speed[i] * 7 * timeLine.deltaTime;
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

  born(i) {
    var aneID = Math.floor(Math.random() * this.ane.num);
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
