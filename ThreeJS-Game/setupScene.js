function initiateScene(){
	scene = new THREE.Scene();
		camera = new THREE.PerspectiveCamera(GAME_VIEW_ANGLE, GAME_ASPECT, RENDER_DISTANCE_NEAR, RENDER_DISTANCE_FAR);
	scene.add(camera);

//sets the initial camera position
	camera.position.set(0, 150, 400);
	camera.rotation.x = -0.50;
	camera1 = new Camera(camera);

//sets up the player
	var boxGeometry = new THREE.BoxGeometry(50, 70, 20);
	//makes all faces purple
	for(var i = 0; i < boxGeometry.faces.length; i++){
		boxGeometry.faces[i].color.setHex(0x652A9B);
	}
	//makes the front white
	boxGeometry.faces[8].color.setHex(0xFFFFFF);
	boxGeometry.faces[9].color.setHex(0xFFFFFF);
	var boxMaterial = new THREE.MeshPhongMaterial({vertexColors: THREE.FaceColors});
	boxGeometry.colorsNeedUpdate = true;
	playerMesh = new THREE.Mesh(boxGeometry, boxMaterial);
	playerMesh.position.x = 0;
	//playerMesh.castShadow = true;
	player = new Player(playerMesh);
	scene.add(playerMesh);


	//set up the second sphere
	var radius2 = 10, segments2 = 36, rings2 = 36;
	// create the sphere's material
	var sphereMaterial2 = new THREE.MeshPhongMaterial({color: 0xCCCCCC});
	// create a new mesh with
	// sphere geometry - we will cover
	// the sphereMaterial next!
	sphere2 = new THREE.Mesh(new THREE.SphereGeometry(radius2, segments2,rings2), sphereMaterial2);
	sphere2.position.set(100,25,50);

	scene.add(sphere2);

//sets up the floor

	var numCheckers = 16;
	var floorWidth = 500;
	var floorLength = 500;
	var checkerboardPlaneGeometry = new THREE.PlaneGeometry(floorLength, floorWidth, numCheckers, numCheckers);
	var checkerMaterialOne = new THREE.MeshPhongMaterial({color: 0x81A035, side: THREE.DoubleSide});
	var checkerMaterialTwo = new THREE.MeshPhongMaterial({color: 0x395000, side: THREE.DoubleSide});
	var checkerMaterials = [checkerMaterialOne, checkerMaterialTwo];
	for(x = 0; x < numCheckers; x++){
		for(y = 0; y < numCheckers; y++){
			i = x * numCheckers + y;
			j = 2 * i;
			checkerboardPlaneGeometry.faces[ j ].materialIndex = (x + y) % 2;
			checkerboardPlaneGeometry.faces[ j + 1 ].materialIndex = (x + y) % 2;}}
		   // checkerboardPlaneGeometry.faces[i].materialIndex = (x + y)%2;}}

	var plane = new THREE.Mesh(checkerboardPlaneGeometry, new THREE.MeshFaceMaterial(checkerMaterials));
	plane.position.set(0,-50,0);
	plane.rotation.set(Math.PI/2, 0, 0);
	//plane.receiveShadow = true;
	scene.add(plane);

	//sets up the lights

	var pointLight =
	new THREE.PointLight(0xFFFFFF);

	pointLight.position.x = 10;
	pointLight.position.y = 50;
	pointLight.position.z = 130;

	//pointLight.castShadow = true;
	scene.add(pointLight);

	var light = new THREE.AmbientLight( 0x404040 );
	scene.add( light );

	camera1.orbit(3*Math.PI/2, Math.PI/2.1);

//end of function initiateScene
}
