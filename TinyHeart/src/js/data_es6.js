export default class DataObj {
  constructor(ctx1, w, h, timeLine) {
    this.fruitNum = 0;
    this.double = 1;
    this.score = 0;
    this.gameover = false;
    this.alpha = 0;
    this.mx = 0;
    this.my = 0;
    this.ctx1 = ctx1;
    this.width = w;
    this.height = h;
    this.timeLine = timeLine;
  }
  getGameOver() {
    return this.gameover;
  }
  draw() {
    let deltaTime = this.timeLine.getDeltaTime();
    let w = this.width;
    let h = this.height;
    let ctx1 = this.ctx1;
    ctx1.shadowBlur = 10;
    ctx1.shadowColor = "white";
    ctx1.fillStyle = "white";
    ctx1.fillText("SCORE: " + this.score, w * 0.5, h - 20);

    if (this.gameover) {
      this.alpha += deltaTime * 0.0005;
      if (this.alpha > 1) {
        this.alpha = 1;
      }
      ctx1.fillStyle = "rgba(255,255,255," + this.alpha + ")";
      ctx1.fillText("GAMEOVER", w * 0.5, h * 0.5);
    }
  }
  addScore() {
    this.score += this.fruitNum * 100 * this.double;
    this.fruitNum = 0;
    this.double = 1;
  }
  setLocation(mx, my) {
    this.mx = mx;
    this.my = my;
  }
  getMX() {
    return this.mx;
  }
  getMY() {
    return this.my;
  }
}
