import Ane from './ane_es6';
import FishBaby from './baby_es6';
import FishMom from './fishmom_es6';
import OceaContext from './ocea_context';
import Fruit from './fruit_es6';
import DataObj from './data_es6';
import Background from './background.jpg'
import TimeLine from './time_line';
export default class FishGame {
  constructor(window) {
    this.canvas1 = document.getElementById("canvas1");
    this.canvas2 = document.getElementById("canvas2");
    this.ctx1 = this.canvas1.getContext("2d");
    this.ctx2 = this.canvas2.getContext("2d");
    this.window = window
    this.canvas1.addEventListener('mousemove',this.onMouseMove, false);

    this.canWidth = this.canvas1.width;
    this.canHeight = this.canvas1.height;

    this.bg = new Image();
    this.bg.src = Background;
    this.timeLine = new TimeLine();

    this.oceaContext = new OceaContext(this.bg, this.canWidth, this.canHeight, this.ctx2);
    
    this.ane = new Ane(this.ctx2, this.canHeight,this.timeLine);
    this.data = new DataObj();
    this.fruit = new Fruit(this.ctx2, this.ane, this.timeLine);
  
    // this.baby = new FishBaby(this.ctx1, this.canWidth, this.canHeight);
    this.onMouseMove.bind(this);
    this.ctx1.font = "30px Verdana";
    this.ctx1.textAlign = "center";
  }
  onMouseMove(e) {
    if(!this.data.gameover && (e.offSetX || e.layerX)) {
      mx = e.offSetX == undefined ? e.layerX:e.offSetX;
      my = e.offSetY == undefined ? e.layerY:e.offSetY;
    }
  }
  gameloop() {
    requestAnimationFrame(this.gameloop.bind(this));
    this.timeLine.nextTick();
    this.oceaContext.drawBackground();
    this.ane.draw();
    this.fruit.draw();
    this.fruit.monitor();
  }
}