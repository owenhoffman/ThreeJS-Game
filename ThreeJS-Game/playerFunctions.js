

var Player = function(mesh){
this.mesh = mesh;

}

Player.prototype.moveTo = function(newPosition){
	this.mesh.position = newPosition;
}

Player.prototype.move = function(distance, direction){
	var newPosition = this.mesh.position.add(direction.normalize().multiplyScalar(distance));
	this.moveTo(newPosition);
}

Player.prototype.moveForward = function(distance){
	this.move(distance, this.mesh.getWorldDirection());
}

Player.prototype.getPrintablePosition = function(){
	return;
}

/*
//expects newPosition to be a THREE.Vector3 containing the xyz coordinates of the new location
//sets the player's position to a new position
function movePlayerTo(newPosition){
	playerMesh.position.x = newPosition.x;
	playerMesh.position.y = newPosition.y;
	playerMesh.position.z = newPosition.z;
}

//expects distance to be a number, direction to be a THREE.Vector3
//automatically normalizes direction vector
//moves the player a certain distance in a certain direction
function movePlayer(distance, direction){
	var newPosition = playerMesh.position.add(direction.normalize().multiplyScalar(distance));
	movePlayerTo(newPosition);
}

//expects distance to be a number
//moves the player in the direction he is already facing
function movePlayerForward(distance){
	movePlayer(distance, playerMesh.getWorldDirection());
}
*/
