import utils from "./utils";

export default class FishMom {
  constructor(canWidth, canHeight, mx, my, timeLine, ctx1, data) {
    this.x;
    this.y;
    this.angle;

    this.momTailTimer = 0;
    this.momTailCount = 0;

    this.momEyeTimer = 0;
    this.momEyeCount = 0;
    this.momEyeInterval = 1000;

    this.momBodyCount = 0;

    this.x = canWidth * 0.5;
    this.y = canHeight * 0.5;
    this.angle = 0;
    this.timeLine = timeLine;

    this.mx = mx;
    this.my = my;
    this.ctx1 = ctx1;
    this.data = data;

    const context = require.context('../images', true,  /^\.\//)
    console.log('tag', context.keys())
    
    this.momTail = [];
    let fileName;
    let tail;
    for (var i = 0; i < 8; i++) {
      fileName = "./bigTail6.png";
      tail = context(fileName)
      this.momTail[i] = new Image();
      this.momTail[i].src = tail;
    }
    

    this.momEye = [];
    let eye;
    for (var i = 0; i < 2; i++) {
      fileName = "./babyEye" + i + ".png";
      eye = context(fileName)
      this.momEye[i] = new Image();
      this.momEye[i].src = eye;
    }

    this.momBodyOra = [];
    this.momBodyBlue = [];
    let bodyOra, bodyBlue;
    for (var i = 0; i < 8; i++) {
      fileName = "./bigSwim" + i + ".png";
      let bodyOra = context(fileName)
      this.momBodyOra[i] = new Image();
      this.momBodyOra[i].src = bodyOra;
      fileName = "./bigSwimBlue" + i + ".png";
      let bodyBlue = context(fileName);
      this.momBodyBlue[i] = new Image();
      this.momBodyBlue[i].src = bodyBlue;
    }

  }
  draw() {
    let mx = this.mx;
    let my = this.my;
    let deltaTime = this.timeLine.getDeltaTime()
    let ctx1 = this.ctx1;
    let momTail = this.momTail
    let momEye = this.momEye
    let momBodyBlue = this.momBodyBlue
    let momBodyOra = this.momBodyOra;
    let data = this.data

    this.x = utils.lerpDistance(mx, this.x, 0.9);
    this.y = utils.lerpDistance(my, this.y, 0.9);

    //delta angel.
    var deltaY = my - this.y;
    var deltaX = mx - this.x;
    var beta = Math.atan2(deltaY, deltaX) + Math.PI;

    //lerp angle
    this.angle = utils.lerpAngle(beta, this.angle, 0.6);

    this.momTailTimer += deltaTime;
    if (this.momTailTimer > 50) {
      this.momTailCount = (this.momTailCount + 1) % 8;
      this.momTailTimer %= 50;
    }

    //
    this.momEyeTimer += deltaTime;
    if (this.momEyeTimer > this.momEyeInterval) {
      this.momEyeCount = (this.momEyeCount + 1) % 2;
      this.momEyeTimer %= this.momEyeInterval;
      if (this.momEyeCount == 0) {
        this.momEyeInterval = Math.random() * 1500 + 2000;
      } else {
        this.momEyeInterval = 200;
      }
    }

    ctx1.save();
    ctx1.translate(this.x, this.y);
    ctx1.rotate(this.angle);

    var momTailCount = this.momTailCount;

    ctx1.drawImage(
      momTail[momTailCount],
      -momTail[momTailCount].width * 0.5 + 30,
      -momTail[momTailCount].height * 0.5
    );

    var momBodyCount = this.momBodyCount;

    if (data.double == 1) {
      ctx1.drawImage(
        momBodyOra[momBodyCount],
        -momBodyOra[momBodyCount].width * 0.5,
        -momBodyOra[momBodyCount].height * 0.5
      );
    } else {
      ctx1.drawImage(
        momBodyBlue[momBodyCount],
        -momBodyBlue[momBodyCount].width * 0.5,
        -momBodyBlue[momBodyCount].height * 0.5
      );
    }

    var momEyeCount = this.momEyeCount;
    ctx1.drawImage(
      momEye[momEyeCount],
      -momEye[momEyeCount].width * 0.5,
      -momEye[momEyeCount].height * 0.5
    );
    ctx1.restore();
  }
}
