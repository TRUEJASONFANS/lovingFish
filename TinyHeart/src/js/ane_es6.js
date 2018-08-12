export default class Ane {
  constructor(ctx2, canHeight, timeLine) {
    //start point , control point,  end point(sin)
    this.rootx = []; // start
    this.headx = []; // end
    this.heady = [];

    this.x = [];
    this.len = [];
    this.alpha = 0;
    this.amp = [];
    this.num = 50;
    for (var i = 0; i < this.num; i++) {
      this.rootx[i] = i * 16 + Math.random() * 20;
      this.headx[i] = this.rootx[i];
      this.heady[i] = canHeight - 280 + Math.random() * 50;
      this.amp[i] = Math.random() * 50 + 50;
    }
    this.canHeight = canHeight;
    this.timeLine = timeLine;
    this.ctx2 = ctx2;
  }
  draw() {
    let deltime = this.timeLine.getDeltaTime();
    this.alpha += deltime * 0.0008;
    var l = Math.sin(this.alpha);
    let ctx2 = this.ctx2;
    ctx2.save();
    ctx2.globalAlpha = 0.6;
    console.log(l);
    for (var i = 0; i < this.num; i++) {
      ctx2.beginPath();
      ctx2.moveTo(this.rootx[i], this.canHeight); // start point
      this.headx[i] = this.rootx[i] + l * this.amp[i];
      ctx2.quadraticCurveTo(
        this.rootx[i],
        this.canHeight - 100,
        this.headx[i],
        this.heady[i]
      );
      ctx2.lineWidth = 20;
      ctx2.lineCap = "round";
      ctx2.strokeStyle = "#3b154e";
      ctx2.stroke();
    }

    ctx2.restore();
  }
}
