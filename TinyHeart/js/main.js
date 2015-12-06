var canvas1;
var canvas2;

var ctx1;
var ctx2;

var lastTime;
var deltaTime;
var bgPic = new Image();
var canWidth;
var canHeight;
var ane;
var fruit;
var mom;
var mx;
var my;

document.body.onload = game;
function game() {


	init();
	lastTime = Date.now();
	deltaTime = 0;
	gameloop();

}

function init() {
	//获得canvas context
	canvas1 = document.getElementById("canvas1");
	ctx1 = canvas1.getContext("2d");
	canvas2 = document.getElementById("canvas2");
	ctx2 = canvas2.getContext("2d");

	canvas1.addEventListener('mousemove',onMouseMove, false);

	bgPic.src = "./src/background.jpg";
	canWidth = canvas1.width;
	canHeight = canvas1.height;

	ane = new aneObj();
	ane.init();

	fruit = new fruitObj();
	fruit.init();

	mom = new fishMom();
	mom.init();

	mx = canWidth*0.5;
	my = canHeight*0.5;

}

function gameloop() {
	window.requestAnimationFrame(gameloop);
	var now = Date.now();
	deltaTime = now - lastTime;
	lastTime = now;

	if(deltaTime > 50) {
		deltaTime = 50;
	}

	drawBackground();
	ane.draw();
	fruitMonitor();
	ctx1.clearRect(0,0,canWidth,canHeight);
	fruit.draw();
	mom.draw();
	momFruitsCollision();
} 

function onMouseMove(e){
	if(e.offSetX || e.layerX) {
		mx = e.offSetX == undefined ? e.layerX:e.offSetX;
		my = e.offSetY == undefined ? e.layerY:e.offSetY;
	}
}