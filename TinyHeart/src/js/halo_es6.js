export class Halo {
  constructor() {
    this.x = [];
    this.y = [];
    this.alive = [];
    this.r = [];
    this.num = 5;
    for (var i = 0; i < this.num; i++) {
      this.x[i] = 0;
      this.y[i] = 0;
      this.alive[i] = false;
      this.r[i] = 0;
    }
  }
  draw() {
    ctx1.save();
    ctx1.lineWidth = 2;
    ctx1.shadowBlur = 10;
    ctx1.shadowColor = "rgba(203,91,0," + alpha + ")";
    for (var i = 0; i < this.num; i++) {
      if (this.alive[i]) {
        //draw
        this.r[i] += deltaTime * 0.05;
        if (this.r[i] > 100) {
          this.alive[i] = false;
          break;
        }
        var alpha = 1 - this.r[i] / 100;

        ctx1.beginPath();
        ctx1.arc(this.x[i], this.y[i], this.r[i], 0, Math.PI * 2);
        ctx1.closePath();
        ctx1.strokeStyle = "rgba(203,91,0," + alpha + ")";
        ctx1.stroke();
      }
    }
    ctx1.restore();
  }
  born() {
    for (var i = 0; i < this.num; i++) {
      if (!this.alive[i]) {
        this.x[i] = x;
        this.y[i] = y;
        this.r[i] = 10;
        this.alive[i] = true;
      }
    }
  }
}
