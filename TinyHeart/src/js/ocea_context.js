export default class OceaContext {
  constructor(bgPic, canWidth, canHeight, ctx2) {
    this.bgPic = bgPic;
    this.canWidth = canWidth;
    this.canHeight = canHeight;
    this.ctx2 = ctx2;
  }
  drawBackground() {
    this.ctx2.drawImage(this.bgPic, 0, 0, this.canWidth, this.canHeight);
  }

  monitorFruit(fruit) {
    var num = 0;
    for (var i = 0; i < fruit.num; i++) {
      if (fruit.alive[i]) num++;
    }
    if (num < 15) {
      sendFruit(fruit);
      return;
    }
  }

  sendFruit(fruit) {
    for (var i = 0; i < fruit.num; i++) {
      if (!fruit.alive[i]) {
        fruit.born(i);
        return;
      }
    }
  }

}
