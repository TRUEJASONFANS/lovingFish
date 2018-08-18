export default class Wave {
  constructor(ctx1, timeLine) {
    this.x = [];
    this.y = [];
    this.alive = [];
    this.r = [];
    this.num = 10;
    for (var i = 0; i < this.num; i++) {
      this.alive[i] = false;
      this.r[i] = 0;
    }
    this.timeLine = timeLine;
    this.ctx1 = ctx1;
  }

  draw() {
    let ctx1 = this.ctx1;
    let deltaTime = this.timeLine.getDeltaTime();
    ctx1.save();
    ctx1.lineWidth = 1;
    ctx1.shadowBlur = 5;
    ctx1.shadowColor = "white";
  
    for(var i=0; i< this.num; i++) {
      if(this.alive[i]) {
        this.r[i] += deltaTime* 0.04;
        if(this.r[i] > 60) {
          this.alive[i] = false;
          break;
        }
        var alpha = 1 - this.r[i] / 50;
        //draw
        ctx1.beginPath();
        ctx1.arc(this.x[i], this.y[i] , this.r[i] , 0 ,Math.PI * 2);
        ctx1.closePath();
        ctx1.strokeStyle = "rgba(255,255,255," + alpha +")";
        ctx1.stroke();
      }
    }
    ctx1.restore();
  }
  born(x, y) {
    for(var i = 0; i < this.num ; i++) {
      if(!this.alive[i]) {
        //born
        this.alive[i] = true;
        this.r[i] = 20;
        this.x[i] = x;
        this.y[i] = y;
        return; 
      }
    }
  }
}
