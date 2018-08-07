import Ane from './ane_es6';
import FishBaby from './baby_es6';
import FishMom from './fishmom_es6';
import OceaContext from './ocea_context';
import Fruit from './fruit_es6';
import DataObj from './data_es6';
import Background from './background.jpg'
export default class FishGame {
  constructor() {
    this.canvas1 = document.getElementById("canvas1");
    this.canvas2 = document.getElementById("canvas2");
    this.ctx1 = this.canvas1.getContext("2d");
    this.ctx2 = this.canvas2.getContext("2d");

    this.canvas1.addEventListener('mousemove',this.onMouseMove, false);

    this.canWidth = this.canvas1.width;
    this.canHeight = this.canvas1.height;

    //this.ane = new Ane();
    //this.data = new DataObj();
    
    this.bg = new Image();
    this.bg.src = Background;
    this.lastTime = 0;
  
    this.oceaContext = new OceaContext(this.bg, this.canWidth, this.canHeight, this.ctx2);
    //this.oceaContext.drawBackground();
    this.gameloop();
 
  }
  onMouseMove(e) {
    // if(!this.data.gameover && (e.offSetX || e.layerX)) {
    //   mx = e.offSetX == undefined ? e.layerX:e.offSetX;
    //   my = e.offSetY == undefined ? e.layerY:e.offSetY;
    // }
  }
  gameloop() {
    window.requestAnimationFrame(this.gameloop());
    var now = Date.now();
    this.deltaTime = now - this.lastTime;
    this.lastTime = now;
  
    if(this.deltaTime > 50) {
      this.deltaTime = 50;
    }
    this.oceaContext.drawBackground();
  }
}