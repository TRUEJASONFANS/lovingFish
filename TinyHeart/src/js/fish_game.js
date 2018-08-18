import Ane from './ane_es6';
import FishBaby from './baby_es6';
import FishMom from './fishmom_es6';
import OceaContext from './ocea_context';
import Fruit from './fruit_es6';
import DataObj from './data_es6';
import Background from '../images/background.jpg'
import TimeLine from './time_line';
import { SSL_OP_SSLEAY_080_CLIENT_DH_BUG } from 'constants';
import Utils from './utils';
import Wave from './wave_es6';
import Halo from './halo_es6';
export default class FishGame {
  constructor(window) {
    this.canvas1 = document.getElementById("canvas1");
    this.canvas2 = document.getElementById("canvas2");
    this.ctx1 = this.canvas1.getContext("2d");
    this.ctx2 = this.canvas2.getContext("2d");
    this.window = window
    
    self.mx = this.canWidth * 0.5;
    self.my = this.canHeight * 0.5;
    this.canvas1.addEventListener('mousemove',this.onMouseMove, false);

    this.canWidth = this.canvas1.width;
    this.canHeight = this.canvas1.height;


    this.bg = new Image();
    this.bg.src = Background;
    this.timeLine = new TimeLine();

    this.oceaContext = new OceaContext(this.bg, this.canWidth, this.canHeight, this.ctx2);
    
    this.ane = new Ane(this.ctx2, this.canHeight,this.timeLine);
    self.data = new DataObj(this.ctx1, this.canWidth, this.canHeight, this.timeLine);
    this.fruit = new Fruit(this.ctx2, this.ane, this.timeLine);

    this.fishMom = new FishMom(this.canWidth, this.canHeight,this.timeLine, this.ctx1, self.data);
    // this.baby = new FishBaby(this.ctx1, this.canWidth, this.canHeight);
    this.onMouseMove.bind(this);
    this.ctx1.font = "30px Verdana";
    this.ctx1.textAlign = "center";

    this.baby = new FishBaby(this.ctx1, this.canWidth, this.canHeight, this.timeLine, this.fishMom);
    this.wave = new Wave(this.ctx1, this.timeLine);
    this.halo = new Halo(this.ctx1, this.timeLine);
  }
  onMouseMove(e) {
    if((e.offSetX || e.layerX)) {
      self.mx = e.offSetX == undefined ? e.layerX:e.offSetX;
      self.my = e.offSetY == undefined ? e.layerY:e.offSetY;
      self.data.setLocation(self.mx, self.my);
    }

  }
  gameloop() {
    requestAnimationFrame(this.gameloop.bind(this));
    this.timeLine.nextTick();
    this.oceaContext.drawBackground();
    this.ane.draw();
    this.fruit.monitor();
    this.ctx1.clearRect(0, 0, this.canWidth, this.canHeight);
    this.fruit.draw();
    this.fishMom.draw();
    Utils.momFruitsCollision(self.data, this.fruit, this.fishMom, this.wave);
    Utils.momBabyCollision(self.data, this.fishMom, this.baby, this.halo);
    this.wave.draw();
    this.baby.draw();
    this.halo.draw();
    self.data.draw();
  }
}