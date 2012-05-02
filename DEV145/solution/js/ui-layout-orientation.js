function displayCurrentOrientation() {
	console.log("displayCurrentOrientation()");
	var orientationRaw, orientationTxt;
	
	//2. Read the current orientation value
	orientationRaw = window.orientation;
	
	//3. Interpret the orientation value (0 = Top side up, 90 = Right side up)
	if (!orientationRaw) {
		orientationTxt = "Undefined";
	}
	else if ((orientationRaw == 0) || (orientationRaw == 180)) {
		orientationTxt = "Portrait";
	} else {
		orientationTxt = "Landscape";
	}
	
	//4. Output a message indicating whether user is in portrait or landscape mode:
	document.getElementById("txtOrientation").value = orientationTxt;
}

//1. Create an event listener for the orientation change event
window.addEventListener("orientationchange", displayCurrentOrientation, true);
window.addEventListener("deviceorientation", displayCurrentOrientation, true);

//Do not change - display the current orientation automatically when this screen has been loaded:
setTimeout(displayCurrentOrientation, 100);