// This is a small program. There are only two sections. This first section is what runs
// as soon as the page loads.
$(document).ready(function () {
  render($("#display"), image);
  $("#apply").on("click", applyAndRender);
  $("#reset").on("click", resetAndRender);
});

/////////////////////////////////////////////////////////
//////// event handler functions are below here /////////
/////////////////////////////////////////////////////////

// this function resets the image to its original value; do not change this function
function resetAndRender() {
  reset();
  render($("#display"), image);
}

// this function applies the filters to the image and is where you should call
// all of your apply functions
function applyAndRender() {
  // Multiple TODOs: Call your apply function(s) here
  applyFilter(reddify);
  applyFilterNoBackground(decreaseBlue);
  applyFilter(increaseGreenbyBlue);
  applyFilterNoBackground(reddify);
  // do not change the below line of code
  render($("#display"), image);
}

/////////////////////////////////////////////////////////
// "apply" and "filter" functions should go below here //
/////////////////////////////////////////////////////////

// TODO 1, 2, 3 & 5: Create the applyFilter function here
function applyFilter(filterFunction) {
  for (i = 0; i < image.length; i++) {
    for (j = 0; j < image[i].length; j++) {
      var pixel = image[i][j]
      var pixelArray = rgbStringToArray(pixel)
      // This is where I’ll modify the color values later
      filterFunction(pixelArray)
      var updatedPixel = rgbArrayToString(pixelArray)
      image[i][j] = updatedPixel
    }
  }
}

// TODO 9 Create the applyFilterNoBackground function
function applyFilterNoBackground(filterFunction) {
  var backgroundColor = image[0][0]
  for (i = 0; i < image.length; i++) {
    for (j = 0; j < image[i].length; j++) {
      var pixel = image[i][j]
      if (image[i][j] !== backgroundColor) {
        var pixelArray = rgbStringToArray(pixel)
        filterFunction(pixelArray)
        var updatedPixel = rgbArrayToString(pixelArray)
        image[i][j] = updatedPixel
      }
    }
  }
}

// TODO 6: Create the keepInBounds function
function keepInBounds(number) {
  if (number < 0) {
    return 0
  }
  else if (number > 255) {
    return 255
  }
  else {
    return number
  }
  }
// TODO 4: Create reddify filter function
function reddify(list) {
  list[RED] += 200
  }
// TODO 7 & 8: Create more filter functions
function decreaseBlue(pixArr) {
  pixArr[BLUE] -= 50
  pixArr[BLUE] = keepInBounds(pixArr[BLUE])
}
function increaseGreenbyBlue(pixArr) {
  pixArr[GREEN] += pixArr[BLUE]
  pixArr[GREEN] = keepInBounds(pixArr[GREEN])
  }

// CHALLENGE code goes below here
