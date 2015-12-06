
var fishMom = function()
{
	this.x;
	this.y;
	this.bigEye = new Image();
	this.bigBody = new Image();
	this.bigTail = new Image();
	this.angle;
}
fishMom.prototype.init = function()
{
	// body...
	this.x = canWidth * 0.5;
	this.y = canHeight * 0.5;
	this.bigEye.src = "./src/bigEye0.png";
	this.bigBody.src= "./src/bigSwim0.png";
	this.bigTail.src = "./src/bigTail0.png";
	this.angle = 0;
}
fishMom.prototype.draw = function() 
{	
	this.x = this.lerpDistance(mx,this.x,0.9);
	this.y = this.lerpDistance(my,this.y,0.9);


	//delta angel.
	var deltaY = my - this.y;
	var deltaX = mx - this.x;
	var beta = Math.atan2(deltaY,deltaX) + Math.PI;

	//lerp angle
	this.angle = this.lerpAngle(beta,this.angle,0.6);

	ctx1.save();
	ctx1.translate(this.x ,this.y);
	ctx1.rotate(this.angle);
	ctx1.drawImage(this.bigEye, -this.bigEye.width*0.5, -this.bigEye.height*0.5);
	ctx1.drawImage(this.bigBody, -this.bigBody.width*0.5, -this.bigBody.height*0.5);
	ctx1.drawImage(this.bigTail, -this.bigTail.width*0.5 + 30, -this.bigTail.height*0.5);
	ctx1.restore();


}
fishMom.prototype.lerpDistance = function (aim, cur, ratio) {
	var delta = cur - aim;
	return aim + delta * ratio;
}
fishMom.prototype.lerpAngle = function(a, b, t) {
	var d = b - a;
	if (d > Math.PI) d = d - 2 * Math.PI;
	if (d < -Math.PI) d = d + 2 * Math.PI;
	return a + d * t;
}