export default class FishBaby {
  constructor(ctx1, canWidth, canHeight) {
    this.babyEye = new Image();
    this.babyBody = new Image();

    this.x = canWidth * 0.5 - 50;
    this.y = canHeight * 0.5 + 50;
    this.angle = 0;
    this.babyEye.src = "./src/babyEye0.png";
    this.babyBody.src = "./src/babyFade0.png";

    this.babyTailTimer = 0;
    this.babyTailCount = 0;

    this.babyEyeTimer = 0;
    this.babyEyeCount = 0;
    this.babyEyeInterval = 1000;

    this.babyBodyTimer = 0;
    this.babyBodyCount = 0;
    this.babyBodyInterval = 1000;
    this.babyTail = [];
    this.babyEye = [];
    this.babyBody = [];
    this.babyTail = [];
    let babyEye = this.babyEye;
    let babyBody = this.babyBody;
    let babyTail = this.babyTail;
    for(var i = 0; i< 8;i ++) {
      babyTail[i] = new Image();
      babyTail[i].src ="./src/babyTail" + i + ".png";
    }
  
    for(var i = 0; i < 2 ;i ++) {
      babyEye[i] = new Image();
      babyEye[i].src = "./src/babyEye" + i + ".png";		
    }
  
    for(var i = 0; i < 20 ;i ++) {
      babyBody[i] = new Image();
      babyBody[i].src = "./src/babyFade" + i + ".png";		
    }

  }
  lerpDistance() {
    var delta = cur - aim;
    return aim + delta * ratio;
  }
  lerpAngle() {
    var d = b - a;
    if (d > Math.PI) d = d - 2 * Math.PI;
    if (d < -Math.PI) d = d + 2 * Math.PI;
    return a + d * t;
  }
  draw() {
    let ctx1 = this.ctx1;
    let babyEye = this.babyEye;
    let babyBody = this.babyBody;
    let babyTail = this.babyTail;
    //lerp x,y
    this.x = this.lerpDistance(mom.x, this.x, 0.98);
    this.y = this.lerpDistance(mom.y, this.y, 0.98);

    //delta angle
    var deltaY = mom.y - this.y;
    var deltaX = mom.x - this.x;
    var beta = Math.atan2(deltaY, deltaX) + Math.PI;

    this.angle = this.lerpAngle(beta, this.angle, 0.6);

    //baby tail count
    this.babyTailTimer += deltaTime;
    if (this.babyTailTimer > 50) {
      this.babyTailCount = (this.babyTailCount + 1) % 8;
      this.babyTailTimer %= 50;
    }

    //baby eye count
    this.babyEyeTimer += deltaTime;

    if (this.babyEyeTimer > this.babyEyeInterval) {
      this.babyEyeCount = (this.babyEyeCount + 1) % 2;
      this.babyEyeTimer %= this.babyEyeInterval;

      if (this.babyEyeCount == 0) {
        this.babyEyeInterval = Math.random() * 1500 + 2000;
      } else {
        this.babyEyeInterval = 200;
      }
    }

    this.babyBodyTimer += deltaTime;
    if (this.babyBodyTimer > 300) {
      this.babyBodyCount = this.babyBodyCount + 1;
      this.babyBodyTimer %= 300;
      if (this.babyBodyCount > 19) {
        this.babyBodyCount = 19;
        data.gameover = true;
      }
    }

    ctx1.save();
    ctx1.translate(this.x, this.y);
    ctx1.rotate(this.angle);

    var babyTailCount = this.babyTailCount;

    ctx1.drawImage(
      babyTail[babyTailCount],
      -babyTail[babyTailCount].width * 0.5 + 23,
      -babyTail[babyTailCount].height * 0.5
    );
    ctx1.drawImage(
      this.babyBody,
      -this.babyBody.width * 0.5,
      -this.babyBody.height * 0.5
    );

    var babyBodyCount = this.babyBodyCount;
    ctx1.drawImage(
      babyBody[babyBodyCount],
      -babyBody[babyBodyCount].width * 0.5,
      -babyBody[babyBodyCount].height * 0.5
    );

    var babyEyeCount = this.babyEyeCount;
    ctx1.drawImage(
      babyEye[babyEyeCount],
      -babyEye[babyEyeCount].width * 0.5,
      -babyEye[babyEyeCount].height * 0.5
    );

    ctx1.restore();
  }
}
