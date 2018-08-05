export default class OceaContext {
  constructor(bgPic, canWidth, canHeight) {
    this.bgPic = bgPicl;
    this.canWidth = canWidth;
    this.canHeight = canHeight;
  }
  drawBackground() {
    ctx2.drawImage(bgPic, 0, 0, canWidth, canHeight);
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
