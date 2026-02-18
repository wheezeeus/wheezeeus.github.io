function moveScenery() {
  // TODO 2: Move background scenery based on current level speed
  for (var i = 0; i < scenery.building.instances.length; i++) {
    scenery.building.instances[i].x += scenery.building.instances[i].speedX;
    scenery.building.instances.x += currentLevel.speed;

    if (scenery.building.instances[i].x + scenery.building.instances[i].width < 0) {
      scenery.building.instances[i].x = canvas.width;
    }
  }
  for (i = 0; i < scenery.lamp.instances.length; i++) {
    scenery.lamp.instances[i].x += scenery.building.instances[i].speedX;
    scenery.lamp.instances.x += currentLevel.speed;

    if (scenery.lamp.instances[i].x + scenery.lamp.instances[i].width < 0) {
      scenery.lamp.instances[i].x = canvas.width;
    }
  }
}

function generateLevel() {
  // TODO 3: Generate the current level's game objects
  for (var i = 0; i < currentLevel.gameObjects.length; i++) {
    var currentObject = currentLevel.gameObjects[i];
    create(currentObject);
    console.log("OBJECT CREATED");
  }
}

function create(obj) {
  // TODO 4: Create a game object based on its type and kind
  if (obj.type === "obstacle") {
    makeObstacle(obj);
  }
  else if (obj.type === "enemy") {
    makeEnemy(obj);
  }
  else if (obj.type === "powerup") {
    makePowerup(obj);
  }
  else if (obj.type === "goal") {
    makeGoal(obj);
  }
  else if (obj.type === "platform") {
    makePlatform(obj);
  }
}

function filterObjects(type) {
  // TODO 5: Return only the game objects of the specified type
  var fArray = [];
  for (var i = 0; i < gameObjects.length; i++) {
    if (gameObjects[i].type == type) {
      fArray.push(gameObjects[i]);
    }
  }
  console.log(fArray)
  return fArray;
}

function moveGameObjects(objectList) {
  // TODO 6: Move all game objects of a single type based on speeds
  for (i=0; i < objectList.length; i++) {
    var easyAccess = objectList[i]
    easyAccess.x -= currentLevel.speed;
    easyAccess.x += easyAccess.speedX;
    // console.log(easyAccess.x)
    // console.log(currentLevel.speed)
  }
}

function handleProjectileCollisions() {
  // TODO 8: Handle collisions between projectiles and enemies
  for (var i=0; i < gameObjects.length; i++) {
    var currentObject = gameObjects[i];
    for (var j = 0; j < projectiles.length; j++) {
      var currentProjectile = projectiles[j];
      if (isCollidingWithProjectile(currentObject, currentProjectile) === true) {
        handleProjectileObjectCollision(j, i);
      }
    }
  }
}

function handleHallebotGenericCollisions() {
  // TODO 9: Handle collisions between Hallebot and game objects
  for (i=0; i < gameObjects.length; i++) {
    var currentObject = gameObjects[i];
    if (currentObject.type != "platform") {
      if (isGenericCollision(currentObject) === true) {
        handleHallebotGenericCollision(i)
      }
    }
  }
}

function triggerLevelTransition() {
  // TODO 10: Transition to the next level or show win screen
  currentLevelIndex += 1;
  currentLevel = LEVELS[currentLevelIndex];
  gameObjects = [];

  if (currentLevelIndex >= LEVELS.length) {
    player.winConditionMet = true;
  }
}
