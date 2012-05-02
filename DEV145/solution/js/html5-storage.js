function displayMessage() {
	console.log("displayMessage()");
	var message;
	
	//3. Read the message from local storage
	message = localStorage.getItem("message");
	
	//4. If a message exists, display it on the page.
	if (message) {
		document.getElementById("txtWelcomeMessage").value = message;
	}
}

function saveMessage() {
	console.log("saveMessage()");
	var message;
	//Read the message from the input box
	message = document.getElementById("txtWelcomeMessage").value;
	
	//1. Save the message to local storage
	localStorage.setItem("message", message);
	
	//2. Display an alert() confirmation to user
	alert("'" + message + "' saved to localStorage");
	
	//Return the user to the home screen
	bb.popScreen();
}

//Do not change - display the welcome message when this screen has been loaded:
setTimeout(displayMessage, 100);