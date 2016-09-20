
//renderer constants
//dimensions of the canvas (in pixels)
var GAME_WIDTH = 400, GAME_HEIGHT = 300;
var GAME_VIEW_ANGLE = 45, GAME_ASPECT = GAME_WIDTH/GAME_HEIGHT, RENDER_DISTANCE_NEAR = 0.1, RENDER_DISTANCE_FAR = 10000;

var renderer;
var camera;
var camera1;
var scene;
var playerMesh;
var player;

//constants
var ORIGIN = new THREE.Vector3(0,0,0);
//key codes
var LEFT_KEY = 37
var UP_KEY = 38;
var RIGHT_KEY = 39;
var DOWN_KEY = 40;
var SPACE_BAR = 32;
var A_KEY = 65;
var D_KEY = 68;
var S_KEY = 83;
var W_KEY = 87;

//keeps track of all keys that are down
var keys_pressed = []

var frame_count = 0;
var frame_count_start_time = 0;



