$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
     //toggleGrid();


    // TODO 2 - Create Platforms
    //createPlatform(0, 225, 100, 25)

    createPlatform(0, 720, 200, 10)

    createPlatform(100, 600, 100, 25)
    createPlatform(100, 458, 100, 25)
    createPlatform(100, 316, 100, 25)
    createPlatform(100, 174, 100, 25)
    createPlatform(100, 100, 10, 500)
    createPlatform(325, 100, 10, 10)

    createPlatform(700, 110, -400, -10)

    createPlatform(400, 100, 10, 10)
    createPlatform(500, 100, 10, 10)
    createPlatform(600, 100, 10, 10)
    createPlatform(700, 100, 100, 10)

    createPlatform(800, 100, 10, 100)

    createPlatform(700, 100, 10, 700)

    createPlatform(800, 200, 200, 10)
    createPlatform(1000, 200, 10, 50)
    createPlatform(1000, 250, 100, 10)
    createPlatform(1100, 200, 10, 60)
    createPlatform(1100, 200, 200, 10)
    createPlatform(1400, 350, -100, 10)
    createPlatform(1300, 350, 10, 400)
    createPlatform(775, 400, 525, 10)
    createPlatform(775, 500, 475, 10)
    createPlatform(775, 600, 525, 10)
    createPlatform(700, 700, 125, 10)
    createPlatform(900, 700, 50, 10)
    createPlatform(1005, 700, 50, 10)
    createPlatform(1125, 700, 50, 10)

    // TODO 3 - Create Collectables

    createCollectable("database", 1250, 700)
    createCollectable("database", 450, 50)
    createCollectable("database", 1375, 250)


    
    // TODO 4 - Create Cannons
    createCannon("left", 675, 10)
    createCannon("top", 275, 650)
    createCannon("top", 975, 500)
    createCannon("top", 1100, 500)
    createCannon("top", 1215, 500)
    createCannon("top", 1360, 500)

    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
