var dataObj = function(){
	this.fruitNum = 0;
	this.double  = 1;
}

dataObj.prototype.reset = function() {
	this.fruitNum = 0;
	this.double = 1;
}
dataObj.prototype.draw = function() {
	var w = canvas1.width;
	var h = canvas2.height;

	ctx1.fillStyle = "white";
	ctx1.fillText(this.fruitNum, w*0.5, h-50);
	ctx1.fillText(this.double, w*0.5, h-80);


}