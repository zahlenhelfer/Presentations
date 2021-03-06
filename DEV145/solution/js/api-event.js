function doPause() {
	console.log("doPause");
	var newElement, dt = new Date(), outputMessages;
	
	//Get message container:
	outputMessages = document.getElementById("eventMessages");
	
	
	//2. Display message (in bold text) indicating pause event has occurred.
	newElement = document.createElement("b");
	newElement.innerHTML = "Application paused : " + dt + "<br/>";
	
	
	//Add message to page:	
	outputMessages.appendChild(newElement);
}
function doResume() {
	console.log("doResume");
	var newElement, dt = new Date(), outputMessages;
	
	//Get message container:
	outputMessages = document.getElementById("eventMessages");

	
	//3. Display message (in italics text) indicating resume event has occurred.
	newElement = document.createElement("i");
	newElement.innerHTML = "Application resumed : " + dt + "<br/>";

	
	//Add message to page:	
	outputMessages.appendChild(newElement);
}


//1. Create event listeners for the pause and resume events
blackberry.event.addEventListener("resume", doResume);
blackberry.event.addEventListener("pause", doPause);
