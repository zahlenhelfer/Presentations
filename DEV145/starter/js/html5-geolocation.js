
function onFailure(error) {
	console.log("onFailure()");
	
	//3. Alert user that an error has occurred

}


function onSuccess(position) {
	console.log("onSuccess()");
	
	//2. Display latitude, longitude, altitude and accuracy
	
}


function displayCurrentGPS() {
	console.log("displayCurrentGPS()");
	
	//1. Call navigator.geolocation.getCurrentPosition to retrieve GPS coordinates
	
}

//Do not change - automatically attempt to display current GPS info when this screen has been loaded:
setTimeout(displayCurrentGPS, 100);
