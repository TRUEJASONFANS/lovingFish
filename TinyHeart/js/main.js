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

	bgPic.src = "./src/background.jpg";
	canWidth = canvas1.width;
	canHeight = canvas1.height;

	ane = new aneObj();
	ane.init();

	fruit = new fruitObj();
	fruit.init();
}

function gameloop() {
	window.requestAnimationFrame(gameloop);
	var now = Date.now();
	deltaTime = now - lastTime;
	lastTime = now;

	drawBackground();
	ane.draw();
	fruit.draw();
}