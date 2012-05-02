
function onFailure(error) {
	console.log("onFailure()");
	
	//3. Alert user that an error has occurred
	alert("Failed to retrieve GPS: " + error.message + " (" + error.code + ")");
}


function onSuccess(position) {
	console.log("onSuccess()");
	
	//2. Display latitude, longitude, altitude and accuracy
	document.getElementById("txtLatitude").value = position.coords.latitude;
	document.getElementById("txtLongitude").value = position.coords.longitude;
	document.getElementById("txtAltitude").value = position.coords.altitude;
	document.getElementById("txtAccuracy").value = position.coords.accuracy;
}


function displayCurrentGPS() {
	console.log("displayCurrentGPS()");
	
	//1. Call navigator.geolocation.getCurrentPosition to retrieve GPS coordinates
	navigator.geolocation.getCurrentPosition(onSuccess, onFailure, null);
}

//Do not change - automatically attempt to display current GPS info when this screen has been loaded:
setTimeout(displayCurrentGPS, 100);
