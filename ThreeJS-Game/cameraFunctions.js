
var Camera = function(camera){
	this.camera = camera;
	this.theta = 0;
	this.phi = 0;
	this.orbitRadius = 400;
	this.focusPoint = new THREE.Vector3(0,0,0);
	this.camera.lookAt(focus);
}

Camera.prototype.orbit = function(theta, phi){

	if(this.phi + phi <= 0 || this.phi + phi >= Math.PI)
		return;

	this.theta += theta;
	this.phi += phi;
	this.camera.position.set(this.orbitRadius*Math.sin(this.phi)*Math.cos(this.theta), this.orbitRadius*Math.cos(this.phi) , this.orbitRadius*Math.sin(this.phi)*Math.sin(this.theta));
	$('#cameraAngle').text("Theta: " + this.theta.toFixed(3) + " Phi: " + this.phi.toFixed(3));
	this.camera.lookAt(this.focusPoint);
}

Camera.prototype.moveTo = function(newPosition){
	console.log("running this method");
	console.log(newPosition.x);
	this.focusPoint.set(this.focusPoint.x + (newPosition.x - this.camera.position.x), this.focusPoint.y + (newPosition.y - this.camera.position.y), this.focusPoint.z + (newPosition.z - this.camera.position.z));
	this.camera.position = newPosition;
}

Camera.prototype.move = function(distance, direction){
	var newPosition = this.camera.position.add(direction.normalize().multiplyScalar(distance));
	this.moveTo(newPosition);
}

Camera.prototype.moveForward = function(distance){
	this.move(distance, this.camera.getWorldDirection());
}



//moves the camera in an arc about the centerPoint
//points the camera toward the centerPoint
//centerPoint is a THREE.Vector3, theta and phi (radians) should be floats
function orbitCamera(centerPoint, theta, phi)
{
	//camera.lookAt(centerPoint);
	//distance between centerPoint and the camera in the xz plane
	var xzDistance = Math.sqrt(Math.pow(centerPoint.x - camera.position.x, 2) + Math.pow(centerPoint.z - camera.position.z, 2));
	//true 3d distance between centerPoint and the camera
	var xyzDistance = distance(centerPoint, camera.position);
	//gives the angle between the camera's location and the centerPoint
	var s = Math.atan2(camera.position.z - centerPoint.z, camera.position.x - centerPoint.x);
	//not quite right yet
	var t = Math.acos((camera.position.y - centerPoint.y)/xyzDistance);

	$('#cameraAngle').text("Theta: " + s.toFixed(3) + " Phi: " + t.toFixed(3));

	//ensures that phi is between 0 and pi (so the camera isn't up-side-down)
	if(phi+t < 0)
		phi = 0.00001 - t;
	if(phi+t > Math.PI)
		phi = Math.PI - t;

	//camera.position.x = centerPoint.x + xzDistance*Math.cos(theta+s);
	//camera.position.z = centerPoint.z + xzDistance*Math.sin(theta+s);

	camera.position.x = centerPoint.x + xyzDistance*Math.sin(phi+t)*Math.cos(theta+s);
	camera.position.y = centerPoint.y + xyzDistance*Math.cos(phi+t);
	camera.position.z = centerPoint.z + xyzDistance*Math.sin(phi+t)*Math.sin(theta+s);

	camera.lookAt(centerPoint);
//end function orbitCamera
}

function orbitCamera2(centerPoint, theta, phi, radius)
{
	//camera.lookAt(centerPoint);
	//distance between centerPoint and the camera in the xz plane
	var xzDistance = Math.sqrt(Math.pow(centerPoint.x - camera.position.x, 2) + Math.pow(centerPoint.z - camera.position.z, 2));
	//true 3d distance between centerPoint and the camera
	var xyzDistance = distance(centerPoint, camera.position);
	//gives the angle between the camera's location and the centerPoint
	var s = Math.atan2(camera.position.z - centerPoint.z, camera.position.x - centerPoint.x);
	//not quite right yet
	var t = Math.acos((camera.position.y - centerPoint.y)/xyzDistance);

	$('#cameraAngle').text("Theta: " + s.toFixed(3) + " Phi: " + t.toFixed(3));

	//ensures that phi is between 0 and pi (so the camera isn't up-side-down)
	if(phi+t < 0)
		phi = 0.00001 - t;
	if(phi+t > Math.PI)
		phi = Math.PI - t;

	//camera.position.x = centerPoint.x + xzDistance*Math.cos(theta+s);
	//camera.position.z = centerPoint.z + xzDistance*Math.sin(theta+s);

	camera.position.x = centerPoint.x + radius*Math.sin(phi+t)*Math.cos(theta+s);
	camera.position.y = centerPoint.y + radius*Math.cos(phi+t);
	camera.position.z = centerPoint.z + radius*Math.sin(phi+t)*Math.sin(theta+s);

	camera.lookAt(centerPoint);
//end function orbitCamera
}




//moves the camera a certain distance in a certain direction
//does not repoint the camera
//expects distance as a number and direction as a vector {x, y, z}, automatically normalizes it
//moves backwards if distance is negative
function moveCamera(distance, direction)
{
	var directionMagnitude = Math.sqrt(Math.pow(direction.x,2) + Math.pow(direction.y,2) + Math.pow(direction.z, 2));
	camera.position.x += distance*direction.x/directionMagnitude;
	camera.position.y += distance*direction.y/directionMagnitude;
	camera.position.z += distance*direction.z/directionMagnitude;
}

//returns the direction that the camera is pointing as a vector
function getCameraDirection(camera)
{
	return new THREE.Vector3(0,0,-1).applyQuaternion(camera.quaternion);
}
