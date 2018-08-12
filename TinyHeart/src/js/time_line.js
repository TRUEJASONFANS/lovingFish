export default class TimeLine {
  constructor() {
    this.deltaTime = 0;
    this.lastTime = Date.now();
  }
  getDeltaTime() {
    return this.deltaTime;
  }
  nextTick() {
    let now = Date.now();
    let deltaTime = now - this.lastTime;
    this.lastTime = now;
  
    if(deltaTime > 50) {
      deltaTime = 50;
    }
    this.deltaTime = deltaTime;
  }
}