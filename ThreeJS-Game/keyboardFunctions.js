//sets the window to react to various key events
function startKeyListeners() {
	//triggers every frame a key is down
	window.onkeydown = function(e) {
		var code = e.keyCode;
		//adds the key to the list of currently pressed keys
		keys_pressed[code] = 1;
	}

	//triggers on the first frame a key is up
	window.onkeyup = function(e) {
		var code = e.keyCode;
		//removes the key from the list of currently pressed keys
		keys_pressed[code] = 0;
	}
}

function handleKeyboardInput() {
//console.log('Detected key press. The key code is: ' + code);
		if(keys_pressed[LEFT_KEY]){
			player.mesh.rotateY(0.1);
		}
		if(keys_pressed[RIGHT_KEY])
			player.mesh.rotateY(-0.1);
		if(keys_pressed[UP_KEY]){
			player.moveForward(5);
			camera1.moveForward(5);
		}
		if(keys_pressed[DOWN_KEY]){
			player.moveForward(-5);
			camera1.moveForward(-5);
		}
		if(keys_pressed[SPACE_BAR])
			player.mesh.position.y += 10;
		if(keys_pressed[D_KEY])
			camera1.orbit(-1/60*Math.PI, 0);
		if(keys_pressed[A_KEY])
			camera1.orbit(1/60*Math.PI, 0);
		if(keys_pressed[W_KEY])
			//moveCamera(5, getCameraDirection(camera));
			camera1.orbit(0, -1/60*Math.PI);
		if(keys_pressed[S_KEY])
			//moveCamera(-5, getCameraDirection(camera));
			camera1.orbit(0, 1/60*Math.PI);
}
