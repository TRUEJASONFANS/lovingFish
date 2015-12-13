var babyObj = function()
{
	this.x;
	this.y;
	this.angle;
	this.babyEye = new Image();
	this.babyBody = new Image();
	this.babyTail = new Image();

}
babyObj.prototype.init = function()
{
	this.x = canWidth*0.5 - 50;
	this.y = canHeight*0.5 + 50;
	this.angle = 0;
	this.babyEye.src = "./src/babyEye0.png";
	this.babyBody.src = "./src/babyFade0.png";
	this.babyTail.src = "./src/babyTail0.png";
}
babyObj.prototype.draw = function()
{

	//lerp x,y
	this.x = this.lerpDistance(mom.x, this.x, 0.98);
	this.y = this.lerpDistance(mom.y, this.y , 0.98);

	//delta angle
	var deltaY = mom.y - this.y;
	var deltaX = mom.x - this.x;
	var beta = Math.atan2(deltaY,deltaX) + Math.PI;

	this.angle = this.lerpAngle(beta,this.angle,0.6);

	ctx1.save();
	ctx1.translate(this.x, this.y);
	ctx1.rotate(this.angle);
	ctx1.drawImage(this.babyTail, -this.babyTail.width*0.5+23 , - this.babyTail.height*0.5);
    ctx1.drawImage(this.babyBody, -this.babyBody.width*0.5 , - this.babyBody.height*0.5);
 	ctx1.drawImage(this.babyEye,  -this.babyEye.width*0.5 , - this.babyEye.height*0.5);

    ctx1.restore();
}

babyObj.prototype.lerpDistance = function (aim, cur, ratio) 
{
	var delta = cur - aim;
	return aim + delta * ratio;
}

babyObj.prototype.lerpAngle = function(a, b, t) {
	var d = b - a;
	if (d > Math.PI) d = d - 2 * Math.PI;
	if (d < -Math.PI) d = d + 2 * Math.PI;
	return a + d * t;
}